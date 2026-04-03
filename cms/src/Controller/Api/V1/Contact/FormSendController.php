<?php

declare(strict_types=1);

namespace App\Controller\Api\V1\Contact;

use App\Exception\EmptyStringException;
use Psr\Log\LoggerInterface;
use QuantumView\Core\Contact\FormSendHandler;
use QuantumView\Core\Contact\Model\Contact;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

final readonly class FormSendController
{
    public function __construct(
        private FormSendHandler $contactFormSendHandler,
        private LoggerInterface $logger,
    ) {
    }

    public function __invoke(Request $request): JsonResponse
    {
        try {
            $requestContent = \json_decode($request->getContent(), true);
            $contact = new Contact(
                $requestContent['name'] ?? '',
                $requestContent['email'] ?? '',
                $requestContent['organization'] ?? '',
                $requestContent['topic'] ?? '',
                $requestContent['message'] ?? '',
            );
            $this->logger->info('POST to /api/v1/contact', [
                'contactName' => $contact->name,
            ]);
            $this->logger->debug('POST to /api/v1/contact', [
                'contactName' => $contact->name,
                'contactEmail' => $contact->email,
                'contactOrganization' => $contact->organization,
                'contactTopic' => $contact->topic,
                'contactMessage' => $contact->message,
            ]);
            $this->contactFormSendHandler->handle($contact);
            $this->logger->info('Contact form is sent successfully.');

            return new JsonResponse([
                'message' => 'Success.',
            ], 200);
        } catch (EmptyStringException $exception) {
            $this->logger->notice('Contact form data is invalid.', [
                'exceptionMessage' => $exception->getMessage(),
            ]);

            return new JsonResponse([
                'message' => 'Bad Request.',
            ], 400);
        } catch (\Throwable $exception) {
            $this->logger->notice('Contact form is not sent.', [
                'exceptionMessage' => $exception->getMessage(),
            ]);

            return new JsonResponse([
                'message' => 'Internal Server Error.',
            ], 500);
        }
    }
}

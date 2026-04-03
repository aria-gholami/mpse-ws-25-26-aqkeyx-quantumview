<?php

declare(strict_types=1);

namespace App\Security;

use App\Security\Exception\InvalidApiKeyException;
use Psr\Log\LoggerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Event\RequestEvent;

final readonly class ValidateApiKeySubscriber implements EventSubscriberInterface
{
    public function __construct(
        private ApiKeyValidator $apiKeyValidator,
        private LoggerInterface $logger,
    ) {
    }

    #[\Override]
    public static function getSubscribedEvents(): array
    {
        return [
            'kernel.request' => ['validateApiKey', 10],
        ];
    }

    public function validateApiKey(RequestEvent $event): RequestEvent
    {
        try {
            $this->apiKeyValidator->validateRequest($event->getRequest());
        } catch (InvalidApiKeyException) {
            $this->logger->notice('Invalid api key provided.');
            $event->setResponse(new JsonResponse([
                'message' => 'Unauthorized.',
            ], 401));
        }

        return $event;
    }
}

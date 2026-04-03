<?php

declare(strict_types=1);

namespace App\Contact;

use QuantumView\Core\Contact\FormSendHandler as FormSendHandlerInterface;
use QuantumView\Core\Contact\Model\Contact;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;

final readonly class FormSendHandler implements FormSendHandlerInterface
{
    public function __construct(
        private MailerInterface $mailer,
        private string $adminEmail,
    ) {
    }

    /**
     * @throws TransportExceptionInterface
     */
    #[\Override]
    public function handle(Contact $contact): void
    {
        $email = (new TemplatedEmail())
            ->from($this->adminEmail)
            ->replyTo($contact->email)
            ->to($this->adminEmail)
            ->subject('Kontaktanfrage: ' . $contact->topic)
            ->htmlTemplate('emails/contact.html.twig')
            ->context([
                'contact' => $contact,
            ]);

        $this->mailer->send($email);
    }
}

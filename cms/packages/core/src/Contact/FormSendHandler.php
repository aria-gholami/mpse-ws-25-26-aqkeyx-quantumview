<?php

declare(strict_types=1);

namespace QuantumView\Core\Contact;

use QuantumView\Core\Contact\Model\Contact;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;

interface FormSendHandler
{
    /**
     * @throws TransportExceptionInterface
     */
    public function handle(Contact $contact): void;
}

<?php

declare(strict_types=1);

namespace QuantumView\Core\Contact\Model;

use App\Exception\EmptyStringException;

final readonly class Contact
{
    /**
     * @throws EmptyStringException
     */
    public function __construct(
        public string $name,
        public string $email,
        public string $organization,
        public string $topic,
        public string $message,
    ) {
        if ('' === $name) {
            throw EmptyStringException::stringIsEmpty('contactName');
        }
        if ('' === $email) {
            throw EmptyStringException::stringIsEmpty('contactEmail');
        }
        if ('' === $message) {
            throw EmptyStringException::stringIsEmpty('contactMessage');
        }
    }
}

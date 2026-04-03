<?php

declare(strict_types=1);

namespace App\Exception;

final class EmptyStringException extends ValidationException
{
    public static function stringIsEmpty(string $identifier): self
    {
        return new self(
            parent::buildMessage(
                $identifier,
                \sprintf('Value for "%s" should not be empty.', $identifier),
            ),
        );
    }
}

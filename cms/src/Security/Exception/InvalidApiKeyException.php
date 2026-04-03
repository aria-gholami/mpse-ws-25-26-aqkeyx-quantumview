<?php

declare(strict_types=1);

namespace App\Security\Exception;

use App\Security\DefaultApiKeyValidator;

final class InvalidApiKeyException extends \Exception
{
    private const string MESSAGE_TEMPLATE = 'Authentication failed with error: "%s"';

    public static function headerIsMissing(): self
    {
        return new self(
            \sprintf(
                self::MESSAGE_TEMPLATE,
                \sprintf(
                    'Header "%s" is not set.',
                    DefaultApiKeyValidator::HEADER_NAME,
                ),
            ),
        );
    }

    public static function invalidApiKey(): self
    {
        return new self(\sprintf(self::MESSAGE_TEMPLATE, 'Invalid API key.'));
    }
}

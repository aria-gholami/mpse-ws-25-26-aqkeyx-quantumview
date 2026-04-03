<?php

declare(strict_types=1);

namespace App\Security;

use App\Security\Exception\InvalidApiKeyException;
use Symfony\Component\HttpFoundation\Request;

interface ApiKeyValidator
{
    /**
     * @throws InvalidApiKeyException
     */
    public function validateRequest(Request $request): bool;
}

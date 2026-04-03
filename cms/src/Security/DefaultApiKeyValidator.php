<?php

declare(strict_types=1);

namespace App\Security;

use App\Security\Exception\InvalidApiKeyException;
use Psr\Log\LoggerInterface;
use Symfony\Component\HttpFoundation\Request;

final readonly class DefaultApiKeyValidator implements ApiKeyValidator
{
    public const string HEADER_NAME = 'api-key';

    public function __construct(
        private string $apiKey,
        private LoggerInterface $logger,
    ) {
    }

    /**
     * @throws InvalidApiKeyException
     */
    #[\Override]
    public function validateRequest(Request $request): bool
    {
        if (\str_starts_with($request->getPathInfo(), '/admin')) {
            return true;
        }

        if (false === $request->headers->has(self::HEADER_NAME)) {
            $this->logger->info('No api key header found in request.', ['required-header' => self::HEADER_NAME]);
            throw InvalidApiKeyException::headerIsMissing();
        }

        if ($this->requestContainsValidApiKey($request)) {
            return true;
        }

        $this->logger->info('Invalid api key provided.', ['required-header' => self::HEADER_NAME]);
        $this->logger->debug('Invalid api key provided.', ['required-header' => self::HEADER_NAME, 'key' => $request->headers->get(self::HEADER_NAME)]);

        throw new InvalidApiKeyException('Api key is invalid.');
    }

    private function requestContainsValidApiKey(Request $request): bool
    {
        return $request->headers->get(self::HEADER_NAME) === $this->apiKey;
    }
}

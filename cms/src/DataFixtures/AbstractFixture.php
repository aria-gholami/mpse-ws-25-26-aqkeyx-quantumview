<?php

declare(strict_types=1);

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Sulu\Content\Domain\Model\WorkflowInterface;
use Sulu\Messenger\Infrastructure\Symfony\Messenger\FlushMiddleware\EnableFlushStamp;
use Sulu\Page\Application\Message\ApplyWorkflowTransitionPageMessage;
use Symfony\Component\Messenger\Envelope;
use Symfony\Component\Messenger\MessageBusInterface;

abstract class AbstractFixture extends Fixture
{
    protected const string WEBSPACE_KEY = 'website';
    protected const string LOCALE_EN = 'en';
    protected const string LOCALE_DE = 'de';
    protected const string DEFAULT_TEMPLATE = 'default';

    public function __construct(
        private readonly MessageBusInterface $messageBus,
    ) {
    }

    protected function publishPage(string $uuid, string $locale): void
    {
        $this->messageBus->dispatch(new Envelope(
            new ApplyWorkflowTransitionPageMessage(
                ['uuid' => $uuid],
                $locale,
                WorkflowInterface::WORKFLOW_TRANSITION_PUBLISH,
            ),
            [new EnableFlushStamp()],
        ));
    }
}

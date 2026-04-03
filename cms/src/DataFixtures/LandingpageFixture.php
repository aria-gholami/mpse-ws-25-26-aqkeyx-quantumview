<?php

declare(strict_types=1);

namespace App\DataFixtures;

use Doctrine\Persistence\ObjectManager;
use Sulu\Messenger\Infrastructure\Symfony\Messenger\FlushMiddleware\EnableFlushStamp;
use Sulu\Page\Application\Message\CreatePageMessage;
use Sulu\Page\Application\Message\ModifyPageMessage;
use Sulu\Page\Application\MessageHandler\CreatePageMessageHandler;
use Sulu\Page\Domain\Model\PageInterface;
use Symfony\Component\Messenger\Envelope;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Component\Messenger\Stamp\HandledStamp;

final class LandingpageFixture extends AbstractFixture
{
    private const string LANDINGPAGE_TITLE = 'Landingpage';
    private const string LANDINGPAGE_TEMPLATE = 'landingpage';
    private const string LANDINGPAGE_URL = '/landingpage';

    public function __construct(
        private readonly MessageBusInterface $messageBus,
    ) {
        parent::__construct($this->messageBus);
    }

    #[\Override]
    public function load(ObjectManager $manager): void
    {
        $newsItemsEn = [
            [
                'type' => 'newsItem',
                'date' => '2026-01-15',
                'category' => 'Project',
                'title' => 'Project Kickoff',
                'description' => 'The project officially starts with the first public announcement.',
                'host' => 'Research Group Hochschule Darmstadt',
                'newsLink' => 'https://quantumview.ddev.site:8003/landingpage/news/workshop.json',
            ],
            [
                'type' => 'newsItem',
                'date' => '2026-01-16',
                'category' => 'Project',
                'title' => 'Project Kickoff',
                'description' => 'The project is running.',
                'host' => 'Research Group Hochschule Darmstadt',
            ],
            [
                'type' => 'newsItem',
                'date' => '2026-01-17',
                'category' => 'Project',
                'title' => 'Project Kickoff',
                'description' => 'The project is ended.',
                'host' => 'Research Group Hochschule Darmstadt',
            ],
            [
                'type' => 'newsItem',
                'date' => '2026-01-16',
                'category' => 'Project',
                'title' => 'Project Kickoff',
                'description' => 'The project is running.',
                'host' => 'Research Group Hochschule Darmstadt',
            ],
            [
                'type' => 'newsItem',
                'date' => '2026-01-17',
                'category' => 'Project',
                'title' => 'Project Kickoff',
                'description' => 'The project is ended.',
                'host' => 'Research Group Hochschule Darmstadt',
            ],
            [
                'type' => 'newsItem',
                'date' => '2026-01-16',
                'category' => 'Project',
                'title' => 'Project Kickoff',
                'description' => 'The project is running.',
                'host' => 'Research Group Hochschule Darmstadt',
            ],
            [
                'type' => 'newsItem',
                'date' => '2026-01-17',
                'category' => 'Project',
                'title' => 'Project Kickoff',
                'description' => 'The project is ended.',
                'host' => 'Research Group Hochschule Darmstadt',
            ],
            [
                'type' => 'newsItem',
                'date' => '2026-01-16',
                'category' => 'Project',
                'title' => 'Project Kickoff',
                'description' => 'The project is running.',
                'host' => 'Research Group Hochschule Darmstadt',
            ],
            [
                'type' => 'newsItem',
                'date' => '2026-01-17',
                'category' => 'Project',
                'title' => 'Project Kickoff',
                'description' => 'The project is ended.',
                'host' => 'Research Group Hochschule Darmstadt',
            ],
        ];
        $newsItemsDe = [
            [
                'type' => 'newsItem',
                'date' => '2026-01-15',
                'category' => 'Project',
                'title' => 'Projektstart',
                'description' => 'Das Projekt startet offiziell mit der ersten öffentlichen Ankündigung.',
                'host' => 'Research Group Hochschule Darmstadt',
                'newsLink' => 'https://quantumview.ddev.site:8003/de/landingpage/news/workshop.json',
            ],
            [
                'type' => 'newsItem',
                'date' => '2026-01-16',
                'category' => 'Project',
                'title' => 'Projektstart',
                'description' => 'Das Projekt läuft.',
                'host' => 'Research Group Hochschule Darmstadt',
            ],
            [
                'type' => 'newsItem',
                'date' => '2026-01-17',
                'category' => 'Project',
                'title' => 'Projektstart',
                'description' => 'Das Projekt ist beendet.',
                'host' => 'Research Group Hochschule Darmstadt',
            ],
            [
                'type' => 'newsItem',
                'date' => '2026-01-16',
                'category' => 'Project',
                'title' => 'Projektstart',
                'description' => 'Das Projekt läuft.',
                'host' => 'Research Group Hochschule Darmstadt',
            ],
            [
                'type' => 'newsItem',
                'date' => '2026-01-17',
                'category' => 'Project',
                'title' => 'Projektstart',
                'description' => 'Das Projekt ist beendet.',
                'host' => 'Research Group Hochschule Darmstadt',
            ],
            [
                'type' => 'newsItem',
                'date' => '2026-01-16',
                'category' => 'Project',
                'title' => 'Projektstart',
                'description' => 'Das Projekt läuft.',
                'host' => 'Research Group Hochschule Darmstadt',
            ],
            [
                'type' => 'newsItem',
                'date' => '2026-01-17',
                'category' => 'Project',
                'title' => 'Projektstart',
                'description' => 'Das Projekt ist beendet.',
                'host' => 'Research Group Hochschule Darmstadt',
            ],
            [
                'type' => 'newsItem',
                'date' => '2026-01-16',
                'category' => 'Project',
                'title' => 'Projektstart',
                'description' => 'Das Projekt läuft.',
                'host' => 'Research Group Hochschule Darmstadt',
            ],
            [
                'type' => 'newsItem',
                'date' => '2026-01-17',
                'category' => 'Project',
                'title' => 'Projektstart',
                'description' => 'Das Projekt ist beendet.',
                'host' => 'Research Group Hochschule Darmstadt',
            ],
        ];
        $landingpageDataEn = [
            'title' => self::LANDINGPAGE_TITLE,
            'template' => self::LANDINGPAGE_TEMPLATE,
            'locale' => self::LOCALE_EN,
            'url' => self::LANDINGPAGE_URL,
            'newsItems' => $newsItemsEn,
        ];
        $landingpageDataDe = [
            'title' => self::LANDINGPAGE_TITLE,
            'template' => self::LANDINGPAGE_TEMPLATE,
            'locale' => self::LOCALE_DE,
            'url' => self::LANDINGPAGE_URL,
            'newsItems' => $newsItemsDe,
        ];

        $envelope = $this->messageBus->dispatch(new Envelope(
            new CreatePageMessage(self::WEBSPACE_KEY, CreatePageMessageHandler::HOMEPAGE_PARENT_ID, $landingpageDataEn),
            [new EnableFlushStamp()],
        ));
        /** @var HandledStamp|null $handledStamp */
        $handledStamp = $envelope->last(HandledStamp::class);
        /** @var PageInterface $landingpage */
        $landingpage = $handledStamp?->getResult();
        $this->messageBus->dispatch(new Envelope(
            new ModifyPageMessage(['uuid' => $landingpage->getUuid()], $landingpageDataDe),
            [new EnableFlushStamp()],
        ));

        $this->publishPage($landingpage->getUuid(), self::LOCALE_EN);
        $this->publishPage($landingpage->getUuid(), self::LOCALE_DE);
    }
}

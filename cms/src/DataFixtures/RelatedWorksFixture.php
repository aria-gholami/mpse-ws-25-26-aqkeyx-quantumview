<?php

declare(strict_types=1);

namespace App\DataFixtures;

use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Sulu\Messenger\Infrastructure\Symfony\Messenger\FlushMiddleware\EnableFlushStamp;
use Sulu\Page\Application\Message\CreatePageMessage;
use Sulu\Page\Application\Message\ModifyPageMessage;
use Sulu\Page\Domain\Model\PageInterface;
use Sulu\Page\Domain\Repository\PageRepositoryInterface;
use Symfony\Component\Messenger\Envelope;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Component\Messenger\Stamp\HandledStamp;

final class RelatedWorksFixture extends AbstractFixture implements DependentFixtureInterface
{
    private const string RELATED_WORKS_TEMPLATE = 'related-works';
    private const string RELATED_WORKS_PATH = '/landingpage/relatedWorks';

    public function __construct(
        private readonly MessageBusInterface $messageBus,
        private readonly PageRepositoryInterface $pageRepository,
    ) {
        parent::__construct($this->messageBus);
    }

    #[\Override]
    public function getDependencies(): array
    {
        return [
            LandingpageFixture::class,
        ];
    }

    #[\Override]
    public function load(ObjectManager $manager): void
    {
        $landingpage = $this->pageRepository->findOneBy([
            'parentId' => null,
        ]);
        if (!$landingpage instanceof PageInterface) {
            return;
        }

        $relatedWorksItemsEn = [
            [
                'type' => 'relatedWorkItem',
                'title' => 'PROLEAD_SW - Probing-Based Software Leakage Detection for ARM Binaries',
                'description' => 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                'author' => 'Jannik Zeitschner, Nicolai Müller, Amir Moradi',
                'relatedWorkLink' => 'https://eprint.iacr.org/2023/034',
            ],
            [
                'type' => 'relatedWorkItem',
                'title' => 'PROLEAD_SW - Probing-Based Software Leakage Detection for ARM Binaries',
                'description' => 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                'author' => 'Jannik Zeitschner, Nicolai Müller, Amir Moradi',
                'relatedWorkLink' => 'https://eprint.iacr.org/2023/034',
            ],
            [
                'type' => 'relatedWorkItem',
                'title' => 'PROLEAD_SW - Probing-Based Software Leakage Detection for ARM Binaries',
                'description' => 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                'author' => 'Jannik Zeitschner, Nicolai Müller, Amir Moradi',
                'relatedWorkLink' => 'https://eprint.iacr.org/2023/034',
            ],
            [
                'type' => 'relatedWorkItem',
                'title' => 'PROLEAD_SW - Probing-Based Software Leakage Detection for ARM Binaries',
                'description' => 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                'author' => 'Jannik Zeitschner, Nicolai Müller, Amir Moradi',
                'relatedWorkLink' => 'https://eprint.iacr.org/2023/034',
            ],
            [
                'type' => 'relatedWorkItem',
                'title' => 'PROLEAD_SW - Probing-Based Software Leakage Detection for ARM Binaries',
                'description' => 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                'author' => 'Jannik Zeitschner, Nicolai Müller, Amir Moradi',
                'relatedWorkLink' => 'https://eprint.iacr.org/2023/034',
            ],
            [
                'type' => 'relatedWorkItem',
                'title' => 'PROLEAD_SW - Probing-Based Software Leakage Detection for ARM Binaries',
                'description' => 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                'author' => 'Jannik Zeitschner, Nicolai Müller, Amir Moradi',
                'relatedWorkLink' => 'https://eprint.iacr.org/2023/034',
            ],
            [
                'type' => 'relatedWorkItem',
                'title' => 'PROLEAD_SW - Probing-Based Software Leakage Detection for ARM Binaries',
                'description' => 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                'author' => 'Jannik Zeitschner, Nicolai Müller, Amir Moradi',
                'relatedWorkLink' => 'https://eprint.iacr.org/2023/034',
            ],
            [
                'type' => 'relatedWorkItem',
                'title' => 'PROLEAD_SW - Probing-Based Software Leakage Detection for ARM Binaries',
                'description' => 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                'author' => 'Jannik Zeitschner, Nicolai Müller, Amir Moradi',
                'relatedWorkLink' => 'https://eprint.iacr.org/2023/034',
            ],
            [
                'type' => 'relatedWorkItem',
                'title' => 'PROLEAD_SW - Probing-Based Software Leakage Detection for ARM Binaries',
                'description' => 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                'author' => 'Jannik Zeitschner, Nicolai Müller, Amir Moradi',
                'relatedWorkLink' => 'https://eprint.iacr.org/2023/034',
            ],
        ];
        $relatedWorksItemsDe = [
            [
                'type' => 'relatedWorkItem',
                'title' => 'PROLEAD_SW - Probing-Based Software Leakage Detection for ARM Binaries',
                'description' => 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                'author' => 'Jannik Zeitschner, Nicolai Müller, Amir Moradi',
                'relatedWorkLink' => 'https://eprint.iacr.org/2023/034',
            ],
            [
                'type' => 'relatedWorkItem',
                'title' => 'PROLEAD_SW - Probing-Based Software Leakage Detection for ARM Binaries',
                'description' => 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                'author' => 'Jannik Zeitschner, Nicolai Müller, Amir Moradi',
                'relatedWorkLink' => 'https://eprint.iacr.org/2023/034',
            ],
            [
                'type' => 'relatedWorkItem',
                'title' => 'PROLEAD_SW - Probing-Based Software Leakage Detection for ARM Binaries',
                'description' => 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                'author' => 'Jannik Zeitschner, Nicolai Müller, Amir Moradi',
                'relatedWorkLink' => 'https://eprint.iacr.org/2023/034',
            ],
            [
                'type' => 'relatedWorkItem',
                'title' => 'PROLEAD_SW - Probing-Based Software Leakage Detection for ARM Binaries',
                'description' => 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                'author' => 'Jannik Zeitschner, Nicolai Müller, Amir Moradi',
                'relatedWorkLink' => 'https://eprint.iacr.org/2023/034',
            ],
            [
                'type' => 'relatedWorkItem',
                'title' => 'PROLEAD_SW - Probing-Based Software Leakage Detection for ARM Binaries',
                'description' => 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                'author' => 'Jannik Zeitschner, Nicolai Müller, Amir Moradi',
                'relatedWorkLink' => 'https://eprint.iacr.org/2023/034',
            ],
            [
                'type' => 'relatedWorkItem',
                'title' => 'PROLEAD_SW - Probing-Based Software Leakage Detection for ARM Binaries',
                'description' => 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                'author' => 'Jannik Zeitschner, Nicolai Müller, Amir Moradi',
                'relatedWorkLink' => 'https://eprint.iacr.org/2023/034',
            ],
            [
                'type' => 'relatedWorkItem',
                'title' => 'PROLEAD_SW - Probing-Based Software Leakage Detection for ARM Binaries',
                'description' => 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                'author' => 'Jannik Zeitschner, Nicolai Müller, Amir Moradi',
                'relatedWorkLink' => 'https://eprint.iacr.org/2023/034',
            ],
            [
                'type' => 'relatedWorkItem',
                'title' => 'PROLEAD_SW - Probing-Based Software Leakage Detection for ARM Binaries',
                'description' => 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                'author' => 'Jannik Zeitschner, Nicolai Müller, Amir Moradi',
                'relatedWorkLink' => 'https://eprint.iacr.org/2023/034',
            ],
            [
                'type' => 'relatedWorkItem',
                'title' => 'PROLEAD_SW - Probing-Based Software Leakage Detection for ARM Binaries',
                'description' => 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                'author' => 'Jannik Zeitschner, Nicolai Müller, Amir Moradi',
                'relatedWorkLink' => 'https://eprint.iacr.org/2023/034',
            ],
        ];
        $relatedWorksDataEn = [
            'title' => 'Related Works',
            'template' => self::RELATED_WORKS_TEMPLATE,
            'locale' => self::LOCALE_EN,
            'url' => self::RELATED_WORKS_PATH,
            'relatedWorksItems' => $relatedWorksItemsEn,
        ];
        $relatedWorksDataDe = [
            'title' => 'Verwandte Arbeiten',
            'template' => self::RELATED_WORKS_TEMPLATE,
            'locale' => self::LOCALE_DE,
            'url' => self::RELATED_WORKS_PATH,
            'relatedWorksItems' => $relatedWorksItemsDe,
        ];

        $envelope = $this->messageBus->dispatch(
            new Envelope(
                new CreatePageMessage(self::WEBSPACE_KEY, $landingpage->getUuid(), $relatedWorksDataEn),
                [new EnableFlushStamp()],
            ),
        );
        /** @var HandledStamp|null $handledStamp */
        $handledStamp = $envelope->last(HandledStamp::class);
        /** @var PageInterface $relatedWorks */
        $relatedWorks = $handledStamp?->getResult();
        $this->messageBus->dispatch(
            new Envelope(
                new ModifyPageMessage(['uuid' => $relatedWorks->getUuid()], $relatedWorksDataDe),
                [new EnableFlushStamp()],
            ),
        );

        $this->publishPage($relatedWorks->getUuid(), self::LOCALE_EN);
        $this->publishPage($relatedWorks->getUuid(), self::LOCALE_DE);
    }
}

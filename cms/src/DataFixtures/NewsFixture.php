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

final class NewsFixture extends AbstractFixture implements DependentFixtureInterface
{
    private const string NEWS_WORKSHOP_PATH = '/landingpage/news/workshop';
    private const string NEWS_PATH = '/landingpage/news';
    private const string NEWS_TITLE = 'News';
    private const string NEWS_DESCRIPTION = 'News';
    private const string NEWS_WORKSHOP_TITLE = 'Workshop';
    private const string NEWS_WORKSHOP_DESCRIPTION = '<h2>Lorem ipsum dolor sit amet</h2><h3>Lorem ipsum dolor sit amet</h3><h4>Lorem ipsum dolor sit amet</h4><h5>Lorem ipsum dolor sit amet</h5><h6>Lorem ipsum dolor sit amet</h6><p><strong>Lorem ipsum dolor sit amet</strong></p><p><i>Lorem ipsum dolor sit amet</i></p><p><i><strong>Lorem ipsum dolor sit amet</strong></i></p><p><u>Lorem ipsum dolor sit amet</u></p><p style="text-align:right;">Lorem ipsum dolor sit amet</p><p style="text-align:center;"><a target="_blank" href="https://google.de">Lorem ipsum dolor sit amet</a></p><ul><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li></ul><ol><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li></ol><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p><figure class="table"><table><tbody><tr><td>Lorem ipsum dolor sit amet</td><td>Lorem ipsum dolor sit amet</td></tr><tr><td>Lorem ipsum dolor sit amet</td><td>Lorem ipsum dolor sit amet</td></tr></tbody></table></figure>';

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
        $newsId = $this->createNews();
        $this->createNewsWorkshop($newsId);
    }

    private function createNews(): string
    {
        $landingpage = $this->pageRepository->findOneBy([
            'parentId' => null,
        ]);
        if (!$landingpage instanceof PageInterface) {
            return '';
        }

        $newsDataEn = [
            'title' => self::NEWS_TITLE,
            'template' => self::DEFAULT_TEMPLATE,
            'locale' => self::LOCALE_EN,
            'url' => self::NEWS_PATH,
            'article' => self::NEWS_DESCRIPTION,
        ];
        $newsDataDe = [
            'title' => self::NEWS_TITLE,
            'template' => self::DEFAULT_TEMPLATE,
            'locale' => self::LOCALE_DE,
            'url' => self::NEWS_PATH,
            'article' => self::NEWS_DESCRIPTION,
        ];

        $envelope = $this->messageBus->dispatch(new Envelope(
            new CreatePageMessage(self::WEBSPACE_KEY, $landingpage->getUuid(), $newsDataEn),
            [new EnableFlushStamp()],
        ));
        /** @var HandledStamp|null $handledStamp */
        $handledStamp = $envelope->last(HandledStamp::class);
        /** @var PageInterface $news */
        $news = $handledStamp?->getResult();
        $this->messageBus->dispatch(new Envelope(
            new ModifyPageMessage(['uuid' => $news->getUuid()], $newsDataDe),
            [new EnableFlushStamp()],
        ));

        $this->publishPage($news->getUuid(), self::LOCALE_EN);
        $this->publishPage($news->getUuid(), self::LOCALE_DE);

        return $news->getUuid();
    }

    private function createNewsWorkshop(string $newsId): void
    {
        $news = $this->pageRepository->findOneBy([
            'uuid' => $newsId,
        ]);
        if (!$news instanceof PageInterface) {
            return;
        }

        $newsWorkshopDataEn = [
            'title' => self::NEWS_WORKSHOP_TITLE,
            'template' => self::DEFAULT_TEMPLATE,
            'locale' => self::LOCALE_EN,
            'url' => self::NEWS_WORKSHOP_PATH,
            'article' => self::NEWS_WORKSHOP_DESCRIPTION,
        ];
        $newsWorkshopDataDe = [
            'title' => self::NEWS_WORKSHOP_TITLE,
            'template' => self::DEFAULT_TEMPLATE,
            'locale' => self::LOCALE_DE,
            'url' => self::NEWS_WORKSHOP_PATH,
            'article' => self::NEWS_WORKSHOP_DESCRIPTION,
        ];

        $envelope = $this->messageBus->dispatch(new Envelope(
            new CreatePageMessage(self::WEBSPACE_KEY, $news->getUuid(), $newsWorkshopDataEn),
            [new EnableFlushStamp()],
        ));
        /** @var HandledStamp|null $handledStamp */
        $handledStamp = $envelope->last(HandledStamp::class);
        /** @var PageInterface $news */
        $news = $handledStamp?->getResult();
        $this->messageBus->dispatch(new Envelope(
            new ModifyPageMessage(['uuid' => $news->getUuid()], $newsWorkshopDataDe),
            [new EnableFlushStamp()],
        ));

        $this->publishPage($news->getUuid(), self::LOCALE_EN);
        $this->publishPage($news->getUuid(), self::LOCALE_DE);
    }
}

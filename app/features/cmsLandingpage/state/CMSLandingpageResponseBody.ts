interface NewsItem {
    title: string;
    description: string;
    category: string;
    host: string;
    date: string;
    newsLink: string;
}

interface Content {
    newsItems: NewsItem[];
}

export interface CMSLandingpageResponseBody {
    content: Content;
}

interface RelatedWorkItem {
    title: string;
    description: string;
    author: string;
    relatedWorkLink: string;
}

interface Content {
    relatedWorksItems: RelatedWorkItem[];
}

export interface CMSRelatedWorksResponseBody {
    content: Content;
}

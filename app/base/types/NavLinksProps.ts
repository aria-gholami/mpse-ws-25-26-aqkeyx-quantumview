export default interface NavLinksProps {
    variant: 'desktop' | 'mobile';
    currentPath: string;
    links: {
        qkdIntro: string;
        hybrid: string;
        relatedWorks: string;
        contact: string;
    };
}

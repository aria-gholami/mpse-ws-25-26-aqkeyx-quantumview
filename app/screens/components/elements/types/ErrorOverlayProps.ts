export default interface ErrorOverlayProps {
    title: string;
    description: string;
    onCloseClick: () => void;
    closeButtonText: string;
    scrollable: boolean;
}

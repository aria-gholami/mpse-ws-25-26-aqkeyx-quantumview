import type HybridizeKeyServiceFormAccordion from '~/screens/components/hybridizeKeyService/types/HybridizeKeyServiceFormAccordion';

export default interface HybridizeKeyServiceFormKMSProps {
    key?: number;
    currentAccordion: HybridizeKeyServiceFormAccordion;
    setAccordions: any;
    accordions: HybridizeKeyServiceFormAccordion[];
    setKMSErrorMessage: any;
}

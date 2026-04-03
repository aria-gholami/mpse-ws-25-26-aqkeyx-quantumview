import type HybridizeKeyServiceFormAccordion from '~/screens/components/hybridizeKeyService/types/HybridizeKeyServiceFormAccordion';

export default interface HybridizeKeyServiceFormKMSAddButtonProps {
    accordions: HybridizeKeyServiceFormAccordion[];
    setAccordions: any;
    kmsErrorMessage: string;
    setKMSErrorMessage: any;
}

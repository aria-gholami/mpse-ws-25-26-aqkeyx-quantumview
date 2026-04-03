import type HybridizeKeyServiceFormAccordion from '~/screens/components/hybridizeKeyService/types/HybridizeKeyServiceFormAccordion';

export default interface HybridizeKeyServiceFormExperimentResetButtonProps {
    accordions: HybridizeKeyServiceFormAccordion[];
    shouldBeLogged: boolean;
    experimentName: string;
}

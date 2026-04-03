import { translations } from './translations';
import { useAppSelector } from '~/redux/hooks';
import type { LanguageState } from '~/features/language/state/Initial';

export function useTranslations() {
    const languageState: LanguageState = useAppSelector((state) => state.language);

    return translations[languageState.language];
}

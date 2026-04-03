import { useTranslations } from '~/i18n/useTranslations';
import '~/shared/styles/base/languageSwitcher.css';
import { useAppDispatch, useAppSelector } from '~/redux/hooks';
import { updateLanguage } from '~/features/language/languageSlice';
import type { Language, LanguageState } from '~/features/language/state/Initial';
import { reset as resetNewsDetails } from '~/features/cmsNews/cmsNewsSlice';
import { reset as resetLandingpageData } from '~/features/cmsLandingpage/cmsLandingpageSlice';
import { reset as resetRelatedWorksData } from '~/features/cmsRelatedWorks/cmsRelatedWorksSlice';

const ORDERED_LANGUAGES: Language[] = ['en', 'de'];

export default function LanguageSwitcher() {
    const { languageSwitcher } = useTranslations();
    const languageState: LanguageState = useAppSelector((state) => state.language);
    const dispatch = useAppDispatch();

    return (
        <div className="language-switcher" role="group" aria-label={languageSwitcher.label}>
            {ORDERED_LANGUAGES.map((code) => {
                const isActive = languageState.language === code;
                const label = code === 'en' ? languageSwitcher.english : languageSwitcher.german;

                return (
                    <button
                        key={code}
                        type="button"
                        className={`language-switcher__button ${
                            isActive
                                ? code === 'de'
                                    ? 'language-switcher__button--active rounded-r-full'
                                    : 'language-switcher__button--active rounded-l-full'
                                : code === 'de'
                                  ? 'cursor-pointer rounded-r-full'
                                  : 'cursor-pointer rounded-l-full'
                        }`}
                        onClick={() => {
                            const languageState: LanguageState = {
                                language: code,
                            };
                            dispatch(updateLanguage(languageState));
                            dispatch(resetNewsDetails(undefined));
                            dispatch(resetLandingpageData(undefined));
                            dispatch(resetRelatedWorksData(undefined));
                        }}
                    >
                        {label}
                    </button>
                );
            })}
        </div>
    );
}

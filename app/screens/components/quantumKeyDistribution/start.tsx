import { startTexts } from '~/i18n/startTexts';
import { useAppSelector } from '~/redux/hooks';
import type StartProps from '~/screens/components/quantumKeyDistribution/types/StartProps';

export default function Start({ mode }: StartProps) {
    const languageState = useAppSelector((state) => state.language);
    const startTextTranslations = startTexts[languageState.language];
    let content = startTextTranslations.default;
    if (mode === 'beginner') {
        content = startTextTranslations.beginner;
    } else if (mode === 'expert') {
        content = startTextTranslations.expert;
    }

    return (
        <div className="main-container">
            <div className="card-container">
                <h1 className="mb-2">{content[0].title}</h1>
                <p>{content[0].text}</p>
            </div>
            <div className="card-container">
                <h1 className="mb-2">{content[1].title}</h1>
                <p>{content[1].text}</p>
            </div>
        </div>
    );
}

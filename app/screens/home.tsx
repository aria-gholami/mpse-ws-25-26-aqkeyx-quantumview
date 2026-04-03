import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '~/redux/hooks';
import { fetchCMSLandingpage } from '~/features/cmsLandingpage/reducers/fetchCMSLandingpage';
import type { CMSLandingpageState } from '~/features/cmsLandingpage/state/Initial';
import type { LanguageState } from '~/features/language/state/Initial';
import '../shared/styles/screens/home.css';
import { useTranslations } from '~/i18n/useTranslations';
import Information from '~/screens/components/contact/information';
import LoadingSpinner from '~/screens/components/elements/loadingSpinner';
import News from '~/screens/components/home/news';

export default function Home() {
    const { home } = useTranslations();
    const cmsLandingpageState: CMSLandingpageState = useAppSelector(
        (state) => state.cmsLandingpage,
    );
    const languageState: LanguageState = useAppSelector((state) => state.language);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCMSLandingpage(languageState.language) as any);
    }, [languageState]);

    return (
        <div className="screen-container">
            <section className="main-container mt-10">
                <div className="card-container">
                    <h2 className="mb-2">{home.benefits.title}</h2>
                    <p>{home.benefits.description}</p>
                </div>
                <div className="card-container">
                    <h2 className="mb-2">{home.context.title}</h2>
                    <p>{home.context.description}</p>
                    <p className="mt-2">
                        <strong>{home.context.collaborationHeader}</strong>
                    </p>
                    <ol>
                        <li>{home.context.collaborationList.item1}</li>
                        <li>{home.context.collaborationList.item2}</li>
                        <li>{home.context.collaborationList.item3}</li>
                    </ol>
                </div>
            </section>

            <hr className="divider" />

            <section>
                <h2>{home.news.title}</h2>
                <span className="mt-1">{home.news.description}</span>
                {cmsLandingpageState.isLoading ? (
                    <LoadingSpinner label={home.news.loading} />
                ) : (
                    <News />
                )}
            </section>

            <hr className="divider" />

            <Information />
        </div>
    );
}

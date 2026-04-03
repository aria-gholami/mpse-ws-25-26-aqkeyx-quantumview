import React, { useEffect } from 'react';
import type { CMSLandingpageState, NewsDetails } from '~/features/cmsLandingpage/state/Initial';
import { useAppDispatch, useAppSelector } from '~/redux/hooks';
import { useSearchParams } from 'react-router';
import { fetchCMSNews } from '~/features/cmsNews/reducers/fetchCMSNews';
import type { CMSNewsState } from '~/features/cmsNews/state/Initial';
import type { LanguageState } from '~/features/language/state/Initial';
import { fetchCMSLandingpage } from '~/features/cmsLandingpage/reducers/fetchCMSLandingpage';

export default function News() {
    const [searchParams] = useSearchParams();
    const cmsLandingpageState: CMSLandingpageState = useAppSelector(
        (state) => state.cmsLandingpage,
    );
    const cmsNewsState: CMSNewsState = useAppSelector((state) => state.cmsNews);
    const languageState: LanguageState = useAppSelector((state) => state.language);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCMSLandingpage(languageState.language) as any);
        const detailsSearchParams = searchParams.get('details');
        if (detailsSearchParams !== null && cmsLandingpageState.news.length > 0) {
            const index = Number(detailsSearchParams);
            if (!Number.isNaN(index) && cmsLandingpageState.news[index]) {
                const newsDetails: NewsDetails = cmsLandingpageState.news[index];
                dispatch(fetchCMSNews(newsDetails.newsLink) as any);
            }
        }
    }, [cmsLandingpageState]);

    return (
        <div className="m-6">
            <div className="card-container">
                <h1 className="text-center">{cmsNewsState.title}</h1>
                <div
                    className="mt-4 cms-content"
                    dangerouslySetInnerHTML={{ __html: cmsNewsState.text }}
                />
            </div>
        </div>
    );
}

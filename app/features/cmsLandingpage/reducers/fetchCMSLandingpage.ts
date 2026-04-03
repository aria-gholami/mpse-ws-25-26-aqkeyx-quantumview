import { createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '~/redux/store';
import type { CMSLandingpageResponseBody } from '~/features/cmsLandingpage/state/CMSLandingpageResponseBody';
import type { CMSLandingpageState } from '~/features/cmsLandingpage/state/Initial';

export const fetchCMSLandingpage = createAsyncThunk<
    CMSLandingpageState,
    string,
    { state: RootState }
>(
    'cmsLandingpage/fetch',
    async (language: string) => {
        try {
            let url: string = `${import.meta.env.VITE_CMS_BASE_URL}/landingpage.json`;
            if (language === 'de') {
                url = `${import.meta.env.VITE_CMS_BASE_URL}/de/landingpage.json`;
            }
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'api-key': import.meta.env.VITE_CMS_API_KEY ?? '',
                },
            });
            if (!response.ok) {
                throw new Error('Response by cms landingpage api is invalid.');
            }

            const responseAsJson: CMSLandingpageResponseBody = await response.json();
            const cmsLandingpageState: CMSLandingpageState = {
                news: responseAsJson.content.newsItems.map((item) => ({
                    title: item.title,
                    description: item.description,
                    category: convertNewsCategory(item.category, language),
                    host: item.host,
                    date: item.date,
                    newsLink: item.newsLink,
                })),
                isLoading: false,
            };

            return cmsLandingpageState;
        } catch (error) {
            console.error(error);

            throw error;
        }
    },
    {
        condition: (_arg, { getState }) => {
            const { cmsLandingpage } = getState() as RootState;
            if (cmsLandingpage.isLoading || cmsLandingpage.news.length > 0) {
                return false;
            }
        },
    },
);

function convertNewsCategory(category: string, language: string) {
    if (language === 'de' && category === 'Project') {
        return 'Projekt';
    }
    if (language === 'de' && category === 'Publication') {
        return 'Publikation';
    }
    if (language === 'de' && category === 'Teaching') {
        return 'Lehre';
    }

    return category;
}

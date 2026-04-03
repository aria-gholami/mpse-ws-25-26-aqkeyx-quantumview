import { createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '~/redux/store';
import type { CMSRelatedWorksResponseBody } from '~/features/cmsRelatedWorks/state/CMSRelatedWorksResponseBody';
import type { CMSRelatedWorksState } from '~/features/cmsRelatedWorks/state/Initial';

export const fetchCMSRelatedWorks = createAsyncThunk<
    CMSRelatedWorksState,
    string,
    { state: RootState }
>(
    'cmsRelatedWorks/fetch',
    async (language: string) => {
        try {
            let url: string = `${import.meta.env.VITE_CMS_BASE_URL}/landingpage/relatedWorks.json`;
            if (language === 'de') {
                url = `${import.meta.env.VITE_CMS_BASE_URL}/de/landingpage/relatedWorks.json`;
            }
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'api-key': import.meta.env.VITE_CMS_API_KEY ?? '',
                },
            });
            if (!response.ok) {
                throw new Error('Response by cms related works api is invalid.');
            }

            const responseAsJson: CMSRelatedWorksResponseBody = await response.json();
            const cmsRelatedWorksState: CMSRelatedWorksState = {
                relatedWorks: responseAsJson.content.relatedWorksItems.map((item) => ({
                    title: item.title,
                    description: item.description,
                    author: item.author,
                    relatedWorkLink: item.relatedWorkLink,
                })),
                isLoading: false,
            };

            return cmsRelatedWorksState;
        } catch (error) {
            console.error(error);

            throw error;
        }
    },
    {
        condition: (_arg, { getState }) => {
            const { cmsRelatedWorks } = getState() as RootState;
            if (cmsRelatedWorks.isLoading || cmsRelatedWorks.relatedWorks.length > 0) {
                return false;
            }
        },
    },
);

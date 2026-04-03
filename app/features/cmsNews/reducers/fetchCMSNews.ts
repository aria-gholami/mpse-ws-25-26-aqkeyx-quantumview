import { createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '~/redux/store';
import type { CMSNewsState } from '~/features/cmsNews/state/Initial';
import type { CMSNewsResponseBody } from '~/features/cmsNews/state/cmsNewsResponseBody';

export const fetchCMSNews = createAsyncThunk<CMSNewsState, string, { state: RootState }>(
    'cmsNews/fetch',
    async (url: string) => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'api-key': import.meta.env.VITE_CMS_API_KEY ?? '',
                },
            });
            if (!response.ok) {
                throw new Error('Response by cms landingpage api is invalid.');
            }

            const responseAsJson: CMSNewsResponseBody = await response.json();
            const cmsNewsState: CMSNewsState = {
                title: responseAsJson.content.title,
                text: responseAsJson.content.article,
                isLoading: false,
            };

            return cmsNewsState;
        } catch (error) {
            console.error(error);

            throw error;
        }
    },
    {
        condition: (_arg, { getState }) => {
            const { cmsNews } = getState() as RootState;
            if (cmsNews.isLoading || cmsNews.title !== '') {
                return false;
            }
        },
    },
);

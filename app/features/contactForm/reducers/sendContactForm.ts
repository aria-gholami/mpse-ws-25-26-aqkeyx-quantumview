import { createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '~/redux/store';
import type { ContactFormSendRequestBody } from '~/features/contactForm/state/ContactFormSendRequestBody';

export const sendContactForm = createAsyncThunk<
    void,
    ContactFormSendRequestBody,
    { state: RootState }
>(
    'contactForm/request',
    async (contactFormSendRequestBody: ContactFormSendRequestBody) => {
        try {
            let url: string = `${import.meta.env.VITE_CMS_BASE_URL}/api/v1/contact`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': import.meta.env.VITE_CMS_API_KEY ?? '',
                },
                body: JSON.stringify(contactFormSendRequestBody),
            });
            if (!response.ok) {
                throw new Error('Response by contact form send is invalid.');
            }
        } catch (error) {
            console.error(error);

            throw error;
        }
    },
    {
        condition: (_arg, { getState }) => {
            const { contactForm } = getState() as RootState;
            if (contactForm.isLoading) {
                return false;
            }
        },
    },
);

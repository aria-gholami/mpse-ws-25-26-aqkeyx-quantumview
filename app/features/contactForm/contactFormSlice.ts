import { createSlice } from '@reduxjs/toolkit';
import initialState, { type ContactFormState } from '~/features/contactForm/state/Initial';
import { sendContactForm } from '~/features/contactForm/reducers/sendContactForm';
import type { KeyExchangeMechanismState } from '~/features/keyExchangeMechanism/state/Initial';

const contactFormSlice = createSlice({
    name: 'contactForm',
    initialState,
    reducers: {
        reset(state: ContactFormState): void {
            state.sentStatus = 'idle';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendContactForm.pending, (state: ContactFormState) => {
                state.isLoading = true;
            })
            .addCase(sendContactForm.fulfilled, (state: ContactFormState) => {
                state.isLoading = false;
                state.sentStatus = 'sent';
            })
            .addCase(sendContactForm.rejected, (state: ContactFormState) => {
                state.isLoading = false;
                state.sentStatus = 'failed';
            });
    },
});

export default contactFormSlice;

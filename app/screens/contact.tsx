import React from 'react';
import { useAppSelector } from '~/redux/hooks';
import type { ContactFormState } from '~/features/contactForm/state/Initial';
import Information from '~/screens/components/contact/information';
import Form from '~/screens/components/contact/form';
import { useTranslations } from '~/i18n/useTranslations';
import OverlayLoadingSpinner from '~/screens/components/elements/overlayLoadingSpinner';

export default function Contact() {
    const { contactPage } = useTranslations();
    const contactFormState: ContactFormState = useAppSelector((state) => state.contactForm);

    const renderFormStatus = () => {
        if (contactFormState.sentStatus === 'sent') {
            return (
                <div
                    className="card-container text-center flex flex-col items-center"
                    role="status"
                    aria-live="polite"
                >
                    <h2 className="mb-2">{contactPage.formTitle}</h2>
                    <span>{contactPage.sentSuccessMessage}</span>
                    <button
                        className="secondary-button mt-3"
                        onClick={() => window.location.reload()}
                    >
                        {contactPage.contactFormOpenButton}
                    </button>
                </div>
            );
        }

        if (contactFormState.sentStatus === 'failed') {
            return (
                <div
                    className="card-container text-center flex flex-col items-center"
                    role="alert"
                    aria-live="assertive"
                >
                    <h2 className="mb-2">{contactPage.formTitle}</h2>
                    <span>{contactPage.sentErrorMessage}</span>
                    <button
                        className="secondary-button mt-3"
                        onClick={() => window.location.reload()}
                    >
                        {contactPage.contactFormOpenButton}
                    </button>
                </div>
            );
        }

        return <OverlayLoadingSpinner label={contactPage.loadingMessage} scrollable={false} />;
    };

    return (
        <div className="screen-container">
            <Information />
            <hr className="divider" />
            {contactFormState.sentStatus === 'sent' ||
            contactFormState.sentStatus === 'failed' ||
            contactFormState.isLoading ? (
                renderFormStatus()
            ) : (
                <Form />
            )}
        </div>
    );
}

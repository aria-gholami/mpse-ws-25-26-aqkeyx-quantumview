import React, { useState } from 'react';
import '../../../shared/styles/components/hybridizeKeyServiceForm.css';
import '../../../shared/styles/screens/contact.css';
import { useTranslations } from '~/i18n/useTranslations';
import type { ContactFormSendRequestBody } from '~/features/contactForm/state/ContactFormSendRequestBody';
import { sendContactForm } from '~/features/contactForm/reducers/sendContactForm';
import { useAppDispatch } from '~/redux/hooks';
import InputField from '~/screens/components/elements/inputField';
import Textarea from '~/screens/components/elements/textarea';

export default function Form() {
    const { contactPage, form } = useTranslations();
    const dispatch = useAppDispatch();
    const [contactForm, setContactForm] = useState<ContactFormSendRequestBody>({
        name: '',
        email: '',
        organization: '',
        topic: '',
        message: '',
        honeypot: '',
    });
    const [hasTyped, setHasTyped] = useState<boolean[]>([false, false, false]);
    const [hasErrors, setHasErrors] = useState<boolean[]>([false, false, false, false]);
    const setTyped = (index: number) =>
        setHasTyped((prev) => prev.map((v, i) => (i === index ? true : v)));
    const setHasError = (index: number, value: boolean) =>
        setHasErrors((prev) => prev.map((v, i) => (i === index ? value : v)));

    const submitContactForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const hasTypedErrors = !hasTyped.every(Boolean) || hasErrors.some((error) => error);
        if (hasTypedErrors || contactForm.honeypot) {
            return;
        }

        const contactFormSendRequestBody: ContactFormSendRequestBody = {
            name: contactForm.name,
            email: contactForm.email,
            organization: contactForm.organization,
            topic: contactForm.topic,
            message: contactForm.message,
        };
        dispatch(sendContactForm(contactFormSendRequestBody) as any);
    };

    return (
        <section>
            <h2 className="mb-2">{contactPage.formTitle}</h2>
            <span>{contactPage.formLead}</span>
            <form className="contact-form" onSubmit={submitContactForm}>
                <div className="contact-form-grid">
                    <div className="contact-form-row">
                        <InputField
                            id="contact-name"
                            name="name"
                            type="text"
                            label={contactPage.fields.name}
                            required={true}
                            placeholder={contactPage.fields.namePlaceholder}
                            onChange={(event) => {
                                const name = event.target.value;
                                setContactForm((prev) => ({ ...prev, name }));
                                if (!hasTyped[0]) {
                                    setTyped(0);
                                }

                                setHasError(0, false);
                                if (name.trim() === '') {
                                    setHasError(0, true);
                                }
                            }}
                            hasInputFieldTyped={hasTyped[0]}
                            error={contactPage.fields.nameError}
                            hasError={hasErrors[0]}
                        />
                    </div>
                    <div className="contact-form-row">
                        <InputField
                            id="contact-email"
                            name="email"
                            type="text"
                            label={contactPage.fields.email}
                            required={true}
                            placeholder={contactPage.fields.emailPlaceholder}
                            onChange={(event) => {
                                const email = event.target.value;
                                setContactForm((prev) => ({ ...prev, email }));
                                if (!hasTyped[1]) {
                                    setTyped(1);
                                }

                                setHasError(1, false);
                                if (email.trim() === '') {
                                    setHasError(1, true);
                                    return;
                                }

                                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
                                setHasError(2, false);
                                if (!emailRegex.test(email.trim())) {
                                    setHasError(2, true);
                                }
                            }}
                            hasInputFieldTyped={hasTyped[1]}
                            error={
                                hasErrors[1] && !hasErrors[2]
                                    ? contactPage.fields.emailEmptyError
                                    : !hasErrors[1] && hasErrors[2]
                                      ? contactPage.fields.emailInvalidError
                                      : ''
                            }
                            hasError={hasErrors[1] || hasErrors[2]}
                        />
                    </div>
                    <div className="contact-form-row">
                        <InputField
                            id="contact-company"
                            name="company"
                            type="text"
                            label={contactPage.fields.company}
                            required={false}
                            placeholder={contactPage.fields.companyPlaceholder}
                            onChange={(event) => {
                                const organization = event.target.value;
                                setContactForm((prev) => ({ ...prev, organization }));
                            }}
                        />
                    </div>
                    <div className="contact-form-row">
                        <InputField
                            id="contact-topic"
                            name="topic"
                            type="text"
                            label={contactPage.fields.topic}
                            required={false}
                            placeholder={contactPage.fields.topicPlaceholder}
                            onChange={(event) => {
                                const topic = event.target.value;
                                setContactForm((prev) => ({ ...prev, topic }));
                            }}
                        />
                    </div>
                </div>

                <div className="contact-form-row">
                    <Textarea
                        id="contact-message"
                        name="message"
                        label={contactPage.fields.message}
                        required={true}
                        placeholder={contactPage.fields.messagePlaceholder}
                        onChange={(event) => {
                            const message = event.target.value;
                            setContactForm((prev) => ({ ...prev, message }));
                            if (!hasTyped[2]) {
                                setTyped(2);
                            }

                            setHasError(3, false);
                            if (message.trim() === '') {
                                setHasError(3, true);
                            }
                        }}
                        hasInputFieldTyped={hasTyped[2]}
                        error={contactPage.fields.messageError}
                        hasError={hasErrors[3]}
                    />
                </div>
                <div className="honeypot">
                    <InputField
                        id="contact-spam"
                        name="spam"
                        type="text"
                        label="Spam"
                        required={false}
                        placeholder="Spam"
                        onChange={(event) => {
                            const honeypot = event.target.value;
                            setContactForm((prev) => ({ ...prev, honeypot }));
                        }}
                    />
                </div>

                <div className="contact-actions">
                    <button className="primary-button" type="submit">
                        {contactPage.submit}
                    </button>
                    <button className="secondary-button" type="reset">
                        {contactPage.reset}
                    </button>
                </div>
                <span>
                    {form.requiredNote} <span className="required-asterisk">*</span>
                </span>
            </form>
        </section>
    );
}

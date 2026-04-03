import React from 'react';
import '../../../shared/styles/components/hybridizeKeyServiceForm.css';
import '../../../shared/styles/screens/contact.css';
import { useTranslations } from '~/i18n/useTranslations';

export default function Information() {
    const { contactPage } = useTranslations();

    return (
        <section className="main-container mt-10">
            <div className="card-container">
                <h2 className="mb-2">{contactPage.title}</h2>
                <span className="mt-2">{contactPage.lead}</span>
                <div className="contact-details">
                    <div className="contact-detail">
                        <span>{contactPage.contactPerson}</span>
                        <a href="mailto:johanna.henrich@h-da.de">Johanna Henrich</a>
                    </div>
                    <div className="contact-detail">
                        <span>{contactPage.phone}</span>
                        <a href="tel:+496151123456">+49 6151 123456</a>
                    </div>
                </div>
            </div>

            <div className="card-container">
                <h2 className="mb-2">{contactPage.locationTitle}</h2>
                <span className="mt-2">{contactPage.locationLead}</span>
                <div className="contact-map">{contactPage.address}</div>
                <div className="contact-hours">
                    <p>{contactPage.hoursTitle}</p>
                    <span>{contactPage.hoursWeek}</span>
                    <span>{contactPage.hoursFriday}</span>
                </div>
            </div>
        </section>
    );
}

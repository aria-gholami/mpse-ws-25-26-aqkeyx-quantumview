import { useTranslations } from '~/i18n/useTranslations';

export default function DataPrivacyPolicy() {
    const { privacyPolicy } = useTranslations();
    const { section1, section2 } = privacyPolicy;

    return (
        <div id="datenschutz" className="legal-page mx-auto max-w-3xl px-4 py-12">
            <h1 className="mb-8">{privacyPolicy.title}</h1>
            <section className="mb-10" aria-labelledby="ds-1">
                <h2 id="ds-1" className="mb-4">
                    {section1.title}
                </h2>

                <h3 className="mb-2">{section1.generalInfoTitle}</h3>
                <p className="mb-4">{section1.generalInfoText}</p>

                <h3 className="mb-2">{section1.dataCollectionTitle}</h3>

                <h4 className="mt-4 mb-2">{section1.controllerQuestion}</h4>
                <p className="mb-4">{section1.controllerAnswer}</p>

                <h4 className="mt-4 mb-2">{section1.howWeCollectQuestion}</h4>
                <p className="mb-4">{section1.howWeCollectAnswer1}</p>
                <p className="mb-4">{section1.howWeCollectAnswer2}</p>

                <h4 className="mt-4 mb-2">{section1.purposesQuestion}</h4>
                <p className="mb-4">{section1.purposesAnswer}</p>

                <h4 className="mt-4 mb-2">{section1.rightsQuestion}</h4>
                <p className="mb-4">{section1.rightsAnswer1}</p>
                <p>{section1.rightsAnswer2}</p>
            </section>

            <section className="mb-12" aria-labelledby="ds-2">
                <h2 id="ds-2" className="mb-4">
                    {section2.title}
                </h2>

                <h3 className="mb-2">{section2.privacyTitle}</h3>
                <p className="mb-4">{section2.privacyText1}</p>
                <p className="mb-4">{section2.privacyText2}</p>
                <p className="mb-6">{section2.privacyText3}</p>

                <h3 className="mb-2">{section2.controllerNoticeTitle}</h3>
                <p className="mb-3 ">{section2.controllerNoticeLead}</p>

                <address className="mb-4 rounded-lg border border-gray-200 bg-gray-50 p-4">
                    {section2.controllerCompany}
                    <br />
                    {section2.controllerStreet}
                    <br />
                    {section2.controllerCity}
                    <br />
                    {section2.controllerPhoneLabel}:{' '}
                    <a href="tel:+49123445566">+49 (0) 123 44 55 66</a>
                    <br />
                    {section2.controllerEmailLabel}:{' '}
                    <a href="mailto:info@beispielfirma.de">info@beispielfirma.de</a>
                </address>

                <p className="mb-6 ">{section2.controllerDefinition}</p>

                <h3 className="mb-2">{section2.retentionTitle}</h3>
                <p className="mb-6">{section2.retentionText}</p>

                <h3 className="mb-2">{section2.legalBasesTitle}</h3>
                <p className="mb-6 ">{section2.legalBasesText}</p>

                <h3 className="mb-2">{section2.recipientsTitle}</h3>
                <p className="mb-6 ">{section2.recipientsText}</p>

                <h3 className="mb-2">{section2.revokeTitle}</h3>
                <p className="mb-6">{section2.revokeText}</p>

                <h3 className="mb-2">{section2.objectionTitle}</h3>
                <p className="mb-4 rounded-lg border border-gray-200 bg-gray-50 p-4">
                    {section2.objectionText1}
                </p>
                <p className="mb-6 rounded-lg border border-gray-200 bg-gray-50 p-4">
                    {section2.objectionText2}
                </p>

                <h3 className="mb-2">{section2.complaintTitle}</h3>
                <p className="mb-6">{section2.complaintText}</p>

                <h3 className="mb-2">{section2.portabilityTitle}</h3>
                <p className="mb-6">{section2.portabilityText}</p>

                <h3 className="mb-2">{section2.accessTitle}</h3>
                <p className="mb-6">{section2.accessText}</p>

                <h3 className="mb-2">{section2.restrictionTitle}</h3>
                <p className="mb-3">{section2.restrictionLead}</p>
                <ul className="mb-6 list-disc space-y-2 pl-5">
                    {section2.restrictionList.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p>{section2.restrictionText}</p>
            </section>

            <footer className="border-t pt-4">
                <small>{privacyPolicy.source}</small>
            </footer>
        </div>
    );
}

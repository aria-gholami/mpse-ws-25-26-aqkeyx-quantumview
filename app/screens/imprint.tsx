import { useTranslations } from '~/i18n/useTranslations';

export default function Imprint() {
    const { imprint } = useTranslations();

    return (
        <div id="impressum" className="legal-page mx-auto max-w-3xl px-4 py-12">
            <h1 className="mb-8">{imprint.title}</h1>

            <section className="mb-8">
                <h2 className="mb-3">{imprint.legalReference}</h2>

                <address>
                    <strong>Muster FH</strong>
                    <br />
                    Musterstraße 111
                    <br />
                    Gebäude 44
                    <br />
                    90210 Musterstadt
                </address>
            </section>

            <section className="mb-8">
                <h2 className="mb-3">{imprint.representedBy}</h2>
                <ul className="list-disc pl-5">
                    <li>Dr. Harry Mustermann</li>
                    <li>Luise Beispiel</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="mb-3">{imprint.contact}</h2>
                <dl className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-2">
                    <dt>{imprint.phone}</dt>
                    <dd>
                        <a href="tel:+49123445566">+49 (0) 123 44 55 66</a>
                    </dd>

                    <dt>{imprint.fax}</dt>
                    <dd>+49 (0) 123 44 55 99</dd>

                    <dt>{imprint.email}</dt>
                    <dd>
                        <a href="mailto:mustermann@musterfirma.de">mustermann@musterfirma.de</a>
                    </dd>
                </dl>
            </section>

            <section className="mb-8">
                <h2 className="mb-3">{imprint.vatIdTitle}</h2>
                <p>
                    {imprint.vatIdText}
                    <br />
                    <strong>DE999999999</strong>
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-3">{imprint.editorialTitle}</h2>
                <address>
                    Beate Beispielhaft
                    <br />
                    Musterstraße 110
                    <br />
                    90210 Musterstadt
                </address>
            </section>

            <section className="mb-10">
                <h2 className="mb-3">{imprint.disputeTitle}</h2>
                <p>{imprint.disputeText}</p>
            </section>

            <section className="mb-12">
                <h2 className="mb-2">{imprint.dsaTitle}</h2>
                <p className="mb-3">{imprint.dsaNote}</p>
                <p className="mb-4">{imprint.dsaDescription}</p>

                <dl className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-2">
                    <dt>{imprint.email}</dt>
                    <dd>
                        <a href="mailto:max.mustermann@email.de">max.mustermann@email.de</a>
                    </dd>

                    <dt>{imprint.phone}</dt>
                    <dd>
                        <a href="tel:123456789">123456789</a>
                    </dd>

                    <dt>{imprint.languages}</dt>
                    <dd>
                        {imprint.languageGerman}, {imprint.languageEnglish}
                    </dd>
                </dl>
            </section>

            <footer className="border-t pt-4">
                <small>{imprint.source}</small>
            </footer>
        </div>
    );
}

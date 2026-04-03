import type { Language } from '~/features/language/state/Initial';

export const translations: Record<
    Language,
    {
        languageSwitcher: {
            label: string;
            english: string;
            german: string;
        };
        pagination: {
            nextPage: string;
            previousPage: string;
        };
        header: {
            srLabel: string;
            nav: {
                qkdIntro: string;
                hybrid: string;
                relatedWorks: string;
                contact: string;
            };
            hero: {
                title: string;
                subtitle: string;
            };
            goHome: string;
            support: string;
        };
        modes: {
            beginner: {
                label: string;
                description: string;
            };
            expert: {
                label: string;
                description: string;
            };
            placeholder: string;
        };
        agile: {
            title: string;
        };
        keyExchangeButtons: {
            start: string;
            continue: string;
            back: string;
        };
        qkdInfo: {
            button: {
                more: string;
            };
        };
        home: {
            benefits: {
                title: string;
                description: string;
            };
            context: {
                title: string;
                description: string;
                collaborationHeader: string;
                collaborationList: {
                    item1: string;
                    item2: string;
                    item3: string;
                };
            };
            news: {
                title: string;
                description: string;
                loading: string;
                hostLabel: string;
            };
            contact: {
                title: string;
                contactPersonLabel: string;
            };
        };
        relatedWorks: {
            title: string;
            description: string;
            authorLabel: string;
            openLink: string;
            loading: string;
        };
        footer: {
            details: string;
            imprint: string;
            dataPrivacyPolicy: string;
        };
        hybridize: {
            title: string;
            description: {
                intro: string;
                features: string;
                details: string;
            };
            form: {
                addKMS: string;
                addKMSError: string;
                removeKMSAriaLabel: string;
                duplicateKMSAriaLabel: string;
                removeKMSError: string;
                experimentName: string;
                experimentNamePlaceholder: string;
                experimentNameError: string;
                loggingLabel: string;
                submit: string;
                reset: string;
                kmsHeadline: string;
                hybridizationLabel: string;
                fields: {
                    keyExchangeMechanism: string;
                    macMechanism: string;
                    macUnderlyingFunction: string;
                };
                errorOverlay: {
                    title: string;
                    description: string;
                    closeButton: string;
                };
                loadingSpinner: {
                    running: string;
                };
            };
            testResults: {
                title: string;
                subtitle: string;
                resetTestResultsButton: string;
                ramResults: {
                    cardTitle: string;
                    cardDescription: string;
                    xAxisLabel: string;
                    yAxisLabel: string;
                    unit: string;
                };
                eventLog: {
                    cardTitle: string;
                    countLabel: string;
                };
            };
        };
        form: {
            requiredNote: string;
        };
        contactPage: {
            title: string;
            lead: string;
            contactPerson: string;
            phone: string;
            locationTitle: string;
            locationLead: string;
            address: string;
            hoursTitle: string;
            hoursWeek: string;
            hoursFriday: string;
            formTitle: string;
            formLead: string;
            fields: {
                name: string;
                namePlaceholder: string;
                nameError: string;
                company: string;
                companyPlaceholder: string;
                email: string;
                emailPlaceholder: string;
                emailEmptyError: string;
                emailInvalidError: string;
                topic: string;
                topicPlaceholder: string;
                message: string;
                messagePlaceholder: string;
                messageError: string;
            };
            submit: string;
            reset: string;
            sentSuccessMessage: string;
            sentErrorMessage: string;
            loadingMessage: string;
            contactFormOpenButton: string;
        };

        error: {
            title: string;
            description: string;
            home: string;
            support: string;
        };

        imprint: {
            title: string;
            legalReference: string;
            representedBy: string;
            contact: string;
            phone: string;
            fax: string;
            email: string;
            vatIdTitle: string;
            vatIdText: string;
            editorialTitle: string;
            disputeTitle: string;
            disputeText: string;
            dsaTitle: string;
            dsaNote: string;
            dsaDescription: string;
            languages: string;
            languageGerman: string;
            languageEnglish: string;
            source: string;
        };
        privacyPolicy: {
            title: string;
            section1: {
                title: string;
                generalInfoTitle: string;
                generalInfoText: string;
                dataCollectionTitle: string;
                controllerQuestion: string;
                controllerAnswer: string;
                howWeCollectQuestion: string;
                howWeCollectAnswer1: string;
                howWeCollectAnswer2: string;
                purposesQuestion: string;
                purposesAnswer: string;
                rightsQuestion: string;
                rightsAnswer1: string;
                rightsAnswer2: string;
            };
            section2: {
                title: string;
                privacyTitle: string;
                privacyText1: string;
                privacyText2: string;
                privacyText3: string;
                controllerNoticeTitle: string;
                controllerNoticeLead: string;
                controllerCompany: string;
                controllerStreet: string;
                controllerCity: string;
                controllerPhoneLabel: string;
                controllerEmailLabel: string;
                controllerDefinition: string;
                retentionTitle: string;
                retentionText: string;
                legalBasesTitle: string;
                legalBasesText: string;
                recipientsTitle: string;
                recipientsText: string;
                revokeTitle: string;
                revokeText: string;
                objectionTitle: string;
                objectionText1: string;
                objectionText2: string;
                complaintTitle: string;
                complaintText: string;
                portabilityTitle: string;
                portabilityText: string;
                accessTitle: string;
                accessText: string;
                restrictionTitle: string;
                restrictionLead: string;
                restrictionList: string[];
                restrictionText: string;
            };
            source: string;
        };
    }
> = {
    en: {
        languageSwitcher: {
            label: 'Change language',
            english: 'EN',
            german: 'DE',
        },
        pagination: {
            nextPage: 'Next',
            previousPage: 'Previous',
        },
        header: {
            srLabel: 'Hochschule Darmstadt',
            nav: {
                qkdIntro: 'Quantum Key Distribution',
                hybrid: 'Hybridize Key Service',
                relatedWorks: 'Related Works',
                contact: 'Contact',
            },
            hero: {
                title: 'QKD Information Tool for Everybody',
                subtitle: 'Explore the fundamentals of Quantum Key Distribution with ease',
            },
            goHome: 'Go back home',
            support: 'Support',
        },
        modes: {
            beginner: {
                label: '🎓 Beginner Mode',
                description:
                    'Simple explanation: How do quantum technologies help protect our data?',
            },
            expert: {
                label: '👨‍💻 Expert Mode',
                description: 'Technical view on QKD, PQC, and hybrid key management systems.',
            },
            placeholder: 'Please select a mode.',
        },
        agile: {
            title: 'Agile Q Key Exchange',
        },
        keyExchangeButtons: {
            start: 'Start key exchange',
            continue: 'Continue',
            back: 'Back',
        },
        qkdInfo: {
            button: {
                more: 'Read more',
            },
        },
        home: {
            benefits: {
                title: 'Purpose & Origin',
                description:
                    'QuantumView was developed as part of a cryptographic research project with a focus on Quantum Key Distribution (QKD) and secure key exchange mechanisms. The objective was to make concepts from QKD research accessible through structured and comprehensible visualization. The application addresses key challenges in transferring QKD technologies into practice, particularly the transparent presentation, secure implementation, and hybridization of key exchange processes. The primary benefit of QuantumView lies in its clear and reproducible visualization of QKD-based key exchange procedures. In doing so, it makes the transition from theoretical QKD research to the practical implementation of secure key exchange mechanisms transparent and tangible.',
            },
            context: {
                title: 'Context & Collaboration',
                description:
                    'This website was created as part of the student project QuantumView and explains Quantum Key Distribution (QKD) in an accessible way while demonstrating hybridization in key exchange. The tool HybridizeKeyService, developed by a research group at the university, enhances security during key transmission by combining multiple cryptographic methods. An integrated form allows users to specifically test and evaluate the hybridization process.',
                collaborationHeader: 'Collaborations:',
                collaborationList: {
                    item1: 'Research project SATURN within the ATHENE research area CRYPTO',
                    item2: 'Research group UCS at Darmstadt University of Applied Sciences',
                    item3: 'Collaboration with the da/net research group and the startup qonduit spun off from Darmstadt University of Applied Sciences',
                },
            },
            news: {
                title: 'Recent News',
                description: 'Updates, releases, and project news.',
                loading: 'Loading News...',
                hostLabel: 'Host',
            },
            contact: {
                title: 'Contact',
                contactPersonLabel: 'Contact person',
            },
        },
        relatedWorks: {
            title: 'Related Works',
            description:
                'Dive deeper into the topic with related works featuring descriptions, context, and author information. Use the links to access the original sources and further materials.',
            authorLabel: 'Author:',
            openLink: 'Open',
            loading: 'Loading Related Works...',
        },
        footer: {
            details: 'QuantumView · University of Applied Sciences Darmstadt',
            imprint: 'Imprint',
            dataPrivacyPolicy: 'Data Privacy Policy',
        },
        hybridize: {
            title: 'Hybridize Key Service',
            description: {
                intro: 'Configure and test hybrid key generation by defining Key Management System (KMS) parameters. Select your preferred key exchange mechanisms, Message Authentication Code (MAC) mechanisms, and MAC underlying functions.',
                features:
                    'You can add multiple KMS configurations (up to 20) to simulate complex scenarios and verify the robustness of your hybrid cryptographic setup.',
                details:
                    'Please note that the experiment name is mandatory. Hybridization can be toggled individually for each KMS. Enabling the "Activate Logging" checkbox provides a more detailed status report.',
            },
            form: {
                addKMS: 'Add KMS',
                addKMSError: 'You cannot add more than 20 KMS.',
                removeKMSAriaLabel: 'Remove KMS Button',
                duplicateKMSAriaLabel: 'Duplicate KMS Button',
                removeKMSError: 'A minimum of 2 KMS configurations is required.',
                loggingLabel: 'Activate Logging',
                experimentName: 'Experiment Name',
                experimentNamePlaceholder: 'e.g., Hybridize Key Service Test',
                experimentNameError: "Experiment name shouldn't be empty.",
                submit: 'Run Test',
                reset: 'Reset',
                kmsHeadline: 'KMS',
                hybridizationLabel: 'Activate Hybridization',
                fields: {
                    keyExchangeMechanism: 'Key Exchange Mechanism',
                    macMechanism: 'Message Authentication Code Mechanism',
                    macUnderlyingFunction: 'Message Authentication Code Underlying Function',
                },
                errorOverlay: {
                    title: 'Error: Test Run Failed',
                    description:
                        'The test could not be started. Please check your inputs and try again.',
                    closeButton: 'Close',
                },
                loadingSpinner: {
                    running: 'Test is running...',
                },
            },
            testResults: {
                title: 'Test Results',
                subtitle: 'Analysis of RAM usage and event timeline of KMS and HKS containers',
                resetTestResultsButton: 'Reset Test Result',
                ramResults: {
                    cardTitle: 'RAM Usage Over Time',
                    cardDescription:
                        'Tracking the RAM consumption of all Key Management Systems (KMS) and Hybrid Key Services (HKS)',
                    xAxisLabel: 'Time (Seconds)',
                    yAxisLabel: 'RAM (MB)',
                    unit: 'MB',
                },
                eventLog: {
                    cardTitle: 'Event Log',
                    countLabel: 'Total events recorded',
                },
            },
        },
        form: {
            requiredNote: 'Required fields are marked with an asterisk.',
        },
        contactPage: {
            title: 'Contact',
            lead: 'We are happy to answer questions about the platform, workshops, or collaboration.',
            contactPerson: 'Contact person',
            phone: 'Phone',
            locationTitle: 'Location',
            locationLead: 'Darmstadt University of Applied Sciences, Schöfferstraße campus.',
            address: 'Schöfferstraße 3, 64295 Darmstadt\nBuilding D19 · 2nd floor',
            hoursTitle: 'Office hours',
            hoursWeek: 'Mon–Thu: 09:00–16:00',
            hoursFriday: 'Fri: 09:00–13:00',
            formTitle: 'Get in touch',
            formLead: 'Use the form for inquiries, demo requests, or feedback.',
            fields: {
                name: 'Name',
                namePlaceholder: 'First and last name',
                nameError: "Name shouldn't be empty.",
                company: 'Organisation',
                companyPlaceholder: 'Company / University',
                email: 'E-Mail',
                emailPlaceholder: 'name@beispiel.de',
                emailEmptyError: "E-Mail shouldn't be empty.",
                emailInvalidError: 'E-Mail is invalid.',
                topic: 'Topic',
                topicPlaceholder: 'e.g. demo, project inquiry',
                message: 'Message',
                messagePlaceholder: 'How can we help?',
                messageError: "Message shouldn't be empty.",
            },
            submit: 'Send message',
            reset: 'Reset form',
            sentSuccessMessage: 'The message has been sent successfully. Thank you!',
            sentErrorMessage:
                'An error occurred while sending the message. Please try again later.',
            loadingMessage: 'Sending message...',
            contactFormOpenButton: 'Return to contact form',
        },
        error: {
            title: 'Page not found',
            description: 'Sorry, we couldn’t find the page you’re looking for.',
            home: 'Go back home',
            support: 'Support',
        },
        imprint: {
            title: 'Imprint',
            legalReference: 'Information according to § 5 TMG',
            representedBy: 'Represented by',
            contact: 'Contact',
            phone: 'Phone',
            fax: 'Fax',
            email: 'E-Mail',
            vatIdTitle: 'VAT ID',
            vatIdText: 'VAT identification number according to § 27 a of the German VAT Act:',
            editorialTitle: 'Editorially responsible',
            disputeTitle: 'Consumer dispute resolution / universal arbitration board',
            disputeText:
                'We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.',
            dsaTitle: 'Central contact point under the Digital Services Act (DSA)',
            dsaNote: '(Regulation (EU) 2022/265)',
            dsaDescription:
                'Our central contact point for users and authorities pursuant to Art. 11, 12 DSA can be reached as follows:',
            languages: 'Languages',
            languageGerman: 'German',
            languageEnglish: 'English',
            source: 'Source: e-recht24.de',
        },
        privacyPolicy: {
            title: 'Privacy Policy',
            section1: {
                title: '1. Data protection at a glance',
                generalInfoTitle: 'General information',
                generalInfoText:
                    'The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to personally identify you. For detailed information on data protection, please refer to our privacy policy listed below this text.',
                dataCollectionTitle: 'Data collection on this website',
                controllerQuestion: 'Who is responsible for data collection on this website?',
                controllerAnswer:
                    'Data processing on this website is carried out by the website operator. You can find the operator’s contact details in the section “Notice regarding the responsible entity” in this privacy policy.',
                howWeCollectQuestion: 'How do we collect your data?',
                howWeCollectAnswer1:
                    'On the one hand, your data is collected when you provide it to us. This may include, for example, data you enter into a contact form.',
                howWeCollectAnswer2:
                    'Other data is collected automatically or with your consent when you visit the website by our IT systems. This is mainly technical data (e.g. internet browser, operating system, or time of page access). This data is collected automatically as soon as you enter this website.',
                purposesQuestion: 'What do we use your data for?',
                purposesAnswer:
                    'Some data is collected to ensure error-free provision of the website. Other data may be used to analyze your user behavior. If contracts can be concluded or initiated via the website, the transmitted data will also be processed for contract offers, orders, or other inquiries.',
                rightsQuestion: 'What rights do you have regarding your data?',
                rightsAnswer1:
                    'You have the right at any time to obtain information free of charge about the origin, recipients, and purpose of your stored personal data. You also have the right to request the correction or deletion of this data. If you have given consent to data processing, you can revoke this consent at any time for the future. Furthermore, you have the right, under certain circumstances, to request the restriction of the processing of your personal data. You also have the right to lodge a complaint with the competent supervisory authority.',
                rightsAnswer2:
                    'For this as well as for further questions on data protection, you can contact us at any time.',
            },
            section2: {
                title: '2. General information and mandatory disclosures',
                privacyTitle: 'Data protection',
                privacyText1:
                    'The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with statutory data protection regulations and this privacy policy.',
                privacyText2:
                    'When you use this website, various personal data is collected. Personal data is data that can be used to personally identify you. This privacy policy explains what data we collect and what we use it for. It also explains how and for what purpose this is done.',
                privacyText3:
                    'We point out that data transmission over the internet (e.g. communication by E-Mail) may have security vulnerabilities. Complete protection of data from access by third parties is not possible.',
                controllerNoticeTitle: 'Notice regarding the responsible entity',
                controllerNoticeLead:
                    'The responsible entity for data processing on this website is:',
                controllerCompany: 'Example Company',
                controllerStreet: 'Sample Road 10',
                controllerCity: '90210 Sample City',
                controllerPhoneLabel: 'Phone',
                controllerEmailLabel: 'E-Mail',
                controllerDefinition:
                    'The responsible entity is the natural or legal person who alone or jointly with others decides on the purposes and means of processing personal data (e.g. names, E-Mail addresses, etc.).',
                retentionTitle: 'Storage duration',
                retentionText:
                    'Unless a more specific storage period is stated within this privacy policy, your personal data will remain with us until the purpose for data processing no longer applies. If you assert a legitimate request for deletion or revoke your consent to data processing, your data will be deleted unless we have other legally permissible reasons for storing your personal data (e.g. tax or commercial retention periods); in the latter case, the deletion takes place after these reasons cease to apply.',
                legalBasesTitle:
                    'General information on the legal bases for data processing on this website',
                legalBasesText:
                    'If you have consented to data processing, we process your personal data on the basis of Art. 6(1)(a) GDPR or Art. 9(2)(a) GDPR if special categories of data are processed pursuant to Art. 9(1) GDPR. In the case of explicit consent to the transfer of personal data to third countries, data processing is also based on Art. 49(1)(a) GDPR. If you have consented to the storage of cookies or access to information on your end device (e.g. via device fingerprinting), data processing is additionally based on § 25(1) TDDDG. Consent can be revoked at any time. If your data is required to fulfill a contract or to carry out pre-contractual measures, we process your data on the basis of Art. 6(1)(b) GDPR. Furthermore, we process your data if it is required to fulfill a legal obligation on the basis of Art. 6(1)(c) GDPR. Data processing may also be based on our legitimate interest pursuant to Art. 6(1)(f) GDPR. The respective legal bases applicable in individual cases are explained in the following sections of this privacy policy.',
                recipientsTitle: 'Recipients of personal data',
                recipientsText:
                    'In the course of our business activities, we work with various external parties. In some cases, it is also necessary to transmit personal data to these external parties. We only pass on personal data to external parties if this is necessary for fulfilling a contract, if we are legally obliged to do so (e.g. disclosure to tax authorities), if we have a legitimate interest in the disclosure pursuant to Art. 6(1)(f) GDPR, or if another legal basis permits the disclosure. When using processors, we only disclose personal data of our customers on the basis of a valid processing agreement. In the case of joint processing, a joint processing agreement is concluded.',
                revokeTitle: 'Revocation of your consent to data processing',
                revokeText:
                    'Many data processing operations are only possible with your express consent. You can revoke consent you have already given at any time. The legality of data processing carried out until the revocation remains unaffected by the revocation.',
                objectionTitle:
                    'Right to object to data collection in special cases and to direct marketing (Art. 21 GDPR)',
                objectionText1:
                    'IF DATA PROCESSING IS BASED ON ART. 6(1)(E) OR (F) GDPR, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME, FOR REASONS ARISING FROM YOUR PARTICULAR SITUATION, TO THE PROCESSING OF YOUR PERSONAL DATA; THIS ALSO APPLIES TO PROFILING BASED ON THESE PROVISIONS. THE RESPECTIVE LEGAL BASIS ON WHICH PROCESSING IS BASED CAN BE FOUND IN THIS PRIVACY POLICY. IF YOU OBJECT, WE WILL NO LONGER PROCESS YOUR PERSONAL DATA UNLESS WE CAN DEMONSTRATE COMPELLING LEGITIMATE GROUNDS FOR THE PROCESSING WHICH OVERRIDE YOUR INTERESTS, RIGHTS AND FREEDOMS OR THE PROCESSING SERVES THE ESTABLISHMENT, EXERCISE OR DEFENSE OF LEGAL CLAIMS (OBJECTION PURSUANT TO ART. 21(1) GDPR).',
                objectionText2:
                    'IF YOUR PERSONAL DATA IS PROCESSED FOR DIRECT MARKETING PURPOSES, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF PERSONAL DATA CONCERNING YOU FOR THE PURPOSE OF SUCH ADVERTISING; THIS ALSO APPLIES TO PROFILING INSOFAR AS IT IS RELATED TO SUCH DIRECT MARKETING. IF YOU OBJECT, YOUR PERSONAL DATA WILL NO LONGER BE USED FOR DIRECT MARKETING PURPOSES (OBJECTION PURSUANT TO ART. 21(2) GDPR).',
                complaintTitle:
                    'Right to lodge a complaint with the competent supervisory authority',
                complaintText:
                    'In the event of violations of the GDPR, data subjects have the right to lodge a complaint with a supervisory authority, in particular in the member state of their habitual residence, place of work, or place of the alleged infringement. The right to lodge a complaint is without prejudice to any other administrative or judicial remedies.',
                portabilityTitle: 'Right to data portability',
                portabilityText:
                    'You have the right to receive data that we process automatically on the basis of your consent or in fulfillment of a contract, in a commonly used, machine-readable format, and to have it transmitted to you or to a third party. If you request the direct transfer of the data to another controller, this will only take place insofar as it is technically feasible.',
                accessTitle: 'Information, correction and deletion',
                accessText:
                    'Within the scope of applicable legal provisions, you have the right at any time to free information about your stored personal data, its origin and recipients, and the purpose of data processing, and, if applicable, a right to correction or deletion of this data. For this as well as for further questions on personal data, you can contact us at any time.',
                restrictionTitle: 'Right to restriction of processing',
                restrictionLead:
                    'You have the right to request the restriction of the processing of your personal data. You can contact us at any time for this purpose. The right to restriction of processing exists in the following cases:',
                restrictionList: [
                    'If you dispute the accuracy of your personal data stored by us, we usually need time to verify this. For the duration of the review, you have the right to request restriction of processing of your personal data.',
                    'If the processing of your personal data was/is unlawful, you can request restriction of data processing instead of deletion.',
                    'If we no longer need your personal data, but you need it to exercise, defend, or assert legal claims, you have the right to request restriction of processing instead of deletion.',
                    'If you have lodged an objection pursuant to Art. 21(1) GDPR, a balancing of your interests and ours must be carried out. As long as it has not yet been determined whose interests prevail, you have the right to request restriction of processing of your personal data.',
                ],
                restrictionText:
                    'If you have restricted the processing of your personal data, these data – apart from their storage – may only be processed with your consent or for the establishment, exercise or defense of legal claims or for the protection of the rights of another natural or legal person or for reasons of important public interest of the European Union or of a member state.',
            },
            source: 'Source: e-recht24.de',
        },
    },
    de: {
        languageSwitcher: {
            label: 'Sprache wechseln',
            english: 'EN',
            german: 'DE',
        },
        pagination: {
            nextPage: 'Weiter',
            previousPage: 'Zurück',
        },
        header: {
            srLabel: 'Hochschule Darmstadt',
            nav: {
                qkdIntro: 'Quantum Key Distribution',
                hybrid: 'Hybridize Key Service',
                relatedWorks: 'Verwandte Arbeiten',
                contact: 'Kontakt',
            },
            hero: {
                title: 'QKD-Informationstool für alle',
                subtitle: 'Erkunde die Grundlagen der Quantum Key Distribution auf einen Blick',
            },
            goHome: 'Zur Startseite',
            support: 'Support',
        },
        modes: {
            beginner: {
                label: '🎓 Beginner-Modus',
                description: 'Einstieg: Wie helfen Quantentechnologien dabei, Daten zu schützen?',
            },
            expert: {
                label: '👨‍💻 Expert:innen-Modus',
                description: 'Technische Sicht auf QKD, PQC und hybride Key-Management-Systeme.',
            },
            placeholder: 'Bitte wähle einen Modus aus.',
        },
        agile: {
            title: 'Agile Q Key Exchange',
        },
        keyExchangeButtons: {
            start: 'Schlüsselaustausch starten',
            continue: 'Weiter',
            back: 'Zurück',
        },
        qkdInfo: {
            button: {
                more: 'Mehr Informationen',
            },
        },
        home: {
            benefits: {
                title: 'Nutzen & Entstehung',
                description:
                    'QuantumView entstand im Rahmen eines kryptographischen Forschungsprojekts mit Schwerpunkt auf Quantum Key Distribution (QKD) und sicheren Verfahren zum Schlüsselaustausch. Ziel war es, Konzepte aus der QKD-Forschung durch eine strukturierte und verständliche Visualisierung zugänglich zu machen. Die Anwendung adressiert zentrale Herausforderungen beim Transfer von QKD-Technologien, insbesondere die nachvollziehbare Darstellung, sichere Implementierung und Hybridisierung beim Schlüsselaustausch. Der wesentliche Nutzen von QuantumView liegt in der anschaulichen und reproduzierbaren Visualisierung von QKD-basierten Schlüsselaustauschprozessen. Dadurch wird der Weg von der theoretischen QKD-Forschung bis zur praktischen Umsetzung sicherer Schlüsselaustauschverfahren transparent und greifbar gemacht.',
            },
            context: {
                title: 'Kontext & Zusammenarbeit',
                description:
                    'Im Rahmen des studentischen Projekts QuantumView entstand diese Webseite, die Quantum Key Distribution (QKD) verständlich erklärt und die Hybridisierung beim Schlüsselaustausch demonstriert. Das von einer Forschungsgruppe der Hochschule entwickelte Tool HybridizeKeyService sorgt durch die Kombination kryptographischer Verfahren für zusätzliche Sicherheit bei der Schlüsselübertragung. Über ein integriertes Formular kann die Hybridisierung gezielt getestet und ausgewertet werden.',
                collaborationHeader: 'Zusammenarbeiten:',
                collaborationList: {
                    item1: 'Forschungsprojekt SATURN im Rahmen des ATHENE Forschungsbereichs CRYPTO',
                    item2: 'Forschungsgruppe UCS der Hochschule Darmstadt',
                    item3: 'Zusammenarbeit mit der Forschungsgruppe da/net und dem aus der Hochschule Darmstadt ausgegründeten Startup qonduit',
                },
            },
            news: {
                title: 'Aktuelle Neuigkeiten',
                description: 'Updates, Releases und Projektneuigkeiten.',
                loading: 'Lade Neuigkeiten...',
                hostLabel: 'Host',
            },
            contact: {
                title: 'Kontakt',
                contactPersonLabel: 'Ansprechpartner',
            },
        },
        relatedWorks: {
            title: 'Verwandte Arbeiten',
            description:
                'Tauche tiefer ins Thema ein und entdecke verwandte Werke mit Beschreibungen, Kontext und Autor:innenangaben. Über die Links gelangst du direkt zu den Originalquellen und weiteren Materialien.',
            authorLabel: 'Author:',
            openLink: 'Öffnen',
            loading: 'Lade Verwandte Arbeiten...',
        },
        footer: {
            details: 'QuantumView · Hochschule Darmstadt',
            imprint: 'Impressum',
            dataPrivacyPolicy: 'Datenschutzerklärung',
        },
        hybridize: {
            title: 'Hybridize Key Service',
            description: {
                intro: 'Konfigurieren und testen Sie die hybride Schlüsselerzeugung, indem Sie Parameter für das Key Management System (KMS) definieren. Wählen Sie Ihre bevorzugten Schlüsselaustausch Mechanismen, Message-Authentication-Code Mechanismen (MAC) und MAC-Basisfunktionen.',
                features:
                    'Sie können mehrere KMS-Konfigurationen hinzufügen (bis zu 20), um komplexe Szenarien zu simulieren und die Robustheit Ihres hybriden kryptografischen Setups zu verifizieren.',
                details:
                    'Bitte beachten Sie, dass die Angabe eines Experimentnamens verpflichtend ist. Die Hybridisierung kann für jedes KMS einzeln an- oder ausgeschaltet werden. Durch das Aktivieren der "Logging Aktivieren" Checkbox erhalten Sie einen ausführlicheren Statusbericht.',
            },
            form: {
                addKMS: 'KMS hinzufügen',
                addKMSError: 'Es können höchstens 20 KMS angelegt werden.',
                removeKMSAriaLabel: 'KMS entfernen Button',
                duplicateKMSAriaLabel: 'KMS duplizieren Button',
                removeKMSError: 'Mindestens 2 KMS-Konfigurationen sind erforderlich.',
                loggingLabel: 'Logging aktivieren',
                experimentName: 'Experimentname',
                experimentNamePlaceholder: 'z. B. Hybridize Key Service Test',
                experimentNameError: 'Experimentname darf nicht leer sein.',
                submit: 'Test ausführen',
                reset: 'Zurücksetzen',
                kmsHeadline: 'KMS',
                hybridizationLabel: 'Hybridisierung aktivieren',
                fields: {
                    keyExchangeMechanism: 'Key-Exchange Mechanismus',
                    macMechanism: 'Message-Authentication-Code Mechanismus',
                    macUnderlyingFunction: 'MAC Basisfunktion',
                },
                errorOverlay: {
                    title: 'Fehler: Test Ausführung fehlgeschlagen',
                    description:
                        'Der Test konnte nicht gestartet werden. Bitte überprüfen Sie Ihre Eingaben und versuchen Sie es später erneut.',
                    closeButton: 'Schließen',
                },
                loadingSpinner: {
                    running: 'Test wird durchgeführt...',
                },
            },
            testResults: {
                title: 'Testergebnisse',
                subtitle: 'Analyse der RAM-Nutzung und Event-Timeline der KMS- und HKS-Container',
                resetTestResultsButton: 'Setze Testergebnisse zurück',
                ramResults: {
                    cardTitle: 'RAM-Nutzung über Zeit',
                    cardDescription:
                        'Verfolgung des RAM-Verbrauchs aller Key Management Systeme (KMS) und Hybrid Key Services (HKS)',
                    xAxisLabel: 'Zeit (Sekunden)',
                    yAxisLabel: 'RAM (MB)',
                    unit: 'MB',
                },
                eventLog: {
                    cardTitle: 'Ereignisprotokoll',
                    countLabel: 'Gesamtanzahl der erfassten Ereignisse',
                },
            },
        },
        form: {
            requiredNote: 'Pflichtfelder sind mit einem Sternchen markiert.',
        },
        contactPage: {
            title: 'Kontakt',
            lead: 'Wir beantworten gern Fragen zur Plattform, zu Workshops oder zur Zusammenarbeit.',
            contactPerson: 'Kontaktperson',
            phone: 'Telefon',
            locationTitle: 'Standort',
            locationLead: 'Hochschule Darmstadt, Campus Schöfferstraße.',
            address: 'Schöfferstraße 3, 64295 Darmstadt\nGebäude D19 · 2. Etage',
            hoursTitle: 'Sprechzeiten',
            hoursWeek: 'Mo–Do: 09:00–16:00 Uhr',
            hoursFriday: 'Fr: 09:00–13:00 Uhr',
            formTitle: 'Schreiben Sie uns',
            formLead: 'Nutzen Sie das Formular für Anfragen, Demo-Termine oder Feedback.',
            fields: {
                name: 'Name',
                namePlaceholder: 'Vor- und Nachname',
                nameError: 'Name darf nicht leer sein.',
                company: 'Organisation',
                companyPlaceholder: 'Firma / Hochschule',
                email: 'E-Mail',
                emailPlaceholder: 'name@beispiel.de',
                emailEmptyError: 'E-Mail darf nicht leer sein.',
                emailInvalidError: 'E-Mail is nicht valide.',
                topic: 'Thema',
                topicPlaceholder: 'z. B. Demo, Projektanfrage',
                message: 'Nachricht',
                messagePlaceholder: 'Wie können wir helfen?',
                messageError: 'Nachricht darf nicht leer sein.',
            },
            submit: 'Nachricht senden',
            reset: 'Formular zurücksetzen',
            sentSuccessMessage: 'Die Nachricht wurde gesendet. Vielen Dank!',
            sentErrorMessage:
                'Beim Senden ist ein Fehler aufgetreten. Bitte später erneut versuchen.',
            loadingMessage: 'Nachricht wird gesendet...',
            contactFormOpenButton: 'Zurück zum Kontaktformular',
        },
        error: {
            title: 'Seite nicht gefunden',
            description: 'Leider konnten wir die gesuchte Seite nicht finden.',
            home: 'Zur Startseite',
            support: 'Support',
        },
        imprint: {
            title: 'Impressum',
            legalReference: 'Angaben gemäß § 5 TMG',
            representedBy: 'Vertreten durch',
            contact: 'Kontakt',
            phone: 'Telefon',
            fax: 'Telefax',
            email: 'E-Mail',
            vatIdTitle: 'Umsatzsteuer-ID',
            vatIdText: 'Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:',
            editorialTitle: 'Redaktionell verantwortlich',
            disputeTitle: 'Verbraucherstreitbeilegung / Universalschlichtungsstelle',
            disputeText:
                'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
            dsaTitle: 'Zentrale Kontaktstelle nach dem Digital Services Act (DSA)',
            dsaNote: '(Verordnung (EU) 2022/265)',
            dsaDescription:
                'Unsere zentrale Kontaktstelle für Nutzer und Behörden nach Art. 11, 12 DSA erreichen Sie wie folgt:',
            languages: 'Sprachen',
            languageGerman: 'Deutsch',
            languageEnglish: 'Englisch',
            source: 'Quelle: e-recht24.de',
        },
        privacyPolicy: {
            title: 'Datenschutzerklärung',
            section1: {
                title: '1. Datenschutz auf einen Blick',
                generalInfoTitle: 'Allgemeine Hinweise',
                generalInfoText:
                    'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.',
                dataCollectionTitle: 'Datenerfassung auf dieser Website',
                controllerQuestion:
                    'Wer ist verantwortlich für die Datenerfassung auf dieser Website?',
                controllerAnswer:
                    'Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.',
                howWeCollectQuestion: 'Wie erfassen wir Ihre Daten?',
                howWeCollectAnswer1:
                    'Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.',
                howWeCollectAnswer2:
                    'Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.',
                purposesQuestion: 'Wofür nutzen wir Ihre Daten?',
                purposesAnswer:
                    'Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen verarbeitet.',
                rightsQuestion: 'Welche Rechte haben Sie bezüglich Ihrer Daten?',
                rightsAnswer1:
                    'Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.',
                rightsAnswer2:
                    'Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.',
            },

            section2: {
                title: '2. Allgemeine Hinweise und Pflichtinformationen',
                privacyTitle: 'Datenschutz',
                privacyText1:
                    'Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.',
                privacyText2:
                    'Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.',
                privacyText3:
                    'Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.',
                controllerNoticeTitle: 'Hinweis zur verantwortlichen Stelle',
                controllerNoticeLead:
                    'Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:',
                controllerCompany: 'Beispielfirma',
                controllerStreet: 'Musterweg 10',
                controllerCity: '90210 Musterstadt',
                controllerPhoneLabel: 'Telefon',
                controllerEmailLabel: 'E-Mail',
                controllerDefinition:
                    'Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.',
                retentionTitle: 'Speicherdauer',
                retentionText:
                    'Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.',
                legalBasesTitle:
                    'Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website',
                legalBasesText:
                    'Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.',
                recipientsTitle: 'Empfänger von personenbezogenen Daten',
                recipientsText:
                    'Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung geschlossen.',
                revokeTitle: 'Widerruf Ihrer Einwilligung zur Datenverarbeitung',
                revokeText:
                    'Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.',
                objectionTitle:
                    'Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)',
                objectionText1:
                    'WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).',
                objectionText2:
                    'WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).',
                complaintTitle: 'Beschwerderecht bei der zuständigen Aufsichtsbehörde',
                complaintText:
                    'Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.',
                portabilityTitle: 'Recht auf Datenübertragbarkeit',
                portabilityText:
                    'Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.',
                accessTitle: 'Auskunft, Berichtigung und Löschung',
                accessText:
                    'Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.',
                restrictionTitle: 'Recht auf Einschränkung der Verarbeitung',
                restrictionLead:
                    'Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:',
                restrictionList: [
                    'Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
                    'Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.',
                    'Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
                    'Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
                ],
                restrictionText:
                    'Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.',
            },
            source: 'Quelle: e-recht24.de',
        },
    },
};

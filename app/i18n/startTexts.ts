import type { Language } from '~/features/language/state/Initial';

interface StartEntry {
    title: string;
    text: string;
}

interface StartCopy {
    beginner: StartEntry[];
    expert: StartEntry[];
    default: StartEntry[];
}

export const startTexts: Record<Language, StartCopy> = {
    en: {
        beginner: [
            {
                title: 'What is Quantum Key Distribution?',
                text: 'Quantum Key Distribution (QKD) is a technology that uses the principles of quantum physics to securely exchange secret keys. Imagine sending messages in a way that no one can secretly listen in - if anyone tries, you immediately notice it! QKD helps ensure your data stays private and protected.',
            },
            {
                title: 'Why is Quantum Key Distribution important?',
                text: "As computers get more powerful, especially with the rise of quantum computers, traditional encryption could become vulnerable. QKD offers a future-proof way to protect information - even against tomorrow's technology.",
            },
        ],
        expert: [
            {
                title: 'What is Quantum Key Distribution?',
                text: 'Quantum Key Distribution (QKD) enables two parties to generate a shared, random secret key, which can be used for encrypted communication. It leverages quantum mechanics (e.g., the BB84 protocol) to guarantee that any eavesdropping attempt is detectable, ensuring information-theoretic security.',
            },
            {
                title: 'Why is Quantum Key Distribution important?',
                text: 'With the threat posed by quantum computers to classical cryptosystems (e.g., RSA, ECC), QKD provides a cryptographically secure key exchange method resistant to both classical and quantum attacks. Integrating QKD is a critical step toward post-quantum security architectures.',
            },
        ],
        default: [
            {
                title: 'What is Quantum Key Distribution?',
                text: 'Quantum Key Distribution (QKD) allows two people to share secret keys using the laws of quantum physics, making eavesdropping impossible without being noticed.',
            },
            {
                title: 'Why is Quantum Key Distribution important?',
                text: 'QKD is important for keeping data safe, especially as future technologies threaten traditional security methods.',
            },
        ],
    },
    de: {
        beginner: [
            {
                title: 'Was ist Quantum Key Distribution?',
                text: 'Quantum Key Distribution (QKD) nutzt die Prinzipien der Quantenphysik, um geheime Schlüssel sicher auszutauschen. Stell dir vor, Nachrichten so zu verschicken, dass niemand heimlich mithören kann - jeder Abhörversuch würde sofort auffallen. QKD sorgt dafür, dass deine Daten privat und geschützt bleiben.',
            },
            {
                title: 'Warum ist Quantum Key Distribution wichtig?',
                text: 'Mit immer leistungsfähigeren Computern und den ersten Quantenrechnern geraten klassische Verschlüsselungsverfahren unter Druck. QKD bietet eine zukunftssichere Möglichkeit, Informationen zu schützen - selbst gegen die Technologien von morgen.',
            },
        ],
        expert: [
            {
                title: 'Was ist Quantum Key Distribution?',
                text: 'Quantum Key Distribution (QKD) ermöglicht es zwei Parteien, einen gemeinsamen, zufälligen Geheimschlüssel zu erzeugen, der für verschlüsselte Kommunikation verwendet wird. Quantenmechanische Effekte wie im BB84-Protokoll stellen sicher, dass jeder Abhörversuch detektiert wird und informationstheoretische Sicherheit gegeben ist.',
            },
            {
                title: 'Warum ist Quantum Key Distribution wichtig?',
                text: 'Da Quantencomputer klassische Kryptosysteme wie RSA oder ECC angreifen können, liefert QKD einen Schlüssel­austausch, der sowohl gegenüber klassischen als auch gegenüber quantenbasierten Angriffen resistent ist. Die Integration von QKD ist ein zentraler Baustein für post-quanten­sichere Architekturen.',
            },
        ],
        default: [
            {
                title: 'Was ist Quantum Key Distribution?',
                text: 'Quantum Key Distribution (QKD) erlaubt es zwei Personen, geheime Schlüssel mithilfe der Quantenphysik auszutauschen, sodass Lauschen unmöglich ist, ohne bemerkt zu werden.',
            },
            {
                title: 'Warum ist Quantum Key Distribution wichtig?',
                text: 'QKD hilft, Daten auch dann zu schützen, wenn zukünftige Technologien klassische Sicherheitsverfahren schwächen.',
            },
        ],
    },
};

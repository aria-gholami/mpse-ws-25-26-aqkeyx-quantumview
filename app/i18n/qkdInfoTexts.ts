import type { Language } from '~/features/language/state/Initial';

interface QKDInfoEntry {
    step: string;
    desc: string;
    more: string;
}

interface QKDInfoLevels {
    beginner: QKDInfoEntry[];
    expert: QKDInfoEntry[];
}

export const qkdInfoTexts: Record<Language, QKDInfoLevels> = {
    en: {
        beginner: [
            {
                step: 'Step 0: Start',
                desc: 'Start the secure key exchange! Simply select a mode to begin.',
                more: '',
            },
            {
                step: 'Step 1: Quantum Key Exchange',
                desc: 'In step 1, the QKD key is exchanged. Keys from previous communications may already be stored in the key memory. If not, the key is generated using the BB84 protocol. The BB84 protocol forms the foundation for a security technology that can provide companies with significant strategic advantages.',
                more: 'The challenge: Classic encryption methods, on which most digital transactions rely today, will become obsolete within the next 10 to 15 years because of quantum computers. Organizations that fail to migrate risk compliance violations and a loss of trust.\n\nThe solution: The BB84 protocol establishes a mathematically provable secure key exchange between nodes. Instead of relying on hard math problems, it uses photons that are polarized in different directions. The sender encodes information in these polarizations and transmits it to the receiver. Any attempt to eavesdrop alters the photons, similar to a seal that breaks when opened. Communication partners can therefore detect attackers immediately and abort the exchange.\n\nBecause security is rooted in physics rather than computational complexity, every eavesdropping attempt is revealed automatically and the key exchange can be restarted safely.',
            },
            {
                step: 'Step 2: Extra Security',
                desc: 'After a quantum-secure base key has been established in the first step, a second security layer follows: the exchange of a post-quantum cryptography (PQC) key between the two communication nodes.',
                more: 'Immediately after the BB84 phase, the key management system (KMS) transfers the newly generated quantum key, including a unique key ID, to each Hybridize Key Service app (HKS). The app then initiates the PQC key exchange. To ensure that the same QKD key can be referenced later, HKS A sends the QKD key ID to HKS B, which in turn asks its KMS for the matching key.\n\nWhy use a second key? Think of a building with two independent locks on the same door. Even if an attacker managed to crack one, the other would still block access. PQC relies on mathematical problems that will remain difficult even for future quantum computers. A current practical example is ML-KEM, an algorithm standardized by NIST. If one of the two technologies becomes vulnerable someday, the other still protects the channel, which keeps compliance intact and builds long-term trust.',
            },
            {
                step: 'Step 3: Combine Keys',
                desc: 'Both keys are combined to create even stronger security.',
                more: 'In step 3, the HKS app merges the two previously separate keys using a hybridization algorithm. The result is a single, robust hybrid key built from the QKD key and the PQC key. If one of the keys became weak, the other would still provide protection. By combining both approaches, the risk of data leaks is minimized regardless of whether future attacks are classical or quantum-based.',
            },
            {
                step: 'Step 4: Protect Shared Secret',
                desc: 'In the fourth step, the key management system ensures that only authorized recipients can read the data. It uses the previously generated hybrid key and encrypts each message between KMS A and KMS B via the AES-256-GCM protocol.',
                more: 'Even if attackers intercepted the data stream, they would only see unintelligible ciphertext. Each message is also authenticated, so manipulations are detected immediately. The result is maximum confidentiality, integrity, and compliance between both communication partners.',
            },
            {
                step: 'Step 5: Forwarding in the Network',
                desc: 'In step 5, secure communication is extended over greater geographic distances. Because quantum channels only work over limited distances, trusted nodes such as Node B in the figure are required as intermediate stations.',
                more: 'Between each neighboring node (for example Node A and Node B, and Node B and Node C) a separate hybrid key is established that consists of a quantum-secure and a post-quantum-resistant component. The message is not transmitted from sender to recipient in one hop, but is forwarded node by node. Node A encrypts the message for Node B. There it is decrypted, re-encrypted with the key for Node C, and forwarded to the final recipient. This hop-by-hop principle ensures that every segment of the route is protected as strongly as possible.',
            },
        ],
        expert: [
            {
                step: 'Step 0: Initialization',
                desc: 'Initialize the QKD components for hybrid key exchange.',
                more: '',
            },
            {
                step: 'Step 1: QKD (BB84) Key Exchange',
                desc: 'In step 1, the QKD key is exchanged. Keys from previous communications may already reside in the key memory. Otherwise the key is generated with the BB84 procedure.',
                more: 'BB84 uses the non-clonability of qubits to establish a symmetric key via an insecure quantum carrier. Sender A randomly selects a basis (rectilinear or diagonal) and a value (0 or 1) for each bit and encodes this on photon polarization. Receiver B measures each photon in a randomly selected basis. After transmission, the parties exchange the bases they used (not the measurement results) via a classical, authenticated channel. They keep only the bits for which they used identical bases - this is the sifted key.\n\nTo check for errors or eavesdropping, some bits are compared at random and the quantum bit error rate (QBER) is calculated. Security analyses show that error rates up to roughly 11% can still be corrected with information-theoretic guarantees. Higher error rates indicate either too much physical noise or an active eavesdropper (intercept-resend, photon number splitting, etc.). In both cases the key is discarded and the protocol restarts.',
            },
            {
                step: 'Step 2: PQC Key Exchange',
                desc: 'In the second step, the communication nodes establish another key using a post-quantum key encapsulation mechanism (KEM).',
                more: 'The key management system (KMS) contacts the respective Hybridize Key Service (HKS) with the newly generated QKD key and its unique ID. The HKS app then starts the PQC key exchange. During this phase, the QKD key ID is transmitted from HKS A to HKS B so that both sides reference identical entropy. The PQC process relies on mathematical problems that are believed to be hard for classical and quantum computers. Each node contains a PQC KEM component (e.g., ML-KEM) and can be extended with other lattice-, code-, or isogeny-based schemes. The resulting PQC key is combined with the QKD key and optional entropy sources in a key derivation function to form the final hybrid key.',
            },
            {
                step: 'Step 3: Key Combination',
                desc: 'The actual hybridization takes place in the third step. Two independent keys - the QKD key and a PQC shared secret - are merged into one hybrid key.',
                more: 'Both keys have already been generated separately and exchanged via the Hybrid Authenticated Key Exchange (HAKE) workflow. The final derivation only starts after mutual authentication. A key derivation function (KDF) consumes pqKey and qkdKey to compute the hybridKey = F(pqKey, qkdKey). The function is designed so that no information about the original inputs can be reconstructed from the output. The resulting session key stays secure even if one of the underlying technologies becomes weaker in the future.',
            },
            {
                step: 'Step 4: Encrypt Shared Secret',
                desc: 'In the fourth step, the KMS treats the hybrid key as a session key for AEAD encryption with AES-256-GCM.',
                more: 'A 96-bit nonce is generated for every message according to NIST SP 800-38D. Additional authenticated data such as protocol headers is included in the GCM calculation. KMS A sends ciphertext, nonce, and a 128-bit authentication tag to KMS B. Hardware acceleration (AES-NI or ARMv8 Crypto Extensions) keeps latency low, while the 256-bit key still offers 128 bits of security even when Grover-style quantum speedups are considered.',
            },
            {
                step: 'Step 5: Multi-Hop Setup',
                desc: 'In step 5, the hybrid key exchange model is extended to a multi-hop architecture because of the physical limitations of quantum channels.',
                more: 'Between each adjacent pair (A-B, B-C) a separate hybrid key is generated via QKD and PQC, exactly as described in the earlier steps. Each segment uses AES-256-GCM for encryption. The payload is not encrypted end-to-end across the full path; instead a hop-by-hop approach is used. Node A encrypts the data with the key shared with Node B. Node B decrypts, re-encrypts it with its key for Node C, and forwards the packet. This model assumes trustworthy intermediate nodes but enables scalable, long-distance communication without quantum repeaters.',
            },
        ],
    },
    de: {
        beginner: [
            {
                step: 'Schritt 0: Start',
                desc: 'Starte den sicheren Schlüsselaustausch! Wähle einfach einen Modus aus, um zu beginnen.',
                more: '',
            },
            {
                step: 'Schritt 1: Quantum Key Exchange',
                desc: 'Im ersten Schritt wird der QKD-Schlüssel ausgetauscht. Schlüssel aus früheren Kommunikationen können bereits im Schlüsselspeicher liegen. Falls nicht, wird der Schlüssel mit dem BB84-Protokoll erzeugt. Dieses Protokoll bildet die Grundlage für eine Sicherheitstechnologie, die Unternehmen einen echten Vorsprung verschafft.',
                more: 'Die Herausforderung: Klassische Verschlüsselungsverfahren, auf denen heute fast alle digitalen Transaktionen basieren, werden in den nächsten zehn bis fünfzehn Jahren durch Quantencomputer angreifbar. Wer nicht rechtzeitig umstellt, riskiert Compliance-Verstöße und Vertrauensverlust.\n\nDie Lösung: Das BB84-Protokoll ermöglicht einen mathematisch nachweisbar sicheren Schlüsselaustausch zwischen zwei Knoten. Statt komplizierter Rechenrätsel werden Photonen verwendet, die in unterschiedliche Richtungen polarisiert werden. Der Sender codiert Informationen in diese Polarisationen und überträgt sie an den Empfänger. Jeder Abhörversuch verändert die Photonen - ähnlich wie ein Siegel, das beim Öffnen bricht. Dadurch erkennen die Kommunikationspartner Angriffe sofort und können den Austausch abbrechen.\n\nDa die Sicherheit auf physikalischen Gesetzen und nicht auf Rechenaufwand basiert, fällt jeder Lauscher automatisch auf und der Schlüsselaustausch kann sicher neu gestartet werden.',
            },
            {
                step: 'Schritt 2: Zusätzliche Sicherheit',
                desc: 'Nach dem quantensicheren Basisschlüssel folgt eine zweite Schutzschicht: der Austausch eines Post-Quantum-Cryptography-(PQC)-Schlüssels zwischen den beiden Kommunikationsknoten.',
                more: 'Direkt nach der BB84-Phase übergibt das Key-Management-System (KMS) den neu erzeugten Quantenschlüssel samt eindeutiger Key-ID an jede Hybridize-Key-Service-App (HKS). Die App startet anschließend den PQC-Schlüsselaustausch. Damit später dieselbe QKD-ID verwendet wird, sendet HKS A die ID an HKS B, das sich den passenden Schlüssel von seinem KMS geben lässt.\n\nWarum ein zweiter Schlüssel? Stell dir ein Gebäude mit zwei unabhängigen Schlössern vor. Selbst wenn eine Sperre geknackt würde, bleibt die andere intakt. PQC basiert auf mathematischen Problemen, die auch für zukünftige Quantenrechner schwer zu lösen sind. Ein aktuelles Beispiel ist ML-KEM, ein von NIST standardisiertes Verfahren. Sollte eine der beiden Technologien eines Tages Schwächen zeigen, schützt die andere weiterhin den Kanal, erfüllt Compliance-Anforderungen und schafft langfristiges Vertrauen.',
            },
            {
                step: 'Schritt 3: Schlüssel kombinieren',
                desc: 'Beide Schlüssel werden kombiniert, um die Sicherheit weiter zu erhöhen.',
                more: 'In Schritt 3 führt die HKS-App die zuvor getrennten Schlüssel mit einem Hybridisierungs-Algorithmus zusammen. Daraus entsteht ein robuster Hybrid-Schlüssel aus dem QKD- und dem PQC-Schlüssel. Verliert einer der beiden Schlüssel an Stärke, bleibt der andere als Absicherung bestehen. So werden Datenlecks minimiert, egal ob zukünftige Angriffe klassisch oder quantenbasiert sind.',
            },
            {
                step: 'Schritt 4: Gemeinsames Geheimnis schützen',
                desc: 'Im vierten Schritt stellt das Key-Management-System sicher, dass nur berechtigte Empfänger die Daten lesen können. Es nutzt den Hybrid-Schlüssel und verschlüsselt jede Nachricht zwischen KMS A und KMS B mit AES-256-GCM.',
                more: 'Selbst wenn Angreifer den Datenstrom abfangen, sehen sie nur unverständlichen Ciphertext. Jede Nachricht wird zusätzlich authentifiziert, sodass Manipulationen sofort auffallen. Ergebnis: maximale Vertraulichkeit, Integrität und Compliance zwischen den beiden Kommunikationsteilnehmern.',
            },
            {
                step: 'Schritt 5: Weiterleitung im Netzwerk',
                desc: 'Im fünften Schritt wird die sichere Kommunikation auf größere Entfernungen ausgeweitet. Da Quantenkanäle physikalisch begrenzt sind, benötigt man vertrauenswürdige Zwischenknoten wie Node B.',
                more: 'Zwischen jedem benachbarten Knotenpaar (z. B. Node A und Node B sowie Node B und Node C) wird ein eigener Hybrid-Schlüssel aufgebaut, bestehend aus einer quantensicheren und einer post-quantenresistenten Komponente. Die Nachricht wird nicht in einem Rutsch übertragen, sondern hop-by-hop weitergeleitet. Node A verschlüsselt für Node B, dort wird entschlüsselt, mit dem Schlüssel für Node C erneut verschlüsselt und schließlich an den Empfänger gesendet. Dieses Prinzip sorgt dafür, dass jedes Segment der Strecke maximal geschützt ist.',
            },
        ],
        expert: [
            {
                step: 'Schritt 0: Initialisierung',
                desc: 'Initialisiere die QKD-Komponenten für den hybriden Schlüsselaustausch.',
                more: '',
            },
            {
                step: 'Schritt 1: QKD-(BB84)-Schlüsselaustausch',
                desc: 'Im ersten Schritt wird der QKD-Schlüssel ausgetauscht. Schlüssel aus früheren Kommunikationen können noch im Speicher liegen, andernfalls wird er mit dem BB84-Verfahren erzeugt.',
                more: 'BB84 nutzt die Nicht-Klonbarkeit von Qubits, um über einen unsicheren Quantenträger einen symmetrischen Schlüssel aufzubauen. Sender A wählt für jedes Bit zufällig eine Basis (rectilinear oder diagonal) und einen Wert (0 oder 1) und kodiert ihn in der Polarisierung von Photonen. Empfänger B misst jedes Photon in einer zufälligen Basis. Nach der Übertragung teilen beide Parteien über einen klassischen, authentifizierten Kanal nur die verwendeten Basen mit. Bits mit übereinstimmenden Basen bilden den Sifted Key.\n\nUm Fehler oder Lauscher zu erkennen, werden zufällig ausgewählte Bits verglichen und die Quantum Bit Error Rate (QBER) bestimmt. Sicherheitsanalysen zeigen, dass Fehlerquoten bis etwa 11% mit informationstheoretischer Sicherheit korrigiert werden können. Höhere Werte deuten auf zu viel physikalisches Rauschen oder aktive Angreifer hin (Intercept-Resend, Photon-Number-Splitting usw.). In diesen Fällen wird der Schlüssel verworfen und das Protokoll neu gestartet.',
            },
            {
                step: 'Schritt 2: PQC-Schlüsselaustausch',
                desc: 'Im zweiten Schritt erzeugen die Kommunikationsknoten einen weiteren Schlüssel über einen Post-Quantum-Key-Encapsulation-Mechanismus (KEM).',
                more: 'Das Key-Management-System (KMS) informiert den jeweiligen Hybridize Key Service (HKS) über den neuen QKD-Schlüssel samt ID. Die HKS-App startet daraufhin den PQC-Schlüsselaustausch. Während dieser Phase wird die QKD-Key-ID von HKS A zu HKS B übertragen, damit beide Seiten identische Entropie referenzieren. Der PQC-Prozess basiert auf mathematischen Problemen, die nach aktuellem Stand für klassische und für Quantenrechner schwer zu lösen sind. Jeder Knoten besitzt eine PQC-KEM-Komponente (z. B. ML-KEM) und kann mit weiteren Gitter-, Code- oder Isogenie-basierten Verfahren erweitert werden. Der resultierende PQC-Schlüssel wird zusammen mit dem QKD-Schlüssel und optionaler zusätzlicher Entropie in eine Key-Derivation-Function eingespeist, die den finalen Hybrid-Schlüssel erzeugt.',
            },
            {
                step: 'Schritt 3: Schlüssel kombinieren',
                desc: 'In Schritt 3 findet die eigentliche Hybridisierung statt. Zwei unabhängige Schlüssel - der QKD-Schlüssel und ein PQC-Shared-Secret - werden zu einem Hybrid-Schlüssel vereint.',
                more: 'Beide Schlüssel wurden bereits separat generiert und über das HAKE-Verfahren (Hybrid Authenticated Key Exchange) ausgetauscht. Die finale Ableitung beginnt erst nach erfolgreicher gegenseitiger Authentifizierung. Eine Key-Derivation-Function (KDF) verarbeitet pqKey und qkdKey zu hybridKey = F(pqKey, qkdKey). Die Funktion ist so gestaltet, dass aus dem Ergebnis keine Rückschlüsse auf die Eingaben gezogen werden können. Dadurch bleibt der Sitzungsschlüssel selbst dann robust, wenn eine der Technologien später Schwächen zeigt.',
            },
            {
                step: 'Schritt 4: Gemeinsames Geheimnis verschlüsseln',
                desc: 'Im vierten Schritt nutzt das KMS den Hybrid-Schlüssel als Session-Key für AEAD-Verschlüsselung mit AES-256-GCM.',
                more: 'Für jede Nachricht wird ein 96-Bit-Nonce gemäß NIST SP 800-38D erzeugt. Zusatzdaten wie Protokoll-Header werden in die GCM-Berechnung einbezogen. KMS A übermittelt Ciphertext, Nonce und ein 128-Bit-Authentifizierungs-Tag an KMS B. Hardware-Beschleunigung (AES-NI bzw. ARMv8 Crypto Extensions) hält die Latenz im Millisekundenbereich, während der 256-Bit-Schlüssel selbst unter Berücksichtigung möglicher Grover-Speedups ein Sicherheitsniveau von 128 Bit liefert.',
            },
            {
                step: 'Schritt 5: Multi-Hop-Aufbau',
                desc: 'Im fünften Schritt wird das Modell wegen der physikalischen Grenzen von Quantenkanälen auf eine Multi-Hop-Architektur erweitert.',
                more: 'Zwischen jedem benachbarten Paar (A-B, B-C) wird - wie in den vorherigen Schritten beschrieben - ein eigener Hybrid-Schlüssel über QKD und PQC erzeugt. Jedes Segment nutzt AES-256-GCM zur Verschlüsselung. Die Nutzdaten werden nicht Ende-zu-Ende über die gesamte Strecke verschlüsselt, sondern hop-by-hop weitergereicht. Node A verschlüsselt mit dem Schlüssel für Node B, dort wird entschlüsselt, mit dem Schlüssel für Node C erneut verschlüsselt und weitergeleitet. Das Modell setzt vertrauenswürdige Zwischenknoten voraus, ermöglicht aber skalierbare, weitreichende Kommunikation ohne Quantenrepeater.',
            },
        ],
    },
};

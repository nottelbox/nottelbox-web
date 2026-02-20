import type { Translation } from "./translations.types";

export const de: Translation = {
    navbar: {
        vegan: "vegan",
        projects: "Projekte"
    },
    aboutMe: {
        heading: "Hi, ich bin Simon 👨‍💻",
        introduction: [
              'Hi, ich bin Simon – Full-Stack-Entwickler mit über vier Jahren',
              'Erfahrung in agilen Teams.\nIch arbeite mich schnell in komplexe',
              'fachliche Domänen ein, analysiere Prozesse strukturiert und',
              'entwickle daraus nachhaltige, durchdachte Lösungen. Als',
              'strategischer Langstreckendenker liegt mein Fokus',
              'darauf, Systeme ganzheitlich zu verstehen und kontinuierlich zu',
              'verbessern.\n\nIm Team übernehme ich Verantwortung über meinen',
              'eigentlichen Aufgabenbereich hinaus: Ich behalte den Überblick',
              'über offene Themen, unterstütze bei der sinnvollen Verteilung von',
              'Aufgaben und schlage passende nächste Schritte vor – abgestimmt',
              'auf Erfahrung, Verfügbarkeit und fachlichen Kontext.',
              'Perspektivisch strebe ich eine Rolle mit fachlicher Verantwortung',
              'und stärkerem Einfluss auf Architektur und Teamorganisation an.'
            ].join(' '),
        skills: [
            {
                symbol: "🧠",
                heading: "Analytisches Denken & Anforderungsmanagement",
                explanation: [
                    'Ich erhebe Anforderungen strukturiert und mit Blick',
                    'auf den fachlichen Mehrwert. Durch gezielte Gespräche',
                    'mit Key-Usern erkenne ich Zusammenhänge schnell und',
                    'übersetze komplexe Prozesse in klare, umsetzbare',
                    'technische Konzepte.'
                ].join(' ')

            },
            {
                symbol: "💬",
                heading: "Kommunikation & Ownership",
                explanation: [
                    'Ich erkläre technische Inhalte verständlich, moderiere',
                    'Diskussionen lösungsorientiert und präsentiere Ergebnisse',
                    'souverän – auch vor größeren Gruppen. Verantwortung zu',
                    'übernehmen und Themen aktiv voranzutreiben ist für mich',
                    'selbstverständlich.',
                ].join(' ')
            },
            {
                symbol: "⚙️",
                heading: "Full-Stack & Cloud-Mindset",
                explanation: [
                    'Vom Datenmodell bis zur UI entwickle ich durchgängige',
                    'Lösungen mit .NET, React und modernen Datenbanken.',
                    'Ergänzt wird das durch Erfahrung mit CI/CD, Deployment',
                    'und Containerisierung sowie meine',
                    'Azure-Developer-Associate-Zertifizierung.'
                ].join(' ')
            }
        ],
        contact: "Kontakt",
        emailMe: "Schick mir eine Email"
    },
    vegan: {
        veganism: "Veganismus",
        definition: "Das ethische Prinzip, dass Menschen ohne die Ausbeutung anderer Tiere leben sollen.",
        veganMisconceptions: {
            veganMisconceptions: "Vegane Irrtümer",
            list: [
                {
                    name: "Umwelt/Gesundheit",
                    content: "Veganismus hat nichts mit Umweltschutz/Gesundheit zu tun. Die Ablehnung jeglicher Tierausbeutung ist nicht zwangsläufig besser für die Umwelt/Gesundheit, weshalb man die konsequente Ablehnung von Tierausbeutung nicht mit Umweltschutz/Gesundheit begründen kann. Es ist möglich umweltschonend/gesund zu leben ohne die nichtmenschlichen Tiere zu respektieren. Umgekehrt ist es auch möglich Tierausbeutung konsequent abzulehnen und sehr umweltschädigend/ungesund zu leben. Mit Umweltschutz/Gesundheit gegen Tierausbeutung zu argumentieren, verhöhnt die Opfer. Stell dir vor, jemand sagt, man solle dich respektieren, weil es umweltschädigend bzw. günstig für die Gesundheit der dich unterdrückenden Person sei dich zu versklaven."
                },
                {
                    name: "Tierleid",
                    content: "Es ist nicht möglich leidfrei zu leben. Vegan lebende Personen verursachen auch vermeidbares Tierleid. Tatsächlich geht es beim Veganismus nicht primär um Leidvermeidung, sondern um die Ablehnung von Tierausbeutung. Mit der Vermeidung oder Reduktion von Tierleid für eine konsequente Ablehnung von Tierausbeutung zu argumentieren, ist eine schwache Argumentation, da es schwierig ist eine klare Grenze zu ziehen. Darum ist es sinnvoller mit der Ablehnung von Tierausbeutung zu argumentieren."
                },
                {
                    name: "Hypothetisches Pflanzenleid",
                    content: "Pflanzen sind nicht empfindungsfähig. Sich auf hypothetisches Pflanzenleid einzulassen, kann nach hinten losgehen, da nichtmenschliche Tiere Pflanzenteile verdauen können, die Menschen nicht verdauen können. Somit wäre es in der Theorie möglich das hypothetische Pflanzenleid weiter zu reduzieren, indem man zu einem geringen Ausmaß nichtmenschliche Tiere versklavt. Lass dich nicht auf dieses hypothetische Szenario ein, um dich nicht unnötig angreifbar zu machen."
                }
            ]
        }
    },
    projects: {
        projects: "Projekte",
        gameOfLife: {
            conwaysGameOfLife: "Conways Spiel des Lebens",
            controls: {
                start: "Starten",
                startBackward: "Rückwärts",
                pause: "Pausieren",
                random: "Zufällig",
                singleStep: "Einzelschritt",
                singleStepBackward: "Zurück",
                generationDuration: "Dauer einer Generation",
                ms: "ms",
                generationsPerSecond: "Generationen pro Sekunde",
                clear: "Löschen"
            }
        }
    }
};

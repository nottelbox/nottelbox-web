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
            'Erfahrung in der Entwicklung moderner Webanwendungen.\nIch',
            'analysiere Anforderungen strukturiert, hinterfrage bestehende',
            'Prozesse und entwickle daraus durchdachte, effiziente Lösungen.',
            'Als INTJ denke ich strategisch, arbeite mich schnell in komplexe',
            'Domänen ein und verliere dabei nie den Blick für das große',
            'Ganze.\n\nBesonders wichtig ist mir klare Kommunikation: Ich',
            'kann technische Zusammenhänge verständlich erklären, trete',
            'sicher vor Gruppen auf und bringe Ideen aktiv in Reviews',
            'und Team-Diskussionen ein.\nTechnologisch bewege ich mich',
            'souverän im Backend mit C#/.NET, Entity Framework, SQL Server',
            'und MongoDB sowie im Frontend mit TypeScript und React.',
            'Zusätzlich habe ich Erfahrung mit CI/CD, Deployment und',
            'Containerisierung und bin als Microsoft Azure Developer',
            'Associate zertifiziert.'].join(' '),
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
        ]
    },
    vegan: {
        veganism: "Veganismus",
        definition: "Das ethische Prinzip, dass Menschen ohne die Ausbeutung anderer Tiere leben sollen.",
        veganMisconceptions: {
            veganMisconceptions: "Vegane Irrtümer",
            list: [
                {
                    name: "Umwelt",
                    content: "Veganismus hat nichts mit Umweltschutz zu tun. Die Ablehnung jeglicher Tierausbeutung ist nicht zwangsläufig besser für die Umwelt, weshalb man die konsequente Ablehnung von Tierausbeutung nicht mit Umweltschutz begründen kann. Es ist möglich umweltschonend zu leben ohne die nichtmenschlichen Tiere zu respektieren. Umgekehrt ist es auch möglich Tierausbeutung konsequent abzulehnen und sich sehr umweltschädigend zu verhalten. Mit Umweltschutz gegen Tierausbeutung zu argumentieren, verhöhnt die Opfer. Stell dir vor, jemand sagt, man solle dich respektieren, weil es umweltschädigend sei dich zu versklaven."
                },
                {
                    name: "Gesundheit",
                    content: "Veganismus hat nichts mit Gesundheit zu tun. Die Ablehnung jeglicher Tierausbeutung ist nicht zwangsläufig besser für die Gesundheit, weshalb man die konsequente Ablehnung von Tierausbeutung nicht mit Gesundheit begründen kann. Es ist möglich gesund zu leben ohne die nichtmenschlichen Tiere zu respektieren. Umgekehrt ist es auch möglich Tierausbeutung konsequent abzulehnen und sehr ungesund zu leben. Mit Gesundheit gegen Tierausbeutung zu argumentieren, verhöhnt die Opfer. Stell dir vor, jemand sagt, man solle dich respektieren, weil es ungesund für deinen Unterdrücker sei dich zu versklaven."
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
        },
        unfold: "aufklappen",
        close: "schließen"
    },
    projects: {
        projects: "Projekte",
        gameOfLife: {
            conwaysGameOfLife: "Conways Spiel des Lebens",
            controls: {
                start: "Starten",
                pause: "Pausieren",
                random: "Zufällig",
                singleStep: "Einzelschritt",
                generationDuration: "Dauer einer Generation",
                ms: "ms",
                generationsPerSecond: "Generationen pro Sekunde",
                clear: "Löschen"
            }
        }
    }
};

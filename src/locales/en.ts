import type { Translation } from "./translations.types";

export const en: Translation = {
    navbar: {
        vegan: "vegan",
        projects: "projects"
    },
    aboutMe: {
        heading: "Hi, I am Simon 👨‍💻",
        introduction: [
              'Hi, I’m Simon – a full-stack developer with more than four years',
              'of experience working in agile teams.\nI quickly dive into complex',
              'domains, analyze processes in a structured way and turn them into',
              'sustainable, well-designed solutions. As a strategic long-term thinker,',
              'I focus on understanding systems holistically and improving',
              'them continuously.\n\nWithin the team, I take ownership beyond my',
              'core tasks: I keep track of open topics, help distribute work in a',
              'meaningful way and suggest next steps based on experience,',
              'availability and business context. Going forward, I aim to grow',
              'into a role with technical responsibility and stronger influence',
              'on architecture and team organization.'
            ].join(' '),
        skills: [
            {
                symbol: "🧠",
                heading: "Analytical thinking & requirements management",
                explanation: [
                    'I set requirements in a structured manner and with',
                    'a view to adding technical value. Through targeted',
                    'discussions with key users, I quickly identify',
                    'connections and translate complex processes into clear,',
                    'implementable technical concepts.'
                ].join(' ')
            },
            {
                symbol: "💬",
                heading: "Communication & Ownership",
                explanation: [
                    'I explain technical content in an understandable way,',
                    'moderate discussions in a solution-oriented manner, and',
                    'present results confidently—even in front of large groups.',
                    'Taking responsibility and actively driving topics forward',
                    'is second nature to me.'
                ].join(' ')
            },
            {
                symbol: "⚙️",
                heading: "Full-stack & cloud mindset",
                explanation: [
                    'From data models to user interfaces, I develop',
                    'end-to-end solutions using .NET, React, and modern',
                    'databases. This is complemented by my experience with',
                    'CI/CD, deployment, and containerization, as well as',
                    'my Azure Developer Associate certification.'
                ].join(' ')
            }
        ],
        contact: "contact",
        emailMe: "send me an email"
    },
    vegan: {
        veganism: "veganism",
        definition: "The ethical principle that humans should live without exploiting other animals.",
        veganMisconceptions: {
            veganMisconceptions: "vegan misconceptions",
            list: [
                {
                    name: "environment/health",
                    content: "Veganism has nothing to do with environmental protection or health. Rejecting animal exploitation is not necessarily better for the environment/health, which is why you cannot justify the consistent rejection of animal exploitation on the grounds of environmental protection or health. It is possible to live environmantally friendly or healthy while not respecting nonhuman animals. In reverse it is also possible to reject animal exploitation consistently while behaving environmentally harmful or bad for your own health. Using environment/health as an argument against animal exploitation mocks the victims. Imagine someone says, that you should be respected because enslaving you is bad for the environment or your oppressor's health."
                },
                {
                    name: "animal suffering",
                    content: "It is not possible to live withaut causing any suffering. Vegans cause avoidable animal suffering. In fact, veganism is not primarily about avoiding suffering, but about rejecting animal exploitation. Arguing for the consistent rejection of animal exploitation by avoiding or reducing animal suffering is a weak argument, as it is difficult to draw a clear line. That is why it makes more sense to argue for the rejection of animal exploitation."
                },
                {
                    name: "hypothetical plant suffering",
                    content: "Plants are not sentient. Engaging in hypothetical plant suffering can backfire, as nonhuman animals can digest parts of plants that humans cannot. Thus, in theory, it would be possible to further reduce hypothetical plant suffering by enslaving nonhuman animals to a small extent. Do not engage in this hypothetical scenario so as not to make yourself unnecessarily vulnerable."
                }
            ]
        },
        ntt: {
            ntt: "NTT",
            mainQuestion: "What is the ethically relevant difference between humans and other animals that justifies the exploitation of non-human animals in your moral code, while humans, according to your moral code, may not be used as slaves?",
            traits: "traits (choose one or more)",
            traitList: [{
                key: "int",
                name: "Intelligence",
                consistencyTest: "Their intelligence is on par with that of other animals."
            },
            {
                key: "spe",
                name: "Species",
                consistencyTest: "Their DNA has been altered so that they no longer belong to the human species. They have a different ear shape."
            },
            {
                key: "sel",
                name: "Self-awareness",
                consistencyTest: "They do not recognize themselves in a mirror and have no autobiographical self-concept."
            },
            {
                key: "com",
                name: "Communication",
                consistencyTest: "They cannot use complex language, only simple sounds and body language like other animals."
            },
            {
                key: "mor",
                name: "Moral understanding",
                consistencyTest: "They have understanding of moral rules or ethical reflection similar to other animals."
            },
            {
                key: "soc",
                name: "Social bonds",
                consistencyTest: "Their social relationships and care for others are equivalent to those of other animals."
            },
            {
                key: "pot",
                name: "Potential",
                consistencyTest: "They do not have the potential to develop cognitive abilities beyond those of other animals."
            },
            {
                key: "cul",
                name: "Cultural participation",
                consistencyTest: "They cannot participate in culture, technology, or complex societal structures."
            },
            {
                key: "rel",
                name: "Relational capacity",
                consistencyTest: "They cannot form closer emotional relationships with humans than other animals can."
            },
            {
                key: "use",
                name: "Usefulness",
                consistencyTest: "They are not more useful to society than other animals."
            }],
            consistencyCheck: "consistency check",
            consistencyIntroduction: "Imagine people who have undergone the following changes:",
            consistencyQuestion: "According to your moral code, is it permissible to exploit these sentient beings?",
            noContradiction: "No - contradiction",
            yesReductio: "Yes - reductio",
            contradictionSingularPositive: "is the ethical relevant trait that justifies the exploitation.",
            contradictionSingularNegative: "is not the ethical relevant trait that justifies the exploitation.",
            contradictionPluralPositive: "are the ethical relevant traits that justify the exploitation.",
            contradictionPluralNegative: "are NOT the ethical relevant traits that justify the exploitation.",
            reductio: "If the selected characteristics represent the morally relevant difference, it follows that individuals may be exploited as soon as they do not fulfill these characteristics—even if they otherwise share many characteristics with humans, especially sentience. Is that a moral you want to uphold?"
        }
    },
    projects: {
        projects: "projects",
        gameOfLife: {
            conwaysGameOfLife: "Conway's Game of Life",
            controls: {
                start: "start",
                startBackward: "backwards",
                pause: "pause",
                random: "random",
                singleStep: "single step",
                singleStepBackward: "back",
                generationDuration: "duration of one generation",
                ms: "ms",
                generationsPerSecond: "generations per second",
                clear: "clear",
                loopWithinHistory: "loop within history",
                gridSize: "grid size",
                historyUsage: "history usage",
                savedGenerations: "saved generations",
                historyAlmostFull: "⚠ Speicher fast voll – Rückwärts-Schritte bald begrenzt",
                historyFull:"⚠ Speicher voll – Anfang wird überschrieben"
            }
        }
    }
};

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
              'sustainable, well-designed solutions. As a strategically thinking',
              'INTJ, I focus on understanding systems holistically and improving',
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
                    name: "environment",
                    content: "Veganism has nothing to do with environmental protection. Rejecting animal exploitation is not necessarily better for the environment, which is why you cannot justify the consistent rejection of animal exploitation on the grounds of environmental protection. It is possible to live environmantally friendly while not respecting nonhuman animals. In reverse it is also possible to reject animal exploitation consistently while behaving environmentally harmful. Using environment as an argument against animal exploitation mocks the victims. Imagine someone says, that you should be respected because enslaving you is bad for the environment."
                },
                {
                    name: "health",
                    content: "Veganism has nothing to do with health. Rejecting animal exploitation is not necessarily better for the health, which is why you cannot justify the consistent rejection of animal exploitation on the grounds of health. It is possible to live healthy while not respecting nonhuman animals. In reverse it is also possible to reject animal exploitation consistently while living unhealthy. Using health as an argument against animal exploitation mocks the victims. Imagine someone says, that you should be respected because enslaving you is bad for the health of your oppressor."
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
        unfold: "unfold",
        close: "close"
    },
    projects: {
        projects: "projects",
        gameOfLife: {
            conwaysGameOfLife: "Conway's Game of Life",
            controls: {
                start: "start",
                pause: "pause",
                random: "random",
                singleStep: "single step",
                generationDuration: "duration of one generation",
                ms: "ms",
                generationsPerSecond: "generations per second",
                clear: "clear"
            }
        }
    }
};

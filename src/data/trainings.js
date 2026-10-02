// Featured trainings, grouped by university. Media is shown exactly as captured (no filters).
export const trainings = [
    {
        id: 'hcu',
        university: 'University of Hyderabad',
        shortName: 'HCU',
        location: 'Hyderabad',
        programs: [
            {
                id: 'hcu-python-rnd',
                title: 'Applied Python with the Python R&D Team',
                institution: 'Python Training Center, University of Hyderabad (with Aim Technologies)',
                role: 'Youngest member of the Python R&D team',
                meta: ['Research & Training', 'Python'],
                description: 'Selected as the youngest member of the Python Research & Development team at the University of Hyderabad\'s Python Training Center, working alongside 12 PhD experts across Machine Learning, Data Science, NLP, IoT and Bioinformatics. Together we take Python into real-world and academic research, and run applied Python sessions like the one in the video.',
                media: [
                    { type: 'video', src: '/media/trainings/hcu-applied-python.mp4', poster: '/media/trainings/hcu-applied-python-poster.webp', alt: 'Applied Python session at the University of Hyderabad' }
                ]
            }
        ]
    },
    {
        id: 'mru',
        university: 'Malla Reddy University',
        shortName: 'MRU',
        location: 'Hyderabad',
        programs: [
            {
                id: 'mru-finance',
                title: 'Python for Finance',
                institution: 'Malla Reddy Engineering College for Women (Autonomous)',
                role: 'Workshop trainer',
                meta: ['3-day workshop', 'Engineering students'],
                description: 'A three-day, hands-on workshop on using Python and data-driven techniques to understand financial markets and analyse stock trends, showing students where finance, data science and machine learning meet.',
                topics: ['Python for financial data analysis', 'Stock market data & market indicators', 'Working with financial datasets', 'Deep learning for market-trend analysis'],
                media: [
                    { type: 'image', src: '/media/workshops/python-finance-2.webp', alt: 'Python for Finance workshop session in the trading lab' },
                    { type: 'image', src: '/media/workshops/python-finance-1.webp', alt: 'Students working through Python for Finance exercises under a live stock ticker' }
                ]
            },
            {
                id: 'mru-fdp',
                title: 'AI-Driven Teaching Strategies for Industry-Aligned Learning',
                institution: 'Malla Reddy University',
                role: 'Trainer & resource person',
                meta: ['One-week Faculty Development Programme', 'University faculty'],
                description: 'Trained university faculty as a resource person in a one-week FDP, sharing practical AI-powered teaching methods and how to align classroom learning with what the industry needs, followed by engaging discussions with the participants.',
                media: [
                    { type: 'image', src: '/media/workshops/fdp-mallareddy-university.webp', alt: 'Mohammed Ehtesham as a resource person at the Malla Reddy University Faculty Development Programme', focus: 'center 8%' },
                    { type: 'video', src: '/media/trainings/mru-fdp-ai-teaching.mp4', poster: '/media/trainings/mru-fdp-ai-teaching-poster.webp', alt: 'Faculty attending the AI-Driven Teaching Strategies programme', crop: true }
                ]
            },
            {
                id: 'mru-prompt',
                title: 'AI & Prompt Engineering',
                institution: 'Malla Reddy Engineering College for Women (Autonomous)',
                role: 'Workshop trainer',
                meta: ['2-day workshop', 'IV B.Tech · Finishing School Programme', '25–26 March 2026'],
                description: 'A two-day workshop for final-year B.Tech students on working effectively with AI tools: crafting meaningful prompts and exploring real-world applications of Artificial Intelligence. The students\' energy and curiosity showed they are ready for the AI-driven workplace.',
                media: [
                    { type: 'image', src: '/media/workshops/ai-prompt-engineering-1.webp', alt: 'Presenting the AI and Prompt Engineering workshop' },
                    { type: 'image', src: '/media/workshops/ai-prompt-engineering-2.webp', alt: 'Stage of the two-day AI and Prompt Engineering workshop, March 2026' }
                ]
            }
        ]
    },
    {
        id: 'kaveri',
        university: 'Kaveri University',
        shortName: 'Kaveri',
        location: 'Hyderabad',
        programs: [
            {
                id: 'kaveri-dsa',
                title: 'Data Structures & Algorithms using C',
                institution: 'Kaveri University',
                role: 'Technical trainer',
                meta: ['Technical training', '200+ students'],
                description: 'A DSA training session in C for over 200 students, focused on programming fundamentals, logical thinking and problem solving for technical careers and placements. DSA isn\'t just about writing code; it\'s about learning to think, optimise and solve problems efficiently.',
                topics: ['Arrays & strings', 'Linked lists', 'Stacks & queues', 'Searching & sorting', 'Time & space complexity', 'Recursion'],
                media: [
                    { type: 'video', src: '/media/trainings/kaveri-dsa-c.mp4', poster: '/media/trainings/kaveri-dsa-c-poster.webp', alt: 'Over 200 students in the DSA using C session at Kaveri University' }
                ]
            }
        ]
    }
];

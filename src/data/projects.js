// Categories shown as filters in the projects archive, in this order.
export const PROJECT_CATEGORIES = ["Data Analysis", "Data Science", "AI Automations", "Full Stack"];

export const projects = [
    {
        id: 17,
        title: "SmartScraps",
        description: "A production-grade platform that runs a scrap-collection business end to end: an SEO-optimised public website with online booking and live slot scheduling, an admin dashboard with KPIs and analytics, a mobile workflow for pickup staff, inventory tracking, payments with PDF invoices, and WhatsApp notifications.",
        techStack: ["Flask", "HTMX", "Alpine.js", "Tailwind CSS", "PostgreSQL", "Redis", "Supabase", "Twilio WhatsApp", "Render"],
        githubUrl: null,
        liveUrl: null,
        category: "Full Stack",
        product: {
            order: 1,
            tagline: "Scrap pickup business, fully online",
            mockup: "smartscraps",
            highlights: [
                "Online scrap booking with live slot availability",
                "Admin dashboard for bookings, staff assignment, pricing and analytics",
                "Mobile pickup workflow for staff: status, weights, payments, photos",
                "Inventory, PDF invoices, WhatsApp alerts and role-based access"
            ]
        }
    },
    {
        id: 6,
        title: "MS Credit Panel",
        description: "An automation workflow for credit management, from Telegram to a React dashboard. Customers record and check their credit entirely through a Telegram bot, while the shop owner manages everything from a dashboard kept in real-time sync, with balance tracking, transaction history, analytics and threshold-based payment reminders.",
        techStack: ["Telegram Bot", "n8n", "PostgreSQL", "React", "Tailwind CSS", "Docker"],
        githubUrl: null,
        liveUrl: null,
        category: "AI Automations",
        product: {
            order: 2,
            tagline: "Shop credit that runs on Telegram",
            mockup: "credit",
            highlights: [
                "Customers transact and check balances in Telegram",
                "n8n workflows sync every entry to PostgreSQL instantly",
                "React dashboard for balances, history and analytics",
                "Automatic payment reminders when dues cross a threshold"
            ]
        }
    },
    {
        id: 1,
        title: "Data Analysis Agent with Memory",
        description: "An AI agent built with the Agno framework: upload a dataset, ask questions in plain English, and it runs the analysis with PandasTool and other specialised tools. Persistent memory keeps answers context-aware across questions.",
        techStack: ["Python", "Agno", "Pandas", "AI Agents", "Streamlit"],
        githubUrl: "https://github.com/MdEhtesham2004",
        liveUrl: null,
        category: "AI Automations"
    },
    {
        id: 2,
        title: "Data Visualization Agent",
        description: "An autonomous agent that turns questions into custom charts. Code runs securely in E2B sandboxes, Together.AI provides the LLM and Agno orchestrates the steps, all behind a Streamlit interface.",
        techStack: ["Python", "Agno", "E2B", "Together.AI", "Streamlit"],
        githubUrl: "https://github.com/MdEhtesham2004",
        liveUrl: null,
        category: "AI Automations"
    },
    {
        id: 3,
        title: "Intelligent Chatbot with Web Integration",
        description: "A chatbot powered by Grok 4.1 with persistent memory and Model Context Protocol (MCP) servers for real-time web data, using Agno for multi-turn conversation management.",
        techStack: ["Python", "Agno", "Grok 4.1", "MCP Servers", "Streamlit"],
        githubUrl: "https://github.com/MdEhtesham2004",
        liveUrl: null,
        category: "AI Automations"
    },
    {
        id: 5,
        title: "LinkedIn Content Automation Pipeline",
        description: "An end-to-end LinkedIn automation built only on free and open-source tools: n8n orchestration in Docker, a Google Sheets content calendar, OpenRouter LLMs for writing, local Stable Diffusion for images and the LinkedIn API for posting. Runs daily with zero manual work.",
        techStack: ["n8n", "Docker", "OpenRouter", "Stable Diffusion", "LinkedIn API", "Google Sheets"],
        githubUrl: "https://github.com/MdEhtesham2004",
        liveUrl: null,
        category: "AI Automations"
    },
    {
        id: 16,
        title: "Student Academic Resource Platform",
        description: "Award-winning graduation project that brings students' academic resources into one platform: semester-wise subjects, syllabi, model question papers, reference books, automatic result calculation and AI-based learning features. Won the Best Application award and is still used by the college.",
        techStack: ["Web Application", "AI Features", "EdTech"],
        githubUrl: null,
        liveUrl: null,
        category: "Full Stack"
    },
    {
        id: 4,
        title: "PyLearn Portal - Training Management System",
        description: "A Python training management platform built as a trainer: student registration with admin approval, performance monitoring, project tracking, code evaluation, assignment submission and separate student and admin dashboards.",
        techStack: ["Python", "Flask", "Django", "PostgreSQL", "React"],
        githubUrl: "https://github.com/MdEhtesham2004",
        liveUrl: null,
        category: "Full Stack"
    },
    {
        id: 9,
        title: "Stock Signals with CNN & Gramian Angular Fields",
        description: "A CNN that treats price charts as images: 30-day windows become 64×64 Gramian Angular Fields, and a ResNet-inspired PyTorch model classifies them as Buy, Hold or Sell. Includes live yfinance data, a market scanner and in-app training in Streamlit.",
        techStack: ["PyTorch", "CNN", "Gramian Angular Fields", "yfinance", "Streamlit"],
        githubUrl: "https://github.com/MdEhtesham2004",
        liveUrl: null,
        category: "Data Science"
    },
    {
        id: 10,
        title: "Deep Fake Detection System",
        description: "A prototype that detects AI-generated deepfake images by combining Machine Learning, Deep Learning and NLP techniques. Won a cash prize at Technocrats Elite 7.0, a National Level IT Exhibition.",
        techStack: ["Python", "Deep Learning", "Machine Learning", "NLP", "Computer Vision"],
        githubUrl: "https://github.com/MdEhtesham2004",
        liveUrl: null,
        category: "Data Science"
    },
    {
        id: 8,
        title: "Automated ETL & Machine Learning Pipeline",
        description: "A Streamlit pipeline that handles dataset upload, preprocessing, feature engineering, model building and tracking, with automatic detection of regression vs classification and one-click feature selection.",
        techStack: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
        githubUrl: "https://github.com/MdEhtesham2004",
        liveUrl: null,
        category: "Data Science"
    },
    {
        id: 11,
        title: "Loan Approval Prediction System",
        description: "An end-to-end ML pipeline for predicting loan approvals with both classic models and PyCaret automation, including feature engineering, feature selection and visual model evaluation.",
        techStack: ["Python", "Scikit-learn", "PyCaret", "Pandas", "Seaborn"],
        githubUrl: "https://github.com/MdEhtesham2004",
        liveUrl: null,
        category: "Data Science"
    },
    {
        id: 7,
        title: "Sentiment Analysis System",
        description: "A sentiment analysis application using NLTK that reads the emotional tone and polarity of text.",
        techStack: ["Python", "NLTK", "NLP"],
        githubUrl: "https://github.com/MdEhtesham2004",
        liveUrl: null,
        category: "Data Science"
    },
    {
        id: 13,
        title: "Exploratory Data Analysis Projects",
        description: "In-depth EDA on real-world datasets to surface patterns, trends and correlations, covering data cleaning, transformation and interactive visualisation.",
        techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly"],
        githubUrl: "https://github.com/MdEhtesham2004",
        liveUrl: null,
        category: "Data Analysis"
    },
    {
        id: 12,
        title: "Toyota Service Management Database",
        description: "A PostgreSQL database for a Toyota service centre with full ER modelling and normalisation, plus views, stored procedures, joins and aggregations for business reporting.",
        techStack: ["PostgreSQL", "SQL", "Database Design", "ER Modeling"],
        githubUrl: "https://github.com/MdEhtesham2004",
        liveUrl: null,
        category: "Data Analysis"
    }
];

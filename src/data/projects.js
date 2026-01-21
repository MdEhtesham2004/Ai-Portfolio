export const projects = [
    {
        id: 1,
        title: "Data Analysis Agent with Memory",
        description: "Built an intelligent data analysis agent using Agno framework with memory capabilities. Users simply upload a dataset and ask questions in natural language - the agent performs comprehensive analytics using PandasTool and other specialized tools. Features persistent memory for context-aware responses across queries.",
        techStack: ["Python", "Agno", "Pandas", "PandasTool", "AI Agents", "Streamlit"],
        githubUrl: "https://github.com/MdEhtesham2004",
        liveUrl: null,
        featured: true,
        category: "AI Agents"
    },
    {
        id: 2,
        title: "Data Visualization Agent",
        description: "Created an autonomous visualization agent that generates custom charts and graphs based on user queries. Leverages E2B sandboxed execution environment for secure code execution, Together.AI for LLM capabilities, and Agno framework for orchestration. Built with Streamlit for an intuitive interface.",
        techStack: ["Python", "Agno", "E2B", "Together.AI", "Streamlit", "AI Agents"],
        githubUrl: "https://github.com/MdEhtesham2004",
        liveUrl: null,
        featured: true,
        category: "AI Agents"
    },
    {
        id: 3,
        title: "Intelligent Chatbot with Web Integration",
        description: "Developed an advanced chatbot powered by Grok 4.1 LLM with memory persistence and Model Context Protocol (MCP) servers for real-time web data fetching. Uses Agno framework for robust conversation management and multi-turn context retention.",
        techStack: ["Python", "Agno", "Grok 4.1", "MCP Servers", "Memory Tools", "Streamlit"],
        githubUrl: "https://github.com/MdEhtesham2004",
        liveUrl: null,
        featured: true,
        category: "AI Agents"
    },
    {
        id: 4,
        title: "PyLearn Portal - Training Management System",
        description: "Designed and developed a comprehensive Python training management platform as a trainer. Features student registration with admin approval, performance monitoring, project tracking, code evaluation, and separate dashboards for students and admins. Includes real-time statistics, assignment submission, and progress analytics.",
        techStack: ["Python", "Flask/Django", "PostgreSQL", "React", "Authentication", "Dashboard"],
        githubUrl: "https://github.com/MdEhtesham2004",
        liveUrl: null,
        featured: true,
        category: "Full-Stack Development"
    },
    {
        id: 5,
        title: "LinkedIn Content Automation Pipeline",
        description: "Built a complete end-to-end LinkedIn automation system using only free and open-source tools. Features Dockerized setup with n8n orchestration, Google Sheets content calendar, OpenRouter LLM for post generation, local Hugging Face Stable Diffusion for images, and LinkedIn API for automated posting. Runs daily with zero manual intervention.",
        techStack: ["Docker", "n8n", "OpenRouter", "Stable Diffusion", "LinkedIn API", "Google Sheets"],
        githubUrl: "https://github.com/MdEhtesham2004",
        liveUrl: null,
        featured: true,
        category: "Automation"
    },
    {
        id: 6,
        title: "Udhar Management System with Telegram Bot",
        description: "Created a fully automated credit management system for small retailers. Customers interact exclusively via Telegram for transactions, while admins use a React dashboard for management. Features real-time sync between Telegram and web UI, instant notifications, balance tracking, transaction history, analytics, and threshold-based payment reminders.",
        techStack: ["Telegram Bot", "n8n", "PostgreSQL", "React", "Tailwind CSS", "Docker", "ngrok"],
        githubUrl: "https://github.com/MdEhtesham2004",
        liveUrl: null,
        featured: true,
        category: "Automation"
    },
    {
        id: 7,
        title: "Sentiment Analysis System",
        description: "Developed a sentiment analysis application using NLTK for natural language processing. Analyzes text data to determine emotional tone and sentiment polarity with high accuracy.",
        techStack: ["Python", "NLTK", "NLP", "Text Analysis"],
        githubUrl: "https://github.com/MdEhtesham2004",
        liveUrl: null,
        featured: false,
        category: "Machine Learning"
    },
    {
        id: 8,
        title: "Automated ETL & Machine Learning Pipeline",
        description: "Developed a Streamlit-based automated ETL and ML pipeline handling dataset upload, preprocessing, feature engineering, model creation, and tracking. Implemented automatic problem type detection (Regression vs Classification) and one-click feature engineering and selection.",
        techStack: ["Python", "Pandas", "Scikit-learn", "Streamlit", "ML Automation"],
        githubUrl: "https://github.com/MdEhtesham2004",
        liveUrl: null,
        featured: false,
        category: "Machine Learning"
    },
    {
        id: 9,
        title: "Stock Price Prediction with CNN & GAF",
        description: "Built a CNN-based stock signal generator treating price charts as images using Gramian Angular Fields (GAF). Features ResNet-inspired architecture with PyTorch, real-time predictions via yfinance, interactive Streamlit dashboard with market scanner, and runtime training capabilities. Converts 30-day price windows to 64×64 images for visual pattern recognition achieving Buy/Hold/Sell classifications.",
        techStack: ["PyTorch", "CNN", "Gramian Angular Fields", "Streamlit", "yfinance", "Computer Vision", "Time Series"],
        githubUrl: "https://github.com/MdEhtesham2004",
        liveUrl: null,
        featured: true,
        category: "Deep Learning"
    },
    {
        id: 10,
        title: "Deep Fake Detection System",
        description: "Developed a prototype system to detect AI-generated deepfake images using a combination of Machine Learning, Deep Learning, and NLP techniques. Presented at Technocrats Elite 7.0 - National Level IT Exhibition and received cash prize for innovation and technical excellence.",
        techStack: ["Python", "Deep Learning", "Machine Learning", "NLP", "Computer Vision"],
        githubUrl: "https://github.com/MdEhtesham2004",
        liveUrl: null,
        featured: true,
        category: "Deep Learning"
    },
    {
        id: 11,
        title: "Loan Approval Prediction System",
        description: "Built an end-to-end machine learning pipeline for predicting loan approvals using both traditional ML models and PyCaret automation. Implemented feature engineering, feature selection, and model evaluation with rich visualizations to interpret model performance.",
        techStack: ["Python", "Scikit-learn", "PyCaret", "Pandas", "Matplotlib", "Seaborn"],
        githubUrl: "https://github.com/MdEhtesham2004",
        liveUrl: null,
        featured: false,
        category: "Machine Learning"
    },
    {
        id: 12,
        title: "Toyota Service Management Database",
        description: "Designed a Toyota service sector database using PostgreSQL, showcasing complete ER modeling, table relationships, and database normalization. Implemented advanced SQL techniques including Views, Stored Procedures, Joins, and Aggregations for business insights and reporting.",
        techStack: ["PostgreSQL", "SQL", "Database Design", "ER Modeling"],
        githubUrl: "https://github.com/MdEhtesham2004",
        liveUrl: null,
        featured: false,
        category: "Database"
    },
    {
        id: 13,
        title: "Exploratory Data Analysis Projects",
        description: "Performed in-depth EDA on multiple real-world datasets to identify patterns, trends, and correlations. Utilized Pandas, NumPy, Matplotlib, Seaborn, and Plotly for data cleaning, transformation, and interactive visualization.",
        techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly"],
        githubUrl: "https://github.com/MdEhtesham2004",
        liveUrl: null,
        featured: false,
        category: "Data Analysis"
    },
    {
        id: 14,
        title: "Snake Game",
        description: "Classic Snake Game project built with Python, demonstrating game development fundamentals and user interaction.",
        techStack: ["Python", "Game Development"],
        githubUrl: "https://github.com/MdEhtesham2004/Snake_Game",
        liveUrl: null,
        featured: false,
        category: "Python"
    },
    {
        id: 15,
        title: "Pushup Logger",
        description: "A user-friendly pushup logger application to motivate for pushup training, allowing users to track their pushups and monitor progress over time.",
        techStack: ["HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/MdEhtesham2004/Pushup-logger",
        liveUrl: null,
        featured: false,
        category: "Web Development"
    }
];

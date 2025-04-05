const formData = [
    {
        title: "What brings you to Skillista Course Booster?",
        subtitle: "Choose the best that describes you",
        questions: [
            { label: "I'm a Front End Enthusiast", value: "frontend" },
            { label: "I'm a Back End Enthusiast", value: "backend" },
            { label: "I'm a ML Enthusiast", value: "ml" },
            { label: "I'm a BlockChain Enthusiast", value: "blockchain" },
            { label: "I'm Exploring Different Domains", value: "exploring" },
        ],
    },
];

export const getNextQuestionSet = (firstAnswer) => {
    const stackOptions = {
        frontend: [
            { label: "React.js", value: "react" },
            { label: "Next.js", value: "nextjs" },
            { label: "Vue.js", value: "vue" },
        ],
        backend: [
            { label: "Node.js & Express", value: "node" },
            { label: "Java Spring Boot", value: "springboot" },
            { label: "Django", value: "django" },
        ],
        ml: [
            { label: "Machine Learning & AI", value: "ml" },
            { label: "Python & Data Science", value: "python" },
            { label: "Deep Learning", value: "deeplearning" },
        ],
        blockchain: [
            { label: "Solidity", value: "solidity" },
            { label: "Ethereum Smart Contracts", value: "eth" },
            { label: "Web3.js", value: "web3" },
        ],
        exploring: [
            { label: "Frontend", value: "frontend" },
            { label: "Backend", value: "backend" },
            { label: "Machine Learning", value: "ml" },
            { label: "Blockchain", value: "blockchain" },
        ],
    };

    return {
        title: "What tech stack would you like to learn?",
        subtitle: "Select the technologies you're interested in",
        questions: stackOptions[firstAnswer] || [],
    };
};

export const experienceForm = {
    title: "What is your experience level?",
    subtitle: "Choose the one that best describes you",
    questions: [
        { label: "Beginner", value: "beginner" },
        { label: "Intermediate", value: "intermediate" },
        { label: "Advanced", value: "advanced" },
        { label: "Professional", value: "professional" },
    ],
};

export default formData;

const formData = [
    {
        title: "What brings you to Skillista Course Booster?",
        subtitle: "Choose the best that describes you",
        questions: [
            { label: "I'm a Front End Enthusiast", value: "frontend" },
            { label: "I'm a Back End Enthusiast", value: "backend" },
            { label: "I'm a ML Enthusiast", value: "ml" },
            { label: "I'm a Full Stack Developer", value: "fullstack" }, 
            { label: "I'm Exploring Different Domains", value: "exploring" }, 
        ],
    },
    {
        title: "What tech stack would you like to learn?",
        subtitle: "Select the technologies you're interested in",
        questions: [
            { label: "React.js", value: "react" },
            { label: "Next.js", value: "nextjs" },
            { label: "Machine Learning & AI", value: "ml" },
            { label: "Python & Data Science", value: "python" },
            { label: "Node.js & Express", value: "node" },
            { label: "Java Spring Boot", value: "springboot" }, 
        ],
    },
    {
        title: "What is your experience level?",
        subtitle: "Choose the one that best describes you",
        questions: [
            { label: "Beginner", value: "beginner" },
            { label: "Intermediate", value: "intermediate" },
            { label: "Advanced", value: "advanced" },
            { label: "Professional", value: "professional" },
        ],
    },
];

export default formData;

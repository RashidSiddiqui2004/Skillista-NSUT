// This file creates a mapping from form fields to course tags
// We'll use this object to filter courses based on user responses

const formQ1 = {
    frontend: ['frontend', 'ui/ux', 'html', 'css', 'javascript'],
    backend: ['backend', 'api', 'database', 'nodejs', 'express'],
    ml: ['machinelearning', 'ml', 'ai', 'deeplearning'],
    blockchain: ['blockchain', 'web3', 'solidity', 'smartcontracts'],
    exploring: ['beginner', 'explore', 'techstack'],
};

const formQ2 = {
    react: ['react', 'reactjs', 'frontend', "webdev"],
    nextjs: ['nextjs', 'react', 'ssr', 'frontend'],
    ml: ['machinelearning', 'ml', 'ai', 'tensorflow'],
    python: ['python', 'datascience', 'pandas', 'numpy'],
    node: ['nodejs', 'express', 'backend', 'api'],
    springboot: ['springboot', 'java', 'backend', 'microservices'],
};

const FormTagsMap = { formQ1, formQ2 };

export default FormTagsMap; 

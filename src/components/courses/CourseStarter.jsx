import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import formData, { getNextQuestionSet, experienceForm } from "./FormData";

const CourseStarter = ({ handleFormSubmit }) => {
    const [formId, setFormId] = useState(0);
    const [formSteps, setFormSteps] = useState([...formData]);
    const [filledFormData, setFilledFormData] = useState({});

    const numberOfForms = formSteps.length;
    const isPreviousBtnDisabled = formId === 0;
    const isLastForm = (formId === numberOfForms - 1);

    const handleSelection = (value) => {
        const currentTitle = formSteps[formId].title;
        
        setFilledFormData((prev) => ({
            ...prev,
            [currentTitle]: value,
        }));

        if (formId === 0) {
            const nextForm = getNextQuestionSet(value);
            setFormSteps([formData[0], nextForm, experienceForm]);
        }
    };

    const handlePrev = () => {
        if (!isPreviousBtnDisabled) setFormId((prev) => prev - 1);
    };

    const handleNext = () => {
        if (!isLastForm) {
            setFormId((prev) => prev + 1);
        } else {
            handleFormSubmit(filledFormData);
        }
    };

    return (
        <div className="bg-white text-slate-900 mx-[20vw] p-5 py-[5vh] rounded-md text-left shadow-lg" id="courses">
            <h1 className="text-3xl font-semibold">{formSteps[formId].title}</h1>
            <h2 className="my-2 text-lg font-semibold text-slate-600">{formSteps[formId].subtitle}</h2>

            <AnimatePresence mode="wait">
                <motion.div
                    key={formId}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-4 items-start w-full"
                >
                    {formSteps[formId].questions.map((option) => (
                        <label
                            key={option.value}
                            className="flex items-center gap-3 cursor-pointer p-3 rounded-xl border-2
                            hover:bg-gray-100 hover:text-slate-800 transition-all w-full"
                        >
                            <input
                                type="radio"
                                name={`question-${formId}`}
                                value={option.value}
                                className="hidden peer"
                                checked={filledFormData[formSteps[formId].title] === option.value}
                                onChange={() => handleSelection(option.value)}
                            />
                            <div className="w-5 h-5 border-2 border-[#00FFFB] rounded-full flex items-center 
                                justify-center peer-checked:bg-[#00FFFB] peer-checked:border-transparent transition-all">
                                <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                            </div>
                            <span>{option.label}</span>
                        </label>
                    ))}
                </motion.div>
            </AnimatePresence>

            <div className="flex justify-between mt-6">
                <button
                    onClick={handlePrev}
                    disabled={isPreviousBtnDisabled}
                    className={`px-7 py-2 rounded-md border border-slate-400 font-semibold transition-all 
                    ${isPreviousBtnDisabled ? "cursor-not-allowed opacity-50" : "text-blue-400 hover:bg-blue-100"}`}
                >
                    Previous
                </button>

                <button
                    onClick={handleNext}
                    className={`px-7 py-2 rounded-md border border-slate-400 font-semibold transition-all 
                    ${isLastForm ? "bg-blue-500 text-white hover:bg-blue-600" : "text-blue-400 hover:bg-blue-100"}`}
                >
                    {isLastForm ? "Submit" : "Next"}
                </button>
            </div>
        </div>
    );
};

export default CourseStarter;

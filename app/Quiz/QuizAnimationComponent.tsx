
import React from "react";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import QuizAnimationStyledComponent from "./QuizAnimationStyledComponent";

interface QuizAnimationComponentProps {
    isCorrect: boolean;
}

const QuizAnimationComponent: React.FC<QuizAnimationComponentProps> = ({
                                                                           isCorrect,
                                                                       }) => {
    return (
        <>
            <QuizAnimationStyledComponent>
            {isCorrect ? (
                <motion.div
                    className="animation-container"
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                >
                    <FaCheck className="correct-icon" />
                </motion.div>
            ) : (
                <motion.div
                    className="animation-container"
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                >
                    <MdClose className="incorrect-icon" />
                </motion.div>
            )}
            </QuizAnimationStyledComponent>
        </>
    );
};

export default QuizAnimationComponent;

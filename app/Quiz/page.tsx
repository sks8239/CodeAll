'use client'
import React from "react";
import dynamic from "next/dynamic";
const QuizComponent = dynamic(()=> import('@/app/Quiz/QuizComponent'),{
    ssr: false
});
const QuizPages : React.FC = () => {


    return (
        <>
            <QuizComponent />
        </>
    );
};
export default QuizPages;
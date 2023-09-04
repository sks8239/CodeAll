'use client'
import React, { useState } from "react";
import {
    ProblemButton,
    ProblemButtonContainer,
    ResultStyledButtons2,
    ResultStyledQuestionCard,
    ResultStyledSection
} from "./ResultStyledComponent";
import { useSelector } from "react-redux";
import {Question} from "@/redux/features/quiz-slice";
import {RootState} from "@/redux/store";

const WholeQuestionComponent: React.FC = () => {
    const questions = useSelector((state: RootState) => state.quiz.questions);
    const answers = useSelector((state: RootState) => state.quiz.answers);
    console.log(questions);
    console.log(answers);

    const [showIncorrectQuestions, setShowIncorrectQuestions] = useState(false);
    const [showCorrectQuestions, setShowCorrectQuestions] = useState(false);

    const incorrectQuestions: Question[] = [];
    const correctQuestions: Question[] = [];

    questions.forEach((question) => {
        const selectedAnswer = answers.find((answer) => answer.questionId === question.questionsId);
        if (selectedAnswer?.answer !== question.correctAnswer) {
            incorrectQuestions.push(question);
        } else {
            correctQuestions.push(question);
        }
    });

    const sortByQuestionNumber = (a: Question, b: Question) => {
        const questionNumberA = questions.findIndex((question) => question === a);
        const questionNumberB = questions.findIndex((question) => question === b);
        return questionNumberA - questionNumberB;
    };

    const toggleIncorrectQuestions = () => {
        setShowIncorrectQuestions(!showIncorrectQuestions);
    };

    const toggleCorrectQuestions = () => {
        setShowCorrectQuestions(!showCorrectQuestions);
    };

    return (
        <>
            <ResultStyledButtons2>
                <ProblemButtonContainer>
                    <ProblemButton onClick={toggleIncorrectQuestions}>
                        {showIncorrectQuestions ? "틀린 문제 숨기기" : "틀린 문제 보기"}
                    </ProblemButton>
                </ProblemButtonContainer>
            </ResultStyledButtons2>
            {showIncorrectQuestions && (
                <ResultStyledSection>
                    <h1>틀린 문제</h1>
                    {incorrectQuestions.sort(sortByQuestionNumber).map((question, index) => {
                        // Find the selected answer for this question
                        const selectedAnswer = answers.find((answer) => answer.questionId === question.questionsId);
                        return (
                            <ResultStyledQuestionCard key={index}>
                                <h3>
                                    {index + 1}번 문제: {question.question}
                                </h3>
                                <p>보기: {question.choices.join(", ")}</p>
                                <p>정답: {question.correctAnswer}</p>
                                {/* Access the selected answer using questionId */}
                                <p>선택한 답: {selectedAnswer?.answer || "선택하지 않음"}</p>
                            </ResultStyledQuestionCard>
                        );
                    })}
                </ResultStyledSection>
            )}

            <ResultStyledButtons2>
                <ProblemButtonContainer>
                    <ProblemButton onClick={toggleCorrectQuestions}>
                        {showCorrectQuestions ? "맞춘 문제 숨기기" : "맞춘 문제 보기"}
                    </ProblemButton>
                </ProblemButtonContainer>
            </ResultStyledButtons2>
            {showCorrectQuestions && (
                <ResultStyledSection>
                    <h1>맞춘 문제</h1>
                    {correctQuestions.sort(sortByQuestionNumber).map((question, index) => {
                        // Find the selected answer for this question
                        const selectedAnswer = answers.find((answer) => answer.questionId === question.questionsId);
                        return (
                            <ResultStyledQuestionCard key={index}>
                                <h3>
                                    {index + 1}번 문제: {question.question}
                                </h3>
                                <p>보기: {question.choices.join(", ")}</p>
                                <p>정답: {question.correctAnswer}</p>
                                {/* Access the selected answer using questionId */}
                                <p>선택한 답: {selectedAnswer?.answer || "선택하지 않음"}</p>
                            </ResultStyledQuestionCard>
                        );
                    })}
                </ResultStyledSection>
            )}
        </>
    );
};

export default WholeQuestionComponent;

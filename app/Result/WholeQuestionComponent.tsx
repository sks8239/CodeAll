// WholeQuestionComponent.tsx
import React, { useState } from "react";
import {
    ProblemButton,
    ProblemButtonContainer,
    ResultStyledButtons2,
    ResultStyledQuestionCard,
    ResultStyledSection
} from "./ResultStyledComponent";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {Question} from "@/redux/features/quiz-slice";
import {RootState} from "@/redux/store";

const WholeQuestionComponent: React.FC = () => {
    const questions = useSelector((state: RootState) => state.quiz.questions);
    const answers = useSelector((state: RootState) => state.quiz.answers);
    const score = useSelector((state: RootState) => state.quiz.score);
    const navigate = useNavigate();

    const [showIncorrectQuestions, setShowIncorrectQuestions] = useState(false);
    const [showCorrectQuestions, setShowCorrectQuestions] = useState(false);
    console.log(answers);
    console.log(questions);
    const incorrectQuestions: Question[] = [];
    const correctQuestions: Question[] = [];
    questions.forEach((question, index) => {
        if (answers[index] !== question.correctAnswer) {
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
                    {incorrectQuestions.sort(sortByQuestionNumber).map((question, index) => (
                        <ResultStyledQuestionCard key={index}>
                            <h3>
                                {index + 1}번 문제: {question.question}
                            </h3>
                            <p>보기: {question.choices.join(", ")}</p>
                            <p>정답: {question.correctAnswer}</p>
                            <p>선택한 답: {answers[index]}</p>
                        </ResultStyledQuestionCard>
                    ))}
                </ResultStyledSection>
            )}

            <ResultStyledButtons2>
                <ProblemButtonContainer>
                    <ProblemButton onClick={toggleCorrectQuestions}>
                        {showIncorrectQuestions ? "맞춘 문제 숨기기" : "맞춘 문제 보기"}
                    </ProblemButton>
                </ProblemButtonContainer>
            </ResultStyledButtons2>
            {showCorrectQuestions && (
                <ResultStyledSection>
                    <h1>맞춘 문제</h1>
                    {correctQuestions.sort(sortByQuestionNumber).map((question, index) => (
                        <ResultStyledQuestionCard key={index}>
                            <h3>
                                {index + 1}번 문제: {question.question}
                            </h3>
                            <p>보기: {question.choices.join(", ")}</p>
                            <p>정답: {question.correctAnswer}</p>
                            <p>선택한 답: {answers[index]}</p>
                        </ResultStyledQuestionCard>
                    ))}
                </ResultStyledSection>
            )}
        </>
    );
};

export default WholeQuestionComponent;

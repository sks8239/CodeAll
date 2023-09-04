'use client'
import React from "react";
import {ResultStyledBox, ResultStyledButtons, ResultStyledContainer} from "./ResultStyledComponent";
import { useSelector } from "react-redux";
import {RootState, useAppSelector} from "@/redux/store";
import {useRouter} from "next/navigation";

const TotalScoreComponent: React.FC = () => {
    const router = useRouter()
    const score = useAppSelector((state: RootState) => state.quiz.score);
    const handleGoHome = () => {
        router.push("/");
    };

    const handleRestart = () => {
        router.push("/SelectLanguage");
    };

    return (
        <ResultStyledContainer>
        <ResultStyledBox>
            <h1>Result</h1>
            <h2>총점: {score}</h2>
            <ResultStyledButtons>
                <button onClick={handleGoHome}>홈으로</button>
                <button onClick={handleRestart}>다시하기</button>
            </ResultStyledButtons>
        </ResultStyledBox>
        </ResultStyledContainer>
    );
};

export default TotalScoreComponent;

'use client'
import React from "react";
import {LanguageButton, LanguageContainer, SelectLanguageContainer} from "../SelectLanguage/SelectLanguageStyle";
import axios from "axios";

import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/redux/store";
import {
    setActiveLanguage,
    setCurrentPage,
    setExampleComment,
    setInterviewIds,
    setLanguageContent
} from "@/redux/features/interview-slice";


// interface ButtonComponentProps {
//
// }

const InterviewButtonComponent: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const activeLanguage = useSelector(
        (state: RootState) => state.interview.activeLanguage
    );
    const handleButtonClick = async (languageId: string) => {
        try {
            const response = await axios.get(`inter-view?languageId=${languageId}`, {
                // headers: {
                //     Authorization: `Bearer ${sessionStorage.getItem("accessToken")}` // 인증 토큰을 포함하여 요청
                // }
            });
            const { data } = response;
            const interviewIds = data.map((item: any) => item.id);
            dispatch(setInterviewIds(interviewIds));
            const languageContents = data.map((item : any) => item.title);
            // const languageComments = data.map((item : any) => item.answer);
            const exampleComment = data.map((item : any) => item.answer);
            dispatch(setExampleComment(exampleComment));
            dispatch(setLanguageContent(languageContents));
            // dispatch(setLanguageComment(languageComments));
            // dispatch(setShowContent(true));
            dispatch(setActiveLanguage(languageId));
            dispatch(setCurrentPage(1)); // 언어 변경 시 현재 페이지를 1로 초기화
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <SelectLanguageContainer>
                <h2>Interview</h2>
            <LanguageContainer>
                <LanguageButton
                    onClick={() => handleButtonClick("C")}
                    className={activeLanguage === "C" ? "active" : ""}
                >
                    C
                </LanguageButton>
                <LanguageButton
                    onClick={() => handleButtonClick("NODE")}
                    className={activeLanguage === "NODE" ? "active" : ""}
                >
                    Node.js
                </LanguageButton>
                <LanguageButton
                    onClick={() => handleButtonClick("JAVA SCRIPT")}
                    className={activeLanguage === "JAVA SCRIPT" ? "active" : ""}
                >
                    JavaScript
                </LanguageButton>
                <LanguageButton
                    onClick={() => handleButtonClick("REACT")}
                    className={activeLanguage === "REACT" ? "active" : ""}
                >
                    React
                </LanguageButton>
                <LanguageButton
                    onClick={() => handleButtonClick("JAVA")}
                    className={activeLanguage === "JAVA" ? "active" : ""}
                >
                    Java
                </LanguageButton>
            </LanguageContainer>
            </SelectLanguageContainer>
        </>
    );
};

export default InterviewButtonComponent;

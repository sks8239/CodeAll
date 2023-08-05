// StudySelectLanguage.tsx

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Redux/RootReducer";
import axios from "axios";
import {LanguageButton, LanguageContainer, SelectLanguageContainer} from "../SelectLanguage/SelectLanguageStyle";
import {setLanguageData, setSelectedLanguage} from "@/redux/features/study-slice";

const StudySelectLanguage = () => {
    const selectedLanguage = useSelector((state: RootState) => state.study.selectedLanguage);
    const languageData = useSelector((state: RootState) => state.study.languageData);
    const dispatch = useDispatch();

    const handleButtonClick = async (language: string) => {
        if (languageData[language]) {
            dispatch(setSelectedLanguage(language));
            console.log("서버안다녀옴")
        } else {
            try {
                const response = await axios.get(`/study?language=${language}`);
                const content = response.data.map((item: any) => item.title);
                const answers = Object.values(response.data).map((item :any) => item.exDtoList.find((ex : any) => ex.id === item.answer));
                const answersId = answers.map((item : any) => item.id);
                const example = answers.map((item:any) => item.example);
                const explanations = response.data.map((item: any) => item.explanation);
                const studyIds = response.data.map((item:any) => item.id)
                dispatch(setSelectedLanguage(language));
                dispatch(setLanguageData(language, content, answersId, example, explanations, studyIds));
            } catch (error) {
                console.error("Error:", error);
            }
        }
    };

    return (
        <>
            <SelectLanguageContainer>
                <h2>Study</h2>
                <LanguageContainer>
                    <LanguageButton
                        onClick={() => handleButtonClick("C")}
                        className={selectedLanguage === "C" ? "active" : ""}
                    >
                        C
                    </LanguageButton>
                    <LanguageButton
                        onClick={() => handleButtonClick("NODE")}
                        className={selectedLanguage === "NODE" ? "active" : ""}
                    >
                        Node.js
                    </LanguageButton>
                    <LanguageButton
                        onClick={() => handleButtonClick("JAVA SCRIPT")}
                        className={selectedLanguage === "JAVA SCRIPT" ? "active" : ""}
                    >
                        JavaScript
                    </LanguageButton>
                    <LanguageButton
                        onClick={() => handleButtonClick("REACT")}
                        className={selectedLanguage === "REACT" ? "active" : ""}
                    >
                        React
                    </LanguageButton>
                    <LanguageButton
                        onClick={() => handleButtonClick("JAVA")}
                        className={selectedLanguage === "JAVA" ? "active" : ""}
                    >
                        Java
                    </LanguageButton>
                </LanguageContainer>
            </SelectLanguageContainer>
        </>
    );
};

export default StudySelectLanguage;

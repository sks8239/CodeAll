import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
    LanguageButton,
    LanguageContainer,
    SelectLanguageContainer,
} from "../SelectLanguage/SelectLanguageStyle";
import {setLanguageData, setSelectedLanguage} from "@/redux/features/study-slice";
import {RootState} from "@/redux/store";

const StudySelectLanguage = () => {
    const selectedLanguage = useSelector(
        (state: RootState) => state.study.selectedLanguage
    );
    const languageData = useSelector(
        (state: RootState) => state.study.languageData
    );
    const dispatch = useDispatch();
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setPage(0);
    }, [selectedLanguage]);

    const handleButtonClick = async (language: string) => {
        setPage(0);
        if (languageData[language]) {
            dispatch(setSelectedLanguage(language));

        } else {
            try {
                const response = await axios.get(
                    `/study?page=${page}&language=${language}`
                );
                const content = response.data.map((item: any) => item.title);
                const answers = Object.values(response.data).map((item: any) =>
                    item.exDtoList.find((ex: any) => ex.id === item.answer)
                );
                const answersId = answers.map((item: any) => item.id);
                const example = answers.map((item: any) => item.example);
                const explanations = response.data.map((item: any) => item.explanation);
                const studyIds = response.data.map((item: any) => item.id);

                setIsLoading(false);
                dispatch(setSelectedLanguage(language));
                dispatch(
                    setLanguageData(
                        language,
                        content,
                        answersId,
                        example,
                        explanations,
                        studyIds
                    )
                );
            } catch (error) {
                console.error("Error:", error);
                setIsLoading(false);
            }
        }
    };

    const handleScroll = () => {
        if(page===4) {
            return false;
        }
        const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 50) {
            if (!isLoading) {
                setIsLoading(true);
                setPage((prevPage) => prevPage + 1);
            }
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                if(page==0){
                    return false;
                }
                const response = await axios.get(
                    `/study?page=${page}&language=${selectedLanguage}`
                );
                const content = response.data.map((item: any) => item.title);
                const answers = Object.values(response.data).map((item: any) =>
                    item.exDtoList.find((ex: any) => ex.id === item.answer)
                );
                const answersId = answers.map((item: any) => item.id);
                const example = answers.map((item: any) => item.example);
                const explanations = response.data.map((item: any) => item.explanation);
                const studyIds = response.data.map((item: any) => item.id);

                setIsLoading(false);
                dispatch(setSelectedLanguage(selectedLanguage));
                dispatch(
                    setLanguageData(
                        selectedLanguage,
                        [...languageData[selectedLanguage].content,...content],
                        [...languageData[selectedLanguage].answers,...answersId],
                        [...languageData[selectedLanguage].example,...example],
                        [...languageData[selectedLanguage].explanations,...explanations],
                        [...languageData[selectedLanguage].studyIds,...studyIds]
                    )
                );
            } catch (error) {
                console.error("Error:", error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [selectedLanguage, page, dispatch]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

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
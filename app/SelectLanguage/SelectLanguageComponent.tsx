'use client'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    SelectLanguageContainer,
    LanguageContainer,
    LanguageButton,
    StartButton
} from './SelectLanguageStyle';
import axios from "axios";
import {resetScore, setQuestions} from "@/redux/features/quiz-slice";
import {AppDispatch, RootState, useAppSelector} from "@/redux/store";
import {useRouter} from "next/navigation";

const SelectLanguageComponent: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
    const router = useRouter()
    const accessToken = useAppSelector((state:RootState)=>state.login.accessToken)
    const handleLanguageSelect = (language: string) => {
        let updatedLanguages = [...selectedLanguages];

        if (updatedLanguages.includes(language)) {
            updatedLanguages = updatedLanguages.filter((lang) => lang !== language);
        } else {
            if (updatedLanguages.length > 2) {
                alert('최대 3개의 언어를 선택할 수 있습니다.');
            } else {
                updatedLanguages.push(language);
            }
        }
        setSelectedLanguages(updatedLanguages);
    };

    const handleSubmit = async (languageId: string) => {
        if (accessToken) {
            if (selectedLanguages.length === 0) {
                alert('적어도 한 가지 언어를 선택해야 합니다.');
            } else {
                try {
                    console.log(languageId);
                    dispatch(resetScore());
                    const response = await axios.get(`/quiz?language=${languageId}`, {
                        headers: {
                            Authorization: `Bearer ${accessToken}` // 인증 토큰을 포함하여 요청
                        }
                    });
                    console.log(response);

                    const questions = response.data.map((item: any) => {
                        const answersAndId = item.exDtoList.find((ex : any) => ex.id === item.answer)
                        const questionsId = item.id;
                        return {
                            question: item.title,
                            choices: item.exDtoList.map((ex: any) => ex.example),
                            correctAnswer: answersAndId.example,
                            questionsId : item.id,
                        };
                    });

                    dispatch(setQuestions(questions));

                    router.push('/Quiz');
                } catch (error) {
                    console.error('서버 요청 실패:', error);
                }
            }
        }
        else {
            alert("로그인 후 이용해주세요");
        }
    };

    return (
        <>
            <SelectLanguageContainer>
                <h2>언어 선택</h2>
                <LanguageContainer>
                    <LanguageButton
                        className={selectedLanguages.includes('C') ? 'selected' : ''}
                        onClick={() => handleLanguageSelect('C')}
                    >
                        C
                    </LanguageButton>
                    <LanguageButton
                        className={selectedLanguages.includes('NODE') ? 'selected' : ''}
                        onClick={() => handleLanguageSelect('NODE')}
                    >
                        Node.js
                    </LanguageButton>
                    <LanguageButton
                        className={selectedLanguages.includes('JAVA SCRIPT') ? 'selected' : ''}
                        onClick={() => handleLanguageSelect('JAVA SCRIPT')}
                    >
                        JavaScript
                    </LanguageButton>
                    <LanguageButton
                        className={selectedLanguages.includes('REACT') ? 'selected' : ''}
                        onClick={() => handleLanguageSelect('REACT')}
                    >
                        React
                    </LanguageButton>
                    <LanguageButton
                        className={selectedLanguages.includes('JAVA') ? 'selected' : ''}
                        onClick={() => handleLanguageSelect('JAVA')}
                    >
                        Java
                    </LanguageButton>
                </LanguageContainer>
            </SelectLanguageContainer>
            <StartButton onClick={() => handleSubmit(selectedLanguages[0])}>시작하기</StartButton>
        </>
    );
};

export default SelectLanguageComponent;

'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import StyledButton from './StyledButton';

const QuizButton: React.FC = () => {
    const router = useRouter();

    const handleButtonClick = () => {
        router.push('/SelectLanguage');
    };

    return (
        <StyledButton onClick={handleButtonClick}>
            퀴즈풀기
            <div className="hover-content">퀴즈를 풀고 개인 랭크를 획득하세요</div>
        </StyledButton>
    );
};

export default QuizButton;

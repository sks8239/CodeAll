'use client'
import React from 'react'
import StyledButton from './StyledButton';
import {useRouter} from "next/navigation";

const StudyButton: React.FC = () => {
    const router = useRouter();

    const handleButtonClick = () => {
        router.push('/Study');
    };

    return (
        <StyledButton onClick={handleButtonClick}>
            공부하기
            <div className="hover-content">다양한 언어를 공부해보세요</div>
        </StyledButton>
    );
};

export default StudyButton;

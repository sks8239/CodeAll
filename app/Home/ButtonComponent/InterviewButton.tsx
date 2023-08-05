// QuizButton.tsx
import React from 'react';
import StyledButton from '../../FunctionSelect/StyledButton';
import {useRouter} from "next/router";

const InterViewButton: React.FC = () => {
    const router = useRouter();

    const handleButtonClick = () => {
        router.push('/Interview');
    };

    return (
        <StyledButton onClick={handleButtonClick}>
            면접준비
            <div className="hover-content">다양한 질문에 답하고<br/>의견을 공유해보세요</div>
        </StyledButton>
    );
};

export default InterViewButton;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/RootReducer";
import { InterviewWrapper } from "../Interview/InterviewStyledComponent";
import { ChatText, ChatDots } from "react-bootstrap-icons";

const StudyComponents: React.FC = () => {
    const selectedLanguage = useSelector(
        (state: RootState) => state.study.selectedLanguage
    );
    const languageData = useSelector(
        (state: RootState) => state.study.languageData
    );
    const content = languageData[selectedLanguage]?.content || [];
    const example = languageData[selectedLanguage]?.example || [];
    const explanations = languageData[selectedLanguage]?.explanations || [];
    const studyIds = languageData[selectedLanguage]?.studyIds || [];

    const [showContent, setShowContent] = useState<boolean[]>([]);

    const handleToggleContent = (index: number) => {
        setShowContent((prevShowContent) => {
            const updatedShowContent = [...prevShowContent];
            updatedShowContent[index] = !updatedShowContent[index];
            return updatedShowContent;
        });
    };

    return (
        <InterviewWrapper>
            {content.map((item, index) => (
                <div key={studyIds[index]}>
                    <div className="interview-question">
                        <p className="question-Title">{index+1}. {item}</p>
                        <button
                            className="toggle-button"
                            onClick={() => handleToggleContent(index)}
                        >
                            {showContent[index] ? <ChatText /> : <ChatDots />}
                        </button>
                    </div>
                    {showContent[index] && (
                        <div className="answer-comments-container">
                            <p>Answers: {example[index]}</p>
                            <p>Explanation: {explanations[index]}</p>
                        </div>
                    )}
                </div>
            ))}
        </InterviewWrapper>
    );
};

export default StudyComponents;

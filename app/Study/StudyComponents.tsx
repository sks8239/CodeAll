import React, { useState } from "react";
import { useSelector } from "react-redux";
import { InterviewWrapper } from "../Interview/InterviewStyledComponent";
import {ChatText, ChatDots, PinAngleFill, Heart} from "react-bootstrap-icons";
import {RootState} from "@/redux/store";

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
    console.log(languageData)
    const handleToggleContent = (index: number) => {
        setShowContent((prevShowContent) => {
            const updatedShowContent = [...prevShowContent];
            updatedShowContent[index] = !updatedShowContent[index];
            return updatedShowContent;
        });
    };

    const handleLikeClick=(studyId: any) =>{
        console.log(studyId + " 번 좋아요 눌림")
    }

    return (
        <InterviewWrapper>
            {content.map((item, index) => (
                <div className="interview-question">
                    <PinAngleFill
                        style={{
                            color: "#965A00",
                            position: "absolute",
                            top: "-5%",
                            left: "0%",
                            fontSize: "70px",
                            transform: "rotate(-75deg)",
                            zIndex: 50,
                        }}
                    />
                    <p className="question-Title">{index+1}. {item}</p>
                    <div className="buttons-container">
                        <button
                            className="toggle-button"
                            onClick={() => handleToggleContent(index)}
                        >
                            {showContent[index] ? <ChatText /> : <ChatDots />}
                        </button>
                        <button className="like-cnt"
                                onClick={()=>handleLikeClick(studyIds[index])}
                        >
                            <Heart />
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

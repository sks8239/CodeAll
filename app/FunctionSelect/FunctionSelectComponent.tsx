import React from 'react';
import { BoxWrapper, BoxContent, GroupWrapper, ImageWrapper, ButtonWrapper } from './SelectPagesStyle';
import StudyButton from './StudyButton';
import QuizButton from './QuizButton';
import InterviewButton from '../Interview/InterviewButtonComponent';
import Image from 'next/image'; // Import the NextImage component
import studyImage from "../../../public/studyImage.png";
import quizImage from "../../../public/quizImage.png";
import interviewImage from "../../../public/interviewImage.png";

const FunctionSelectPage: React.FC = () => {
    return (
        <div>
            <section>
                <BoxWrapper>
                    <BoxContent>
                        <GroupWrapper>
                            <ImageWrapper>
                                <Image src={studyImage} alt="Study Image" width={300} height={300} /> {/* Use NextImage component */}
                                <div className="hover-content">
                                    C언어, Node.js, JavaScript, React, Java 등<br/>
                                    다양한 언어를 <br/>
                                    학습해보세요.
                                </div>
                            </ImageWrapper>
                            <ButtonWrapper>
                                <StudyButton />
                            </ButtonWrapper>
                        </GroupWrapper>
                        <GroupWrapper>
                            <ImageWrapper>
                                <Image src={quizImage} alt="Quiz Image" width={300} height={300} /> {/* Use NextImage component */}
                                <div className="hover-content">
                                    퀴즈를 통해<br/> 실력을 파악하세요
                                </div>
                            </ImageWrapper>
                            <ButtonWrapper>
                                <QuizButton />
                            </ButtonWrapper>
                        </GroupWrapper>
                        <GroupWrapper>
                            <ImageWrapper>
                                <Image src={interviewImage} alt="Interview Image" width={300} height={300} /> {/* Use NextImage component */}
                                <div className="hover-content">
                                    다양한 면접 질문을 통해<br/> 면접을 대비해보세요
                                </div>
                            </ImageWrapper>
                            <ButtonWrapper>
                                <InterviewButton />
                            </ButtonWrapper>
                        </GroupWrapper>
                    </BoxContent>
                </BoxWrapper>
            </section>
        </div>
    );
};

export default FunctionSelectPage;

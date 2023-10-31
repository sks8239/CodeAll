import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LazyLoadedSection from "../../utils/LazyLoadedSection";
import { Section3Wrapper } from "../HomeStyleComponent/SectionWrapper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import school2 from "@/public/quizwrong.png";
import quiz from "@/public/quiz12.png";
import Image from 'next/image';
import rankQuiz from "@/public/rankQuiz.png";

const Section3 = () => {
    const [cycle, setCycle] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCycle((prevCycle) => (prevCycle % 3) + 1);
        }, 3000); // 3초

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <LazyLoadedSection backgroundColor="#F4F7FC">
                <Section3Wrapper>
                    {cycle === 1 && (
                        <>
                            <div className="section3head">여러 언어퀴즈를 풀고<br/> 점수를 획득하세요</div>
                            <div className="cycle1-container">
                                <Image
                                    src={quiz}
                                    alt="Rankget"
                                    className="rankget"
                                    quality={100} // 이미지 품질 설정 (1-100 사이)
                                    loading="lazy" // 레이지 로딩 설정
                                />
                            </div>
                        </>
                    )}
                    {cycle === 2 && (
                        <>
                            <div className="cycle2head">틀린 문제와 맞춘 문제를 확인하세요</div>
                            <div className="cycle2-container">
                                <Image
                                    src={school2}
                                    alt="School2"
                                    quality={100}
                                    className = "school2"
                                    // layout="responsive" // 레이지 로딩과 함께 이미지가 로드되도록 설정합니다.
                                />
                            </div>
                        </>
                    )}
                    {cycle === 3 && (
                        <>
                            <div className="cycle3head">획득한 점수로 순위에 도전하세요</div>
                            <div className="cycle3-container">
                                <Image
                                    src={rankQuiz}
                                    alt="rankQuiz"
                                    quality={100}
                                    className = "rankQuiz"
                                    // layout="responsive" // 레이지 로딩과 함께 이미지가 로드되도록 설정합니다.
                                />
                            </div>
                        </>
                    )}
                </Section3Wrapper>
            </LazyLoadedSection>
        </>
    );
};

export default Section3;
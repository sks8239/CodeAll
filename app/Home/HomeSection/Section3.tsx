import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LazyLoadedSection from "../../utils/LazyLoadedSection";
import { Section3Wrapper } from "../HomeStyleComponent/SectionWrapper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import school1 from "@/public/school1.png";
import school2 from "@/public/school2.png";
import vsImage from "@/public/vsImage.png";
import rankget from "@/public/rankget.png";
import Image from 'next/image';

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
                            <div className="section3head">퀴즈를 통해 랭크를 획득하고<br /></div>
                            <div className="cycle1-container">
                                <Image
                                    src={rankget}
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
                            <div className="cycle2head">다른학교와 대결까지!</div>
                            <div className="cycle2-container">
                                <Image
                                    src={school1}
                                    alt="School1"
                                    className="school1"
                                    // layout="responsive" // 레이지 로딩과 함께 이미지가 로드되도록 설정합니다.
                                />
                                <Image
                                    src={vsImage}
                                    alt="VS"
                                    className="vsImage"
                                    // layout="responsive" // 레이지 로딩과 함께 이미지가 로드되도록 설정합니다.
                                />
                                <Image
                                    src={school2}
                                    alt="School2"
                                    className = "school2"
                                    // layout="responsive" // 레이지 로딩과 함께 이미지가 로드되도록 설정합니다.
                                />
                            </div>
                        </>
                    )}
                    {cycle === 3 && (
                        <>
                            <div className="cycle3head">지금 퀴즈웹에서 재미와 경쟁의 세계를 경험해보세요!</div>
                        </>
                    )}
                </Section3Wrapper>
            </LazyLoadedSection>
        </>
    );
};

export default Section3;
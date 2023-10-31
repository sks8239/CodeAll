'use client'
import LazyLoadedSection from "../../utils/LazyLoadedSection";
import {Section4Wrapper} from "../HomeStyleComponent/SectionWrapper";
import React from "react";
import school2 from "@/public/interviewImage2.png";
import Image from "next/image";

const Section4 = () => {

    return(
        <>
            <LazyLoadedSection backgroundColor="white">
                <Section4Wrapper>
                    <h1>Interview
                        <ul>
                            <li>예시 답안 제공</li>
                            <li>댓글을 통해 의견을 주고 받으세요</li>
                            <li>맘에 드는 문제에는 좋아요버튼 꾹!</li>
                        </ul>
                    </h1>
                    <div className="interviewImage">
                    <Image
                        src={school2}
                        alt="School2"
                        className = "school2"
                        width="800"
                        // layout="responsive" // 레이지 로딩과 함께 이미지가 로드되도록 설정합니다.
                    />
                    </div>

                </Section4Wrapper>
            </LazyLoadedSection>
        </>
    )
}
export default Section4;
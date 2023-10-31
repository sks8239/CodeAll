'use client'
import LazyLoadedSection from "../../utils/LazyLoadedSection";
import {Section1Wrapper, Section2Wrapper} from "../HomeStyleComponent/SectionWrapper";
import React from "react";
import rankget from "@/public/monitorImage.png";
import Image from "next/image";

const Section2 = () => {

    return(
        <>
            <LazyLoadedSection >
                <Section2Wrapper>
                    <div className="section2head"><br/>다양한 언어를<br/>한번에, CodeAll에서</div>
                    <div className="monitorImage">
                    <Image
                        src={rankget}
                        alt="Rankget"
                        className="rankget"
                        quality={100} // 이미지 품질 설정 (1-100 사이)
                        loading="lazy" // 레이지 로딩 설정
                    />
                    </div>
                </Section2Wrapper>
            </LazyLoadedSection>
        </>
    )
}
export default Section2;
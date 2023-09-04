'use client'
import {Section1Wrapper} from "../HomeStyleComponent/SectionWrapper";
import {ButtonWrapper, DownloadButtonStyle} from "../HomeStyleComponent/ButtonWrapper";
import {Download} from "react-bootstrap-icons";
import WebButton from "../ButtonComponent/WebButton";
import React, {useRef} from "react";

const Section1 = () => {

    const section2Ref = useRef<HTMLDivElement | null>(null);

    const scrollToSection = () => {
        const section2Element = document.getElementById("section2");
        if (section2Element) {
            section2Element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <>
            {/*<LazyLoadedSection backgroundColor="white">*/}
                <Section1Wrapper>
                    <h1>퀴즈부터 공부, 면접까지 한번에!<br/>코딩 학습 플랫폼, 코드올</h1>
                    <ButtonWrapper>
                        <DownloadButtonStyle><p><Download className="download-icon"/> 앱 다운로드</p></DownloadButtonStyle>
                        <WebButton>웹에서 이용하기</WebButton>
                    </ButtonWrapper>
                    <button className="scroll-to-section2" onClick={scrollToSection}>
                        ▽
                    </button>
                </Section1Wrapper>
            {/*</LazyLoadedSection>*/}
            <div id="section2" ref={section2Ref} />
        </>
    )
}
export default Section1;

import LazyLoadedSection from "../../utils/LazyLoadedSection";
import {Section1Wrapper, Section2Wrapper} from "../HomeStyleComponent/SectionWrapper";
import React from "react";

const Section2 = () => {

    return(
        <>
            <LazyLoadedSection >
                <Section2Wrapper>
                    <div className="section2head"><br/>다양한 언어를<br/>한번에, CodeAll에서</div>
                </Section2Wrapper>
            </LazyLoadedSection>
        </>
    )
}
export default Section2;
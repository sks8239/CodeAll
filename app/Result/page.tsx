import React from "react";
import WholeQuestionComponent from "@/app/Result/WholeQuestionComponent";
import TotalScoreComponent from "@/app/Result/TotalScoreComponent";

const ResultPage = () => {


    return (
        <>
            <TotalScoreComponent/>
            <WholeQuestionComponent/>
        </>
    )
}
export default ResultPage;
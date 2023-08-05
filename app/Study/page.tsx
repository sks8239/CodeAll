import React, {SetStateAction, useState} from "react";
import axios from "axios";
import StudyComponents from "@/app/Study/StudyComponents";
import StudySelectLanguageComponent from "@/app/Study/StudySelectLanguageComponent";


const Study = () => {

    return (
        <>
            <StudySelectLanguageComponent/>
            <StudyComponents/>
        </>
    );
};

export default Study;
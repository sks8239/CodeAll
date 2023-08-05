'use client'
import React, {useEffect, useState} from "react";
import InterviewButtonComponent from "@/app/Interview/InterviewButtonComponent";
import InterviewPaginationComponent from "@/app/Interview/InterviewPaginationComponent";
import ContentComponent from "@/app/Interview/InterviewContentComponent";



const Interview = () => {


    return (
        <>
            <InterviewButtonComponent/>

            <ContentComponent/>

            <InterviewPaginationComponent/>
        </>
    );
};

export default Interview;

'use client'
import React, { useEffect, useRef } from 'react';
import Section1 from "@/app/Home/HomeSection/Section1";
import Section3 from "@/app/Home/HomeSection/Section3";
import Section4 from "@/app/Home/HomeSection/Section4";
import Section2 from "@/app/Home/HomeSection/Section2";


const Page: React.FC = () => {


    // useEffect(() => {
    //     restoreScrollPosition();
    //
    //     const handleBeforeUnload = () => {
    //         saveScrollPosition();
    //     };
    //
    //     window.addEventListener('beforeunload', handleBeforeUnload);
    //
    //     return () => {
    //         window.removeEventListener('beforeunload', handleBeforeUnload);
    //     };
    // }, []);

    return (
        <div>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
        </div>
    );
};

export default Page;

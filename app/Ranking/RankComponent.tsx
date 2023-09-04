'use client'
import React, { useState, useEffect } from "react";
import SchoolRankView from "./SchoolRankViewComponent";
import IndividualRankView from "./IndividualRankViewComponent";
import Header from "../Header/Header";
import { RankButton, RankButtonContainer } from "./RankStyledComponent";
import axios from "axios";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/redux/store";
import {setIndividualRank} from "@/redux/features/individualRank-slice";

const RankComponent: React.FC = () => {
    const [showIndividualRank, setShowIndividualRank] = useState(false);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch<AppDispatch>();
    const handleShowIndividualRank = () => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/rating/member");
                console.log(response);
                const uniqueData = Array.from(new Set(response.data.map((item: any) => item.userName)))
                    .map((userName: any) => {
                        return response.data.find((item: any) => item.userName === userName);
                    });
                const sortedData = uniqueData.sort((a: any, b: any) => b.score - a.score);
                dispatch(setIndividualRank(sortedData));
                setLoading(false);
            } catch (error) {
                console.error("개인랭크 가져오기 실패", error);
                setLoading(false);
            }
        };

        fetchData();
        setShowIndividualRank(true);

    }
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get("/rating/member");
    //             console.log(response);
    //             const sortedData = response.data.sort((a:any, b:any ) => b.score - a.score);
    //             dispatch(setIndividualRank(sortedData));
    //             setLoading(false);
    //         } catch (error) {
    //             console.error("개인랭크 가져오기 실패", error);
    //             setLoading(false);
    //         }
    //     };
    //     fetchData();
    //     setShowIndividualRank(true);
    // };

    const handleShowSchoolRank = () => {
        setShowIndividualRank(false);
    };

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get("/rating/univ");
    //             console.log(response);
    //             dispatch(setUniversityRank(response.data));
    //             setLoading(false);
    //         } catch (error) {
    //             console.error("대학정보 가져오기 실패", error);
    //             setLoading(false);
    //         }
    //     };
    //     fetchData();
    // }, []);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get("/rating/univ");
    //             console.log(response);
    //             const univData = Array.from(new Set(response.data.map((item: any) => item.univName)))
    //                 .map((univName: any) => {
    //                     return response.data.find((item: any) => item.univName === univName);
    //                 });
    //             dispatch(setUniversityRank(univData));
    //             setLoading(false);
    //         } catch (error) {
    //             console.error("대학정보 가져오기 실패", error);
    //             setLoading(false);
    //         }
    //     };
    //     fetchData();
    // }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/rating/univ");
                console.log(response);
                const univData = response.data;
                const uniqueNames = Array.from(new Set(univData.map((item:any) => item.univName)));

                const conflict: string[] = [];

                univData.forEach((item: any) => {
                    if (uniqueNames.includes(item.univName)) {
                        uniqueNames.splice(uniqueNames.indexOf(item.univName), 1);
                    } else {
                        conflict.push(item.univName);
                    }
                });

                console.log(conflict);

                setLoading(false);
            } catch (error) {
                console.error("대학정보 가져오기 실패", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // 로딩 상태를 표시하는 컴포넌트 또는 로딩 스피너를 표시할 수 있습니다.
    }

    return (
        <>
            <Header />

            <RankButtonContainer>
                <RankButton
                    onClick={handleShowSchoolRank}
                    className={!showIndividualRank ? "active" : ""}
                >
                    학교 랭크 보기
                </RankButton>

                <RankButton
                    onClick={handleShowIndividualRank}
                    className={showIndividualRank ? "active" : ""}
                >
                    개인 랭크 보기
                </RankButton>

            </RankButtonContainer>

            {showIndividualRank ? (
                <IndividualRankView/>
            ) : (
                <SchoolRankView/>
            )}
        </>
    );
};

export default RankComponent;

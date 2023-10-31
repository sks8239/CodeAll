'use client'
import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import axios from "axios";
import MypageStyledComponent from "./MypageStyledComponent";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";

const MypageComponent: React.FC = () => {
    const [userData, setUserData] = useState<any>(null);
    const [newNickname, setNewNickname] = useState<string>("");
    const accessToken = useSelector((state:RootState)=>state.login.accessToken)
    useEffect(() => {
        myData();
    }, []);

    const myData = async () => {
        try {
            const response = await axios.get(`/my-page/my-info`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            console.log(response);
            const userData = {
                gradeId: response.data.gradeId,
                memberEmail: response.data.memberEmail,
                memberNickName: response.data.memberNickName,
                memberPwd: "",
                memberRealName: response.data.memberRealName,
                phone: response.data.phone,
                score: response.data.score,
            };
            setUserData(userData);
            setNewNickname(response.data.memberNickName);
        } catch (error) {
            console.error("내정보 가져오기 실패", error);
        }
    };


    const handleNicknameChange = async () => {
        try {
            const response = await axios.get(`/my-page/nick-name/${newNickname}`, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
                },
            });
            console.log(response);
        } catch (error: any) {
            if (error.response && error.response.status === 409) {
                alert("중복된 닉네임입니다.");
            } else {
                console.error("닉네임 변경 요청 실패", error);
            }
        }
    };



    const handleNicknameInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewNickname(event.target.value);
    };

    return (
        <>
            <Header />
            <MypageStyledComponent>
                {userData && (
                    <div>
                        <h2>내 정보</h2>
                        <div className="item2">
                            email<br/>
                            <input
                                className="input"
                                name="email"
                                value={userData.memberEmail}
                            />
                        </div>
                        <div className="item2">
                            nickName<br/>
                            <input
                                className="input"
                                placeholder={userData.memberNickName}
                                value={newNickname}
                                onChange={handleNicknameInputChange}
                            />
                            <button className="enable_button" onClick={handleNicknameChange}>
                                닉네임 변경
                            </button>
                        </div>
                        <div className="item2">
                            password<br/>
                            <input
                                className="input"
                                placeholder="****"
                                name="Pwd"
                                value={userData.memberPwd}
                            />
                            <button className="enable_button2" onClick={handleNicknameChange}>
                                비밀번호 변경
                            </button>
                        </div>
                        <div className="item2">
                            Name <br/>
                            <input
                                className="input"
                                name="Name"
                                value={userData.memberRealName}
                            />
                        </div>
                        <div className="item2">
                            Phone <br/>
                            <input
                                className="input"
                                name="phone"
                                value={userData.phone}
                            />
                        </div>
                        <div className="item2">
                            Score <br/>
                            <input
                                className="input"
                                name="score"
                                value={userData.score}
                            />
                        </div>
                    </div>
                )}
            </MypageStyledComponent>
        </>
    );
};

export default MypageComponent;

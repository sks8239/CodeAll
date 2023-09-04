'use client'
import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";

import Link from 'next/link';
import LoginWrapper from "./LoginStyledComponent";
import axios from "axios";
import {useRouter} from "next/navigation";
import {AppDispatch, RootState, useAppSelector} from "@/redux/store";

const CodeAllLogin: React.FC = () => {
    const router = useRouter();
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");
    const dispatch = useDispatch<AppDispatch>();
    const { isLoading, error } = useAppSelector((state: RootState) => state.login);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "id") {
            setInputId(value);
        } else if (name === "password") {
            setInputPw(value);
        }
    };

    const loginUser = async (userData: { email: string; pwd: string }) => {
        dispatch({ type: "LOGIN_USER" });
        console.log(userData)
        try {
            const response = await axios.post("auth/login", userData);
            console.log(response.data);
            // 로그인 성공
            dispatch({
                type: "LOGIN_USER_SUCCESS",
                payload: {
                    accessToken: response.data.accessToken,
                    refreshToken: response.data.refreshToken,
                    currentUserNickName : response.data.memberNickName
                },
            });
            router.push('/')
            // window.location.href = '/';
        } catch (error) {
            console.error(error);
            // 로그인 실패
            dispatch({
                type: "LOGIN_USER_FAILURE",
                payload: "로그인 실패 메시지",
            });
        }
    };
// console.log(useAppSelector((state)=>state.login.accessToken))
    const handleLogin = () => {
        const userData = {
            email: inputId,
            pwd: inputPw,
        };
        loginUser(userData);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleLogin();
        }
    };

    return (
        <LoginWrapper>
            <div className="Login">
                <span>Login</span>
            </div>
            <input
                type="text"
                name="id"
                value={inputId}
                onChange={handleInputChange}
                placeholder="아이디"
            />
            <input
                type="password"
                name="password"
                value={inputPw}
                onChange={handleInputChange}
                placeholder="패스워드"
                onKeyDown={handleKeyPress}
            />
            <button onClick={handleLogin} disabled={isLoading}>
                로그인
            </button>
            {error && <div className="error">{error}</div>}
            <Link href="/SignUp">
            <button>회원가입</button>
            </Link>
        </LoginWrapper>
    );
};

export default CodeAllLogin;


import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {HeaderWrapper, Li, Nav, NavLink, Ul} from "@/app/Header/HeaderStyledComponent";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState, useAppSelector} from "@/redux/store";


const Header: React.FC = () => {
    const [isscrolled, setIsscrolled] = useState<string>("false");
    const accessToken = useSelector((state:RootState)=>state.login.accessToken)
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        window.location.href = '/Login';
    };

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0){
                setIsscrolled("true");
            }
            if(window.scrollY===0){
                setIsscrolled("false");
            }

        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <HeaderWrapper $isscrolled={isscrolled}>
            <Nav>
                <Ul>
                    <Li>
                        <Link href="/">
                            <NavLink $isscrolled={isscrolled}>CodeAll</NavLink>
                        </Link>
                    </Li>
                    <Li>
                        <Link href="/Study">
                            <NavLink $isscrolled={isscrolled}>공부하기</NavLink>
                        </Link>
                    </Li>
                    <Li>
                        <Link href="/SelectLanguage">
                            <NavLink $isscrolled={isscrolled}>퀴즈풀기</NavLink>
                        </Link>
                    </Li>
                    <Li>
                        <Link href="/Interview">
                            <NavLink $isscrolled={isscrolled}>면접준비</NavLink>
                        </Link>
                    </Li>
                    <Li>
                        <Link href="/Ranking">
                            <NavLink $isscrolled={isscrolled}>랭킹보기</NavLink>
                        </Link>
                    </Li>
                </Ul>
                {accessToken ? (
                    <>
                        <Link href="/MyPage">
                            <NavLink $isscrolled={isscrolled}>Mypage</NavLink>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link href="/SignUp">
                            <NavLink $isscrolled={isscrolled}>SignUp</NavLink>
                        </Link>
                    </>
                )}
                {accessToken ? (
                    <>
                        <NavLink onClick={handleLogout} $isscrolled={isscrolled}>
                            Logout
                        </NavLink>
                    </>
                ) : (
                    <Link href="/Login">
                        <NavLink $isscrolled={isscrolled}>Login</NavLink>
                    </Link>
                )}
            </Nav>
        </HeaderWrapper>
    );
};

export default Header;

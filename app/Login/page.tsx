'use client'
import React, { useState } from 'react';
import dynamic from "next/dynamic";
const Login = dynamic(()=> import('./Login') ,{ssr:false})



const LoginPage : React.FC  = () =>{


    return(
        <>
            <Login/>
        </>
    )
};

export default LoginPage;
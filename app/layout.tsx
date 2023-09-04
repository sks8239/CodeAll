'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {ReduxProvider} from "@/redux/provider";
import React from "react";
import dynamic from "next/dynamic";
import {RootState, useAppSelector} from "@/redux/store";
import StyledComponentsRegistry from "@/app/registry";
const inter = Inter({ subsets: ['latin'] })

const Header = dynamic(()=>import('@/app/Header/Header'), { loading: () => <p>Loading...</p>, preload: true , SSR : false})
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <ReduxProvider>
      <html>
      <StyledComponentsRegistry>
      <head>
        <title>Next.js 공부중</title>
      </head>

      <body>
      <nav><Header/></nav>
      {children}
      </body>
      </StyledComponentsRegistry>
      </html>
      </ReduxProvider>
  )
}

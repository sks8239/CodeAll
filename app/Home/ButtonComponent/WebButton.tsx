import React, { ReactNode } from 'react';
import Link from 'next/link';
import { WebButtonStyle } from "../HomeStyleComponent/ButtonWrapper";

interface WebButtonProps {
    children: ReactNode;
}

const WebButton: React.FC<WebButtonProps> = ({ children }) => {
    return (
        <Link href="/FunctionSelect">
            <WebButtonStyle>
                {children}
            </WebButtonStyle>
        </Link>
    );
};

export default WebButton;

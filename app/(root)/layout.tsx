import { Metadata } from 'next'
import React from 'react'
import Nabvar from '../compontents/nabvar/Nabvar'
import AuthSession from '../HOC/AuthSession'
import { Session } from 'next-auth'

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

interface LayoutProps {
    children: React.ReactNode;
    session: Session;
}

export default function Layout({ children, session }: LayoutProps) {
    return (
        <AuthSession session={session}>
            <Nabvar />
            {children}
        </AuthSession>
    )
}

'use client'
import React from 'react'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'

const AuthSession = ({ children, session }: { children: React.ReactNode, session: Session }) => {
    console.log(session)
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}

export default AuthSession
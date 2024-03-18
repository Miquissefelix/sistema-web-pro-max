"use client"
import './globals.css' //para toda aplicacao
import { SessionProvider } from 'next-auth/react'
import React from 'react'
//utilizamos o RootLayout do RootLayout original para este a de login
export default function RootLayout({children,session}) {
  return (
    <html>
        <head>
            <title>Sistema Web Pro Max</title>
        </head>
        <SessionProvider session={session}><body>
            {children}
        </body></SessionProvider>
        
    </html>
  )
}

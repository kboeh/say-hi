//All providers and context
//Next JS reccomends you initialize any providers in a seperate file and then exported into the layout
'use client'

import { SessionProvider } from "next-auth/react"

export default function Provider ({ children}) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}
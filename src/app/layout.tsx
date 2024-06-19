import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '../lib/registry'
import { GlobalStyle } from './theme/globals'
import { ThemeClient } from './theme/ThemeClient'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeClient>
                    <StyledComponentsRegistry>
                        {children}
                    </StyledComponentsRegistry>
                </ThemeClient>
            </body>
            <GlobalStyle />
        </html>
    )
}

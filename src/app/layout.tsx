import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import StyledComponentsRegistry from '../lib/registry'
import { GlobalStyles } from '../theme/globals'
import { ThemeClient } from '../theme/ThemeClient'

const montserrat = Montserrat({
    subsets: ['latin'],
    fallback: ['Georgia', 'ui-serif', 'serif'],
    weight: '300',
})

export const metadata: Metadata = {
    title: 'Iluminados sem segredos',
    description: 'Aprenda como fazer mechas loiro e morena iluminado',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-BR">
            <body className={montserrat.className}>
                <ThemeClient>
                    <StyledComponentsRegistry>
                        {children}
                    </StyledComponentsRegistry>
                </ThemeClient>
            </body>
            <GlobalStyles />
        </html>
    )
}

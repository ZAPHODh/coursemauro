'use client'

import { Montserrat } from 'next/font/google'
import { createGlobalStyle } from 'styled-components'
import { css } from 'styled-components'

const montserrat = Montserrat({
    subsets: ['latin'],
    fallback: ['Georgia', 'ui-serif', 'serif'],
    weight: ['300', '700'],
})
export const GlobalStyles = createGlobalStyle`${() => css`
    * {
        box-sizing: border-box;
    }

    html,
    body {
        /* width: 100%;
        max-width: 100vw; */
        font-family: ${montserrat.style.fontFamily};
        overflow-x: hidden;
    }

    input {
        font-family: inherit;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        font-family: inherit;
    }
`}`

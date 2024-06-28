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
    html {
        font-family: ${montserrat.style.fontFamily};
        max-width: 100vw;
    }
    ,
    main {
        max-width: 100vw;
    }
    body {
        padding: 0;
        margin: 0;
        overflow: hidden;
    }
    ,
    input {
        font-family: inherit;
    }
    ,
    a {
        color: inherit;
    }
    ,
    * {
        box-sizing: border-box;
    }
    ,
    button {
        font-family: inherit;
    }
`}`

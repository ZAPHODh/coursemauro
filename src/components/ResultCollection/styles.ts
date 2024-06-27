'use client'

import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
    ${({ theme }) => css`
        width: 100vw;
        background: linear-gradient(
            to bottom,
            ${theme.colors.dark} 60%,
            ${theme.colors.gold}
        );
        flex-wrap: nowrap;
        overflow-x: scroll;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin: 0;
        @media (max-width: 726px) {
            background: ${theme.colors.dark};
        }
        overflow: hidden;
    `}
`
export const CollectorContainer = styled.div`
    ${({ theme }) => css`
        min-width: 300px;
        display: flex;
        align-items: start;
        justify-content: start;
        @media (max-width: 726px) {
            width: 100vw;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
    `}
`

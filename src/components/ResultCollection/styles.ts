'use client'

import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
    ${({ theme }) => css`
        width: 100vw;
        background-color: ${theme.colors.dark};
        overflow-x: scroll;
        display: flex;
        align-items: center;
        justify-content: start;
        flex-direction: column;
        margin: 0;
        min-height: 600px;
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

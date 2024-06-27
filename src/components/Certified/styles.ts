'use client'

import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
    ${({ theme }) => css`
        background-color: ${theme.colors.brightDark};
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 600px;
        @media (max-width: 726px) {
            flex-direction: column;
        }
        gap: 50px;
    `}
`
export const ImageContainer = styled.div`
    ${({ theme }) => css`
        overflow: hidden;
        margin: 10px;
        max-width: 400px;
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);
    `}
`
export const ContentContainer = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: start;
        flex-direction: column;
        width: 100%;
        max-width: 400px;
        border-radius: 10px;
        height: 265px;
    `}
`

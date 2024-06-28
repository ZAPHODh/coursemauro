'use client'

import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
    ${({ theme }) => css`
        background-color: ${theme.colors.dark};
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        min-height: 600px;
        @media (max-width: 726px) {
            flex-direction: column;
        }
        gap: 50px;
    `}
`
export const ImageContainer = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        margin: 10px;
        max-width: 400px;
        background-color: white;
        border: 3px solid ${theme.colors.gold};
        border-radius: 20px;
    `}
`
export const ContentContainer = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        max-width: 400px;
        border-radius: 10px;
        height: 265px;
    `}
`

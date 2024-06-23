'use client'

import styled, { css, keyframes } from 'styled-components'

export const Wrapper = styled.section`
    ${({ theme }) => css`
        width: 100vw;
        /* background-color: ${theme.colors.dark}; */
        background: linear-gradient(
            to bottom,
            ${theme.colors.darker} 60%,
            ${theme.colors.gold}
        );
        flex-wrap: nowrap;
        overflow-x: scroll;
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
    `}
`
export const CollectorContainer = styled.div`
    ${({ theme }) => css`
        overflow: hidden;
        display: flex;
        align-items: start;
        justify-content: start;
    `}
`

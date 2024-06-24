'use client'

import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
    ${({ theme }) => css`
        color: white;
        width: 100vw;
        height: 500px;
        background-color: ${theme.colors.darker};
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        padding: 0;
    `}
`

export const Img = styled.div`
    ${({ theme }) => css`
        align-self: flex-end;
        position: relative;
        min-width: 300px;
        margin: 0;
        padding: 0;
    `}
`

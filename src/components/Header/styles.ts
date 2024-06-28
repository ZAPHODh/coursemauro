'use client'

import styled, { css } from 'styled-components'
import { Title } from '../Heading/styles'

export const Wrapper = styled.header`
    ${({ theme }) => css`
        color: white;
        width: 100vw;
        background-color: ${theme.colors.darker};
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        @media (max-width: 726px) {
            flex-direction: column;
        }
        position: relative;
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
export const ButtonContainer = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 350px;
        bottom: -20px;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
    `}
`
export const TitleContainer = styled.div`
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    @media (max-width: 726px) {
        align-items: center;
        justify-content: center;
        ${Title} {
            font-size: 25px;
        }
    }
`

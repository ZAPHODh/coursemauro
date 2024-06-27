'use client'
import { Title } from '../Heading/styles'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        /* height: 100vh; */
        ${Title} {
            font-size: 100px;
        }
        @media (max-width: 726px) {
            ${Title} {
                font-size: 70px;
            }
        }
    `}
`

export const ModuleContainer = styled.div`
    ${({ theme }) => css`
        margin-top: -120px;
        width: 150px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        align-items: center;
        background-color: ${theme.colors.white};
        border-radius: 10px;
        color: ${theme.colors.brightDark};
        z-index: 0;
        @media (max-width: 726px) {
            margin-top: -100px;
            width: 130px;
            height: 50px;
        }
    `}
`

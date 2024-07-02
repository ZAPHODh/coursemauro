'use client'

import styled, { css } from 'styled-components'
import { Title } from '../Heading/styles'

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
        @media (max-width: 726px) {
            ${Title} {
                padding-top: 20px;
                font-size: 20px;
            }
        }
    `}
`
export const CollectorContainer = styled.div`
    ${({ theme }) => css`
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (max-width: 726px) {
            flex-direction: column;
        }
    `}
`

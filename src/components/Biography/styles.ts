'use client'

import styled, { css } from 'styled-components'
import { Title } from '../Heading/styles'

export const Wrapper = styled.section`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100vw;
        background-color: ${theme.colors.darker};
        padding-bottom: 50px;
        ${Title} {
            font-size: 30px;
        }
    `}
`
export const BiographyContainer = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 10px;
        gap: 10px;
        ${Title} {
            font-size: 20px;
        }
    `}
`

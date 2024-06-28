'use client'

import styled, { css } from 'styled-components'
import { Title } from '../Heading/styles'
import { Wrapper as Button } from '../Button/styles'
import { Wrapper as Description } from '../Description/styles'
export const Wrapper = styled.section`
    ${({ theme }) => css`
        padding-bottom: 50px;
        width: 100vw;
        background-color: ${theme.colors.dark};
        color: ${theme.colors.gold};
        display: flex;
        align-items: center;
        justify-content: start;
        flex-direction: column;
        ${Title} {
            font-size: 30px;
        }
    `}
`
export const Card = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors.gold};
        display: flex;
        width: 500px;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin: 10px;
        overflow: hidden;
        border: 3px solid ${theme.colors.gold};
        border-radius: 20px;
        @media (max-width: 762px) {
            width: 90%;
        }
        ${Title} {
            color: ${theme.colors.white};
            padding: 0px 10px;
            @media (max-width: 762px) {
                font-size: 20px;
            }
        }
    `}
`
export const ContentContainer = styled.div`
    ${({ theme }) => css`
        color: ${theme.colors.gold};
        background-color: ${theme.colors.white};
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 10px;
        ${Title} {
            margin: 0;
            padding: 0;
            font-size: 50px;
            color: ${theme.colors.gold};
        }
        ${Button} {
            margin-top: 15px;
        }
        ${Description} {
            font-size: 12px;
            color: ${theme.colors.gold};
            @media (max-width: 762px) {
                font-size: 11px;
            }
        }
    `}
`
export const Ul = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;
    background-color: #f0f0f0;
    border-radius: 5px;
`

export const Li = styled.li`
    ${({ theme }) => css`
        padding: 10px;
        margin: 0;
        display: flex;
        align-items: start;
        justify-content: start;
        gap: 10px;
        background-color: #fff;
        border-top: 0.5px solid ${theme.colors.gold};
        border-bottom: 0.5 solid ${theme.colors.gold};
        &:first-child {
            border-top: none;
        }
    `}
`
export const Check = styled.div`
    font-size: 2px;
`

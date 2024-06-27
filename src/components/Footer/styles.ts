'use client'

import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
    ${({ theme }) => css`
        min-height: 150px;
        color: ${theme.colors.white};
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
        background-color: ${theme.colors.darker};
    `}
`
export const Ul = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 10px;
`

export const Li = styled.li`
    ${({ theme }) => css`
        &:hover {
            color: ${theme.colors.brightGold};
            cursor: pointer;
        }
    `}
`

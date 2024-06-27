'use client'

import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
    ${({ theme }) => css`
        width: 100vw;
        background-color: ${theme.colors.darker};
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-bottom: 50px;
    `}
`

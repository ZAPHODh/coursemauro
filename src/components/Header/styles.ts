'use client'

import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
    ${({ theme }) => css`
        color: white;
        width: 100vw;
        height: 500px;
        background-color: ${theme.colors.darker};
    `}
`

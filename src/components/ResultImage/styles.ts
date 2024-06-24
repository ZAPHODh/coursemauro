'use client'

import styled, { css } from 'styled-components'

export const Img = styled.div`
    ${({ theme }) => css`
        overflow: hidden;
        border-radius: 10px;
        border: 3px solid ${theme.colors.gold};
        margin: 10px;
    `}
`

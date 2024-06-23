'use client'

import Img from 'next/image'
import styled, { css } from 'styled-components'

export const Image = styled(Img)`
    ${({ theme }) => css`
        overflow: hidden;
        border-radius: 10px;
        border: 3px solid ${theme.colors.gold};
        margin: 10px;
    `}
`

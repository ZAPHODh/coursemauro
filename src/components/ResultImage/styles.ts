'use client'

import styled, { css } from 'styled-components'

export const Image = styled.div`
    ${({ theme }) => css`
        /* width: 400px;
        height: 400px;
        overflow: hidden;
        border-radius: 10px;
        border: 1px solid ${theme.colors.brightGold};
        margin: 10px 5px;
        @media (max-width: 726px) {
            width: 90vw;
        } */
        position: 'relative';
        height: '400px';
    `}
`

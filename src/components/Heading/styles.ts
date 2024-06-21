import styled, { css } from 'styled-components'

export const Title = styled.h1`
    ${({ theme }) => css`
        color: ${theme.colors.gold};
        font-weight: 700;
    `}
`

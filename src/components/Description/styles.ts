import styled, { css } from 'styled-components'

export const Wrapper = styled.p<{
    padding?: string | undefined
    maxWidth?: string
}>`
    ${({ padding, theme, maxWidth }) => css`
        text-align: justify;
        color: ${theme.colors.white};
        margin: 0;
        padding: ${padding ? padding : 0};
        max-width: ${maxWidth ? maxWidth : `100vw`};
    `}
`

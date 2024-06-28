import styled, { css } from 'styled-components'
type Button = {
    width: number | string
    fontSize: string
}
export const Wrapper = styled.button<Button>`
    ${({ width, fontSize, theme }) => css`
        color: ${theme.colors.white};
        position: relative;
        height: 40px;
        overflow: hidden;
        width: ${width};
        padding: 10px;
        display: flex;
        align-items: center;
        font-size: ${fontSize};
        justify-content: center;
        border-radius: 10px;
        color: ${theme.colors.white};
        transition: all 0.2s;
        background-color: ${theme.colors.gold};
        border: none;
        &:hover {
            cursor: pointer;
            background-color: ${theme.colors.brightGold};
            color: white;
        }
        &:disabled {
            cursor: no-drop;
            background-color: ${theme.colors.brightDark};
        }
    `}
`

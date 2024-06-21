import * as Styled from './styles'
export type ButtonProps = {
    children: string | React.ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    width?: number | string
    fontSize?: string
    disabled?: boolean
}

export const Button = ({
    children,
    onClick,
    width = '90%',
    fontSize = 'inherit',
    disabled,
}: ButtonProps) => {
    return (
        <Styled.Wrapper
            onClick={onClick}
            width={width}
            fontSize={fontSize}
            disabled={disabled}
        >
            {children}
        </Styled.Wrapper>
    )
}

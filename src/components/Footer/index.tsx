'use client'

import * as Styled from './styles'

export type FooterProps = {
    name: string
}

export const Footer = ({ name }: FooterProps) => {
    return <Styled.Wrapper>{name}</Styled.Wrapper>
}

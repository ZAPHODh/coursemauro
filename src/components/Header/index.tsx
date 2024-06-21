'use client'

import * as Styled from './styles'

export type HeaderProps = {
    course: string
    description: string
    img: string
}

export const Header = ({
    course = '',
    description = '',
    img = '',
}: HeaderProps) => {
    return <Styled.Wrapper>{course}</Styled.Wrapper>
}

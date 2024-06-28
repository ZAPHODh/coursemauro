'use client'

import { Description } from '../Description'
import { Heading } from '../Heading'
import * as Styled from './styles'
import { v4 as uuidv4 } from 'uuid'
export type BiographyProps = {
    biography: string[]
}

export const Biography = ({ biography }: BiographyProps) => {
    return (
        <Styled.Wrapper>
            <Heading as="h2">Biografia</Heading>
            <Styled.BiographyContainer>
                <Heading as="h3">Quém é Mauro Chrisostimo?</Heading>
                {biography.map((paragraph) => (
                    <Description maxWidth="500px" key={uuidv4()}>
                        {paragraph}
                    </Description>
                ))}
            </Styled.BiographyContainer>
        </Styled.Wrapper>
    )
}

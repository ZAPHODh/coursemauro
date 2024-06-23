'use client'
const { v4: uuidv4 } = require('uuid')
import { ResultImage, ResultImageProps } from '../ResultImage'
import * as Styled from './styles'

import { Heading } from '../Heading'
export type ResultCollectionProps = {
    title: string
    results: ResultImageProps[]
}

export const ResultCollection = ({ results, title }: ResultCollectionProps) => {
    return (
        <Styled.Wrapper>
            <Heading as="h2" padding="10px">
                {title}
            </Heading>
            <Styled.CollectorContainer>
                {results.map((result) => (
                    <ResultImage
                        alt={result.alt}
                        img={result.img}
                        key={uuidv4()}
                    ></ResultImage>
                ))}
            </Styled.CollectorContainer>
        </Styled.Wrapper>
    )
}

'use client'

import * as Styled from './styles'

import { v4 as uuidv4 } from 'uuid'
import { Heading } from '../Heading'
import { ResultImage, ResultImageProps } from '../ResultImage'

export type ResultCollectionProps = {
    title: string
    results: ResultImageProps[]
}

export const ResultCollection = ({ results, title }: ResultCollectionProps) => {
    return (
        <Styled.Wrapper aria-label="Coleção de Imagens">
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

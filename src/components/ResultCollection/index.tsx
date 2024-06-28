'use client'

import * as Styled from './styles'

import { v4 as uuidv4 } from 'uuid'
import { Heading } from '../Heading'
import ResultImage, { ResultImageProps } from '../ResultImage'

import { images } from '../../data/resultCollectionData'
import { useRef } from 'react'

export type ResultCollectionProps = {
    title: string
    results: ResultImageProps[]
}

export const ResultCollection = ({
    results = images,
    title,
}: ResultCollectionProps) => {
    const imagesRef = useRef<(HTMLDivElement | null)[]>([])
    const sectionRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <Styled.Wrapper aria-label="Coleção de Imagens" ref={sectionRef}>
            <Heading as="h2" padding="10px">
                {title}
            </Heading>
            <Styled.CollectorContainer ref={containerRef}>
                {results.map((result, index) => (
                    <ResultImage
                        ref={(el) => {
                            imagesRef.current[index] = el
                        }}
                        alt={result.alt}
                        img={result.img}
                        key={uuidv4()}
                    ></ResultImage>
                ))}
            </Styled.CollectorContainer>
        </Styled.Wrapper>
    )
}

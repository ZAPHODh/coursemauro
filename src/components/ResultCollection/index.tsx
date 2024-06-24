'use client'

import * as Styled from './styles'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Heading } from '../Heading'
import { ResultImage, ResultImageProps } from '../ResultImage'

import { images } from './mock/images'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger)
export type ResultCollectionProps = {
    title: string
    results: ResultImageProps[]
}

export const ResultCollection = ({
    results = images,
    title,
}: ResultCollectionProps) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)
    useGSAP(
        () => {
            const totalImages = results.length
            gsap.to(containerRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom top',
                    end: 'bottom bottom',
                    scrub: true,
                    onUpdate: (self) => {
                        const scrollProgress = self.progress
                        const newIndex = Math.floor(
                            scrollProgress * (totalImages - 1)
                        )
                        console.log(currentIndex)
                        setCurrentIndex(newIndex)
                    },
                },
            })
        },
        { scope: containerRef }
    )
    return (
        <Styled.Wrapper aria-label="Coleção de Imagens">
            <Heading as="h2" padding="10px">
                {title}
            </Heading>
            <Styled.CollectorContainer ref={containerRef}>
                <ResultImage
                    alt={results[currentIndex].alt}
                    img={results[currentIndex].img}
                ></ResultImage>
            </Styled.CollectorContainer>
        </Styled.Wrapper>
    )
}

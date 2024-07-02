'use client'

import { StaticImageData } from 'next/image'
import * as Styled from './styles'
import { v4 as uuidv4 } from 'uuid'
import Image from 'next/image'
import { Heading } from '../Heading'

export type FeedbackCollectionProps = {
    feedbacks: StaticImageData[]
}

export const FeedbackCollection = ({ feedbacks }: FeedbackCollectionProps) => {
    return (
        <Styled.Wrapper>
            <Heading as="h2">Feedback de meus alunos</Heading>
            <Styled.Container>
                {feedbacks.map((feedback) => (
                    <Image
                        key={uuidv4()} // Generate unique key here
                        alt="feedback dos clientes"
                        src={feedback.src}
                        width={feedback.width}
                        height={feedback.height}
                        sizes="(max-width: 762px) 100vw, (min-width: 763px) 20vw"
                        style={{
                            height: '100%',
                            width: '100%',
                            padding: '0px 2px',
                        }}
                    />
                ))}
                {feedbacks.map((feedback) => (
                    <Image
                        key={uuidv4()} // Generate unique key here
                        alt="feedback dos clientes"
                        src={feedback.src}
                        width={feedback.width}
                        height={feedback.height}
                        sizes="(max-width: 762px) 100vw, 33vw"
                        style={{
                            height: '100%',
                            width: '100%',
                            padding: '0px 2px',
                        }}
                    />
                ))}
            </Styled.Container>
        </Styled.Wrapper>
    )
}

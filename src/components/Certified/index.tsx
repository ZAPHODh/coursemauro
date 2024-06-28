'use client'

import Image, { StaticImageData } from "next/legacy/image"
import * as Styled from './styles'
import { Heading } from '../Heading'
import { Description } from '../Description'

export type CertifiedProps = {
    img: StaticImageData
    heading: string
    description: string
}

export const Certified = ({ img, heading, description }: CertifiedProps) => {
    return (
        <Styled.Wrapper>
            <Styled.ContentContainer>
                <Heading as="h2">{heading}</Heading>
                <Description>{description}</Description>
            </Styled.ContentContainer>
            <Styled.ImageContainer>
                <Image
                    alt={'Certificado'}
                    src={img.src}
                    priority
                    objectFit="cover"
                    layout="responsive"
                    height={img.height}
                    width={img.width}
                />
            </Styled.ImageContainer>
        </Styled.Wrapper>
    )
}

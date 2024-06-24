'use client'

import { StaticImageData } from 'next/legacy/image'
import Image from 'next/image'
import * as Styled from './styles'
export type ResultImageProps = {
    img: StaticImageData
    alt: string
}

export const ResultImage = ({ img, alt }: ResultImageProps) => {
    return (
        <Styled.Img>
            <Image
                alt={alt}
                src={img.src}
                priority
                objectFit="cover"
                layout="responsive"
                height={img.height}
                width={img.width}
            />
        </Styled.Img>
    )
}

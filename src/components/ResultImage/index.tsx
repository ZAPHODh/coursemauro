'use client'

import { StaticImageData } from 'next/image'
import * as Styled from './styles'
export type ResultImageProps = {
    img: StaticImageData
    alt: string
}

export const ResultImage = ({ img, alt }: ResultImageProps) => {
    return (
        <Styled.Image
            alt={alt}
            src={img.src}
            objectFit="cover"
            layout="responsive"
            height={img.height}
            width={img.width}
        />
    )
}

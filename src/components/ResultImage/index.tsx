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
            loader={() => img.src}
            alt={alt}
            src={img.src}
            height={img.height}
            width={img.width}
        />
    )
}

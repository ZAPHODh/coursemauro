'use client'

import { StaticImageData } from 'next/legacy/image'
import Image from 'next/legacy/image'
import * as Styled from './styles'
import React, { forwardRef } from 'react'

export type ResultImageProps = {
    img: StaticImageData
    alt: string
}

const ResultImage = forwardRef<HTMLDivElement, ResultImageProps>(
    ({ img, alt }, ref) => {
        return (
            <Styled.Image ref={ref}>
                <Image
                    alt={alt}
                    src={img.src}
                    priority
                    objectFit="cover"
                    layout="responsive"
                    height={img.height}
                    width={img.width}
                />
            </Styled.Image>
        )
    }
)

ResultImage.displayName = 'ResultImage'

export default ResultImage

'use client'

import { StaticImageData } from 'next/image'
import Image from 'next/image'
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
                    fill
                    sizes="(max-width: 762px) 100vw, (min-width: 763px) 20vw"
                    style={{
                        height: '100%',
                        width: '100%',
                    }}
                />
            </Styled.Image>
        )
    }
)

ResultImage.displayName = 'ResultImage'

export default ResultImage

'use client'

import { StaticImageData } from 'next/image'
import Image from 'next/image'
import React from 'react'

export type ResultImageProps = {
    img: StaticImageData
    alt: string
}

export const ResultImage = ({ img, alt }: ResultImageProps) => {
    return (
        <Image
            alt={alt}
            src={img.src}
            width={360}
            height={400}
            priority
            style={{
                border: '1px solid gold',
                borderRadius: '10px',
                margin: '10px',
            }}
        />
    )
}

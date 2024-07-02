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
            width={img.width}
            height={img.height}
            priority
            sizes="(max-width: 762px) 100vw, (min-width: 763px) 20vw"
            style={{
                height: '400px',
                width: '360px',
                border: '1px solid gold',
                borderRadius: '10px',
                margin: '10px',
            }}
        />
    )
}

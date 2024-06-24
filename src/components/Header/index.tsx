'use client'

import { Description } from '../Description'
import { Heading } from '../Heading'
import * as Styled from './styles'
import mauroPic from '../../../public/images/mauro.webp'
import { Button } from '../Button'
import Image from 'next/legacy/image'

export type HeaderProps = {
    course: string
    description: string
}

export const Header = ({ course = '', description = '' }: HeaderProps) => {
    return (
        <Styled.Wrapper>
            <div>
                <Heading>{course}</Heading>
                <Description padding="5px" maxWidth="365px">
                    {description}
                </Description>
                <Button>QUERO DOMINAR AS TÉCNICAS</Button>
            </div>
            <Styled.Img>
                <Image
                    priority
                    src={mauroPic.src}
                    alt="foto-mauro"
                    objectFit="cover"
                    layout="responsive"
                    width={mauroPic.width}
                    height={mauroPic.height}
                />
            </Styled.Img>
        </Styled.Wrapper>
    )
}

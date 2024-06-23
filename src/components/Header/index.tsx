'use client'

import Image from 'next/image'
import { Description } from '../Description'
import { Heading } from '../Heading'
import * as Styled from './styles'
import mauroPic from '../../../public/images/mauro.webp'
import { Button } from '../Button'

export type HeaderProps = {
    course: string
    description: string
}

export const Header = ({ course = '', description = '' }: HeaderProps) => {
    return (
        <Styled.Wrapper>
            <div>
                <Heading>{course}</Heading>
                <Description padding="5px" maxWidth="440px">
                    {description}
                </Description>
                <Button>QUERO DOMINAR AS TÉCNICAS</Button>
            </div>
            <Image
                src={mauroPic.src}
                alt="foto-mauro"
                width={376}
                height={537}
            />
        </Styled.Wrapper>
    )
}

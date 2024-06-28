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
    const onClick = () => {
        window.location.href =
            'https://hotmart.com/pt-br/marketplace/produtos/iluminados-sem-segredos/F93860282Y'
    }
    return (
        <Styled.Wrapper role="main">
            <Styled.TitleContainer>
                <Heading>{course}</Heading>
                <Description maxWidth="360px">{description}</Description>
            </Styled.TitleContainer>
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
            <Styled.ButtonContainer>
                <Button onClick={onClick}>QUERO DOMINAR AS TÉCNICAS</Button>
            </Styled.ButtonContainer>
        </Styled.Wrapper>
    )
}

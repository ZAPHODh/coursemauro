'use client'

import { Heading } from '../Heading'
import * as Styled from './styles'
import { v4 as uuidv4 } from 'uuid'
import { Check2 } from '@styled-icons/bootstrap/Check2'
import { Button } from '../Button'
import { Description } from '../Description'

export type PaymentPlanProps = {
    value: number
    benefits: string[]
}

export const PaymentPlan = ({ value, benefits }: PaymentPlanProps) => {
    const onClick = () => {
        window.location.href =
            'https://hotmart.com/pt-br/marketplace/produtos/iluminados-sem-segredos/F93860282Y'
    }
    return (
        <Styled.Wrapper>
            <Heading as="h3">Valores</Heading>
            <Styled.Card>
                <Heading as="h2">Iluminados sem segredos</Heading>
                <Styled.ContentContainer>
                    Por apenas <Heading>R$ {value},00</Heading>
                    <Styled.Ul>
                        {benefits.map((benefit) => (
                            <Styled.Li key={uuidv4()}>
                                <Check2 size={'20px'} />
                                {benefit}
                            </Styled.Li>
                        ))}
                    </Styled.Ul>
                    <Button onClick={onClick}>Compre agora</Button>
                    <Description maxWidth="90%">
                        Você será redirecionado para uma página 100% segura
                    </Description>
                </Styled.ContentContainer>
            </Styled.Card>
        </Styled.Wrapper>
    )
}

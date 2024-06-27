'use client'
import { Anton } from 'next/font/google'
import { forwardRef } from 'react'
import * as Styled from './styles'
import { Heading } from '../Heading'

export type ModuleProps = {
    number: number
    name: string
}
const anton = Anton({ weight: '400', subsets: ['latin'] })
export const Module = forwardRef<HTMLDivElement, ModuleProps>(
    ({ name, number }, ref) => {
        return (
            <Styled.Wrapper ref={ref} className={anton.className}>
                <Heading as="h2">{name}</Heading>
                <Styled.ModuleContainer>Módulo {number}</Styled.ModuleContainer>
            </Styled.Wrapper>
        )
    }
)
Module.displayName = 'Module'

export default Module

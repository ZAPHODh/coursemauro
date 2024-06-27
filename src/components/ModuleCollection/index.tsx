'use client'

import { Module, ModuleProps } from '../Module'
import * as Styled from './styles'
import { v4 as uuidv4 } from 'uuid'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { Heading } from '../Heading'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export type ModuleCollectionProps = {
    modules: ModuleProps[]
}

export const ModuleCollection = ({ modules }: ModuleCollectionProps) => {
    const moduleRefs = useRef<(HTMLDivElement | null)[]>([])
    const wrapperRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (!wrapperRef.current) return

        moduleRefs.current.forEach((ref, index) => {
            if (ref) {
                gsap.from(ref, {
                    xPercent: index % 2 === 0 ? 100 : -100,
                    scrollTrigger: {
                        trigger: ref,
                        start: 'bottom bottom',
                        end: '+=400',
                        scrub: true,
                        snap: {
                            snapTo: 'labels',
                            duration: { min: 0.2, max: 3 },
                            delay: 0.2,
                            ease: 'power1.inOut',
                        },
                    },
                })
            }
        })

        return () => {
            ScrollTrigger.getAll().map((instance) => instance.kill())
        }
    }, [modules])

    return (
        <Styled.Wrapper ref={wrapperRef}>
            <Heading as="h2">O que você irá aprender?</Heading>
            {modules.map((module, index) => (
                <Module
                    ref={(el) => {
                        moduleRefs.current[index] = el
                    }}
                    name={module.name}
                    number={module.number}
                    key={uuidv4()}
                />
            ))}
        </Styled.Wrapper>
    )
}

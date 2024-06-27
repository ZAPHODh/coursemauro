'use client'

import * as Styled from './styles'
import { v4 as uuidv4 } from 'uuid'
import { GetMediaIcon } from './utils/GetMediaIcon'
export type FooterProps = {
    name: string
    medias: { media: string; page: string }[]
}

export const Footer = ({ medias, name }: FooterProps) => {
    const onClick = (page: string) => {
        window.open(page, '_blank')
    }
    return (
        <Styled.Wrapper>
            {name}
            <Styled.Ul>
                {medias.map((media) => {
                    const MediaIcon = GetMediaIcon(media.media)
                    return (
                        <Styled.Li
                            key={uuidv4()}
                            onClick={() => {
                                onClick(media.page)
                            }}
                        >
                            {MediaIcon ? <MediaIcon width={'20px'} /> : null}
                        </Styled.Li>
                    )
                })}
            </Styled.Ul>
        </Styled.Wrapper>
    )
}

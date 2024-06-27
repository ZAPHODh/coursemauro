import { Whatsapp } from '@styled-icons/boxicons-logos/Whatsapp'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'
import { Tiktok } from '@styled-icons/boxicons-logos/Tiktok'
import { StyledIcon } from '@styled-icons/styled-icon'

const mediaIcons: { [key: string]: StyledIcon } = {
    Whatsapp,
    Instagram,
    Tiktok,
}

export const GetMediaIcon = (media: string): StyledIcon | null => {
    return mediaIcons[media] || null
}

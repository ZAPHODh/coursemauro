import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from '.'
import { footerData } from '@/data/footerData'

const meta = {
    title: 'Example/Footer',
    component: Footer,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        name: String,
        medias: Array,
    },
} satisfies Meta<typeof Footer>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        name: footerData.name,
        medias: footerData.medias,
    },
}

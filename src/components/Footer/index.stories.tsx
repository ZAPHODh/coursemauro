import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from '.'
import { medias } from './utils/mock'

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
        name: 'Mauro Chrisostimo - Todos os direitos reservados',
        medias: medias,
    },
}

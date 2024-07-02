import type { Meta, StoryObj } from '@storybook/react'
import { ResultImage } from '.'
import mauroPic from '../../../public/images/mauro.webp'
const meta = {
    title: 'Example/ResultImage',
    component: ResultImage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        alt: String,
    },
} satisfies Meta<typeof ResultImage>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: { img: mauroPic, alt: 'test' },
}

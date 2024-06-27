import type { Meta, StoryObj } from '@storybook/react'
import { Certified } from '.'
import certifiedImage from '../../../public/images/certified.webp'
const meta = {
    title: 'Example/Certified',
    component: Certified,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        description: String,
        heading: String,
    },
} satisfies Meta<typeof Certified>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        description: 'cu de preto',
        heading: 'Cu de branco',
        img: certifiedImage,
    },
}

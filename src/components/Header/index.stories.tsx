import type { Meta, StoryObj } from '@storybook/react'
import { Header } from '.'

const meta = {
    title: 'Example/Header',
    component: Header,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        course: String,
        description: String,
        img: String,
    },
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: { course: 'preset-storty', description: 'test', img: 'test' },
}

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Button } from '.'

const meta = {
    title: 'Example/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        children: String,
        disabled: Boolean,
        fontSize: String,
        onClick: fn(),
        width: Number || String,
    },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: 'teste',
        disabled: false,
        fontSize: 'inherit',
        width: '300px',
    },
}
export const Disabled: Story = {
    args: {
        children: 'teste',
        disabled: true,
        fontSize: 'inherit',
        width: '300px',
    },
}

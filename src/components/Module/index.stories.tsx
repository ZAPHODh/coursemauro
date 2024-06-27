import type { Meta, StoryObj } from '@storybook/react'
import Module from '.'

const meta = {
    title: 'Example/Module',
    component: Module,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        name: String,
        number: Number,
    },
} satisfies Meta<typeof Module>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: { name: 'Introdução', number: 2 },
}

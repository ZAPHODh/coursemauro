import type { Meta, StoryObj } from '@storybook/react'
import { ModuleCollection } from '.'

const meta = {
    title: 'Example/ModuleCollection',
    component: ModuleCollection,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ModuleCollection>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        modules: [
            { name: 'INTRODUÇÃO', number: 1 },
            { name: 'MONTAGEM', number: 2 },
            { name: 'MONTAGEM', number: 2 },
            { name: 'MONTAGEM', number: 2 },
            { name: 'sleep', number: 7 },
        ],
    },
}

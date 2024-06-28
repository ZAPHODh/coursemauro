import type { Meta, StoryObj } from '@storybook/react'
import { Biography } from '.'
import { biographyData } from '@/data/biographyData'

const meta = {
    title: 'Example/Biography',
    component: Biography,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        biography: String,
    },
} satisfies Meta<typeof Biography>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        biography: biographyData,
    },
}

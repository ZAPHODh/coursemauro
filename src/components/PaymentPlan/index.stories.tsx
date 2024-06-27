import type { Meta, StoryObj } from '@storybook/react'
import { PaymentPlan } from '.'

const meta = {
    title: 'Example/PaymentPlan',
    component: PaymentPlan,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        value: Number,
        benefits: Array,
    },
} satisfies Meta<typeof PaymentPlan>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        value: 145.0,
        benefits: ['test', 'test', 'test', 'test', 'test', 'test', 'test'],
    },
}

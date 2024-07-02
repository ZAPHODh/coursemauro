import type { Meta, StoryObj } from '@storybook/react'
import { FeedbackCollection } from '.'

import { resultCollectionData } from '@/data/resultCollectionData'
import { feedbackData } from '@/data/feedbackData'

const meta = {
    title: 'Example/FeedbackCollection',
    component: FeedbackCollection,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof FeedbackCollection>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        feedbacks: feedbackData,
    },
}

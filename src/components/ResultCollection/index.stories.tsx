import type { Meta, StoryObj } from '@storybook/react'
import { ResultCollection } from '.'
import { images } from '../../data/resultCollectionData'
const meta = {
    title: 'Example/ResultCollection',
    component: ResultCollection,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        title: String,
    },
} satisfies Meta<typeof ResultCollection>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        results: images,
        title: 'Resultados alcançados com a ensinada no curso',
    },
}

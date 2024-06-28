import { render } from '@testing-library/react'
import { ResultCollection } from '.'
import { ThemeClient } from '../../theme/ThemeClient'
import { resultCollectionData } from '../../data/resultCollectionData'

describe('ResultCollection', () => {
    it('should render the ResultCollection', () => {
        const { container, debug } = render(
            <ThemeClient>
                <ResultCollection
                    results={resultCollectionData.images}
                    title="test"
                />
            </ThemeClient>
        )
        expect(container).toBeInTheDocument()
    })
    it('should render the correct number of images', () => {
        const { container } = render(
            <ThemeClient>
                <ResultCollection
                    results={resultCollectionData.images}
                    title="test"
                />
            </ThemeClient>
        )
        const imagesElements = container.querySelectorAll('img')

        expect(imagesElements.length).toBe(resultCollectionData.images.length)
    })
    it('should take a ResultCollection snapshot', () => {
        const { container } = render(
            <ThemeClient>
                <ResultCollection
                    results={resultCollectionData.images}
                    title="test"
                />
            </ThemeClient>
        )

        expect(container).toMatchSnapshot()
    })
})

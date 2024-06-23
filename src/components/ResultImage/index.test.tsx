import { render } from '@testing-library/react'
import { ResultImage } from '.'
import { ThemeClient } from '../../theme/ThemeClient'
import mauroPic from '../../../public/images/mauro.webp'
describe('ResultImage', () => {
    it('should render the ResultImage', () => {
        const { getByRole } = render(
            <ThemeClient>
                <ResultImage img={mauroPic} alt="test" />
            </ThemeClient>
        )

        const heading = getByRole('img')

        expect(heading).toBeInTheDocument()
    })
    it('should render the alt properly', () => {
        const { getByRole } = render(
            <ThemeClient>
                <ResultImage img={mauroPic} alt="test" />
            </ThemeClient>
        )

        const img = getByRole('img')

        expect(img).toHaveAttribute('alt', 'test')
    })
    it('should take a resultImage snapshot', () => {
        const { getByRole } = render(
            <ThemeClient>
                <ResultImage img={mauroPic} alt="test" />
            </ThemeClient>
        )

        const heading = getByRole('img')

        expect(heading).toMatchSnapshot()
    })
})

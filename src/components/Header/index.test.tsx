import { render } from '@testing-library/react'
import { Header } from '.'
import { ThemeClient } from '../../theme/ThemeClient'

describe('Header', () => {
    it('should render the header', () => {
        const { getByRole } = render(
            <ThemeClient>
                <Header course="test" description="test" />
            </ThemeClient>
        )

        const heading = getByRole('banner')

        expect(heading).toBeInTheDocument()
    })
    it('should render the img properly', () => {
        const { getByRole } = render(
            <ThemeClient>
                <Header course="test" description="test" />
            </ThemeClient>
        )

        const img = getByRole('img')

        expect(img).toBeInTheDocument()
    })
    it('should take a headers snapshot', () => {
        const { getByRole } = render(
            <ThemeClient>
                <Header course="test" description="test" />
            </ThemeClient>
        )

        const heading = getByRole('banner')

        expect(heading).toMatchSnapshot()
    })
})

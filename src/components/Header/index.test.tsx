import { render } from '@testing-library/react'
import { Header } from '.'
import { ThemeClient } from '../../theme/ThemeClient'

describe('Header', () => {
    it('renders the header', () => {
        const { getByRole } = render(
            <ThemeClient>
                <Header course="test" description="test" img="test" />
            </ThemeClient>
        )

        const heading = getByRole('banner')

        expect(heading).toBeInTheDocument()
    })
})

import { render } from '@testing-library/react'
import { Biography } from '.'
import { ThemeClient } from '../../theme/ThemeClient'
import { biography } from './mock'

describe('Biography', () => {
    it('should render the Biography', () => {
        const { getByRole } = render(
            <ThemeClient>
                <Biography biography={biography} />
            </ThemeClient>
        )

        const component = getByRole('banner')

        expect(component).toBeInTheDocument()
    })
})

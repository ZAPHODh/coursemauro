import { render } from '@testing-library/react'
import { Biography } from '.'
import { ThemeClient } from '../../theme/ThemeClient'
import { biographyData } from '@/data/biographyData'

describe('Biography', () => {
    it('should render the Biography', () => {
        const { getByRole } = render(
            <ThemeClient>
                <Biography biography={biographyData} />
            </ThemeClient>
        )

        const component = getByRole('banner')

        expect(component).toBeInTheDocument()
    })
    it('should render match snapshot', () => {
        const { getByRole } = render(
            <ThemeClient>
                <Biography biography={biographyData} />
            </ThemeClient>
        )

        const component = getByRole('banner')

        expect(component).toMatchSnapshot()
    })
})

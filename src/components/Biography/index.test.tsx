import { render } from '@testing-library/react'
import { Biography } from '.'
import { ThemeClient } from '../../theme/ThemeClient'
import { biographyData } from '@/data/biographyData'

describe('Biography', () => {
    it('should render the Biography', () => {
        const { getByText } = render(
            <ThemeClient>
                <Biography biography={biographyData} />
            </ThemeClient>
        )

        const component = getByText(biographyData[0])

        expect(component).toBeInTheDocument()
    })
    it('should render match snapshot', () => {
        const { getByText } = render(
            <ThemeClient>
                <Biography biography={biographyData} />
            </ThemeClient>
        )

        const component = getByText(biographyData[0])

        expect(component).toMatchSnapshot()
    })
})

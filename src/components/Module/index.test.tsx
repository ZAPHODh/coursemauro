import { render } from '@testing-library/react'
import { Module } from '.'
import { ThemeClient } from '../../theme/ThemeClient'

describe('Module', () => {
    it('should render the Module', () => {
        const { getByRole } = render(
            <ThemeClient>
                <Module name="test" number={1} />
            </ThemeClient>
        )

        const component = getByRole('heading')

        expect(component).toBeInTheDocument()
    })
    it('should render with correct name params', async () => {
        const { getByRole } = render(
            <ThemeClient>
                <Module name="test" number={1} />
            </ThemeClient>
        )
        const heading = getByRole('heading')
        expect(heading).toHaveTextContent('test')
    })
    it('should render with correct number params', async () => {
        const { getByText } = render(
            <ThemeClient>
                <Module name="test" number={1} />
            </ThemeClient>
        )
        const mod = getByText('Módulo 1')
        expect(mod).toBeInTheDocument()
    })
    it('should render with correct number params', async () => {
        const { getByText } = render(
            <ThemeClient>
                <Module name="test" number={1} />
            </ThemeClient>
        )
        const mod = getByText('Módulo 1')
        expect(mod).toBeInTheDocument()
    })
    it('should take a snapshot of the document', async () => {
        const { getByRole } = render(
            <ThemeClient>
                <Module name="test" number={1} />
            </ThemeClient>
        )

        const component = getByRole('heading')

        expect(component).toMatchSnapshot()
    })
})

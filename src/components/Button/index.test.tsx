import { render } from '@testing-library/react'

import { ThemeClient } from '../../theme/ThemeClient'
import { Button } from './index'

describe('Button', () => {
    it('should renders a Button', () => {
        const { getByRole } = render(
            <ThemeClient>
                <Button>teste</Button>
            </ThemeClient>
        )

        const button = getByRole('button')

        expect(button).toBeInTheDocument()
    })

    it('should renders Button with the correct propperty', () => {
        const { getByRole } = render(
            <ThemeClient>
                <Button width={'150px'} fontSize="inherit">
                    test
                </Button>
            </ThemeClient>
        )

        const button = getByRole('button')
        expect(button).toHaveStyle(`
            width: 150px;
            font-size: inherit;
            `)
    })
    it('should renders Button with the correct children text', () => {
        const { getByRole } = render(
            <ThemeClient>
                <Button>children text</Button>
            </ThemeClient>
        )

        const button = getByRole('button')

        expect(button).toHaveTextContent('children text')
    })

    it('should match snapshot', () => {
        const { getByRole } = render(
            <ThemeClient>
                <Button>test</Button>
            </ThemeClient>
        )

        const button = getByRole('button')

        expect(button).toMatchSnapshot()
    })
})

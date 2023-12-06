/**
 * @jest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react'
import Navigation from '@/app/_components/navigation'

describe('Navigation', () => {
  it('renders links', () => {
    const { getAllByRole } = render(<Navigation />)

    const links = getAllByRole('link')

    expect(links.length).toEqual(5)
  })

  it('renders menu button with responsive style', () => {
    const { getByRole } = render(<Navigation />)

    const menuButton = getByRole('button')

    expect(menuButton).toHaveClass('block md:hidden')
  })

  it('renders links with responsive style', () => {
    const { getAllByRole } = render(<Navigation />)

    const links = getAllByRole('link')

    links.forEach((link) => {
      expect(link).toHaveClass('hidden md:block')
    })
  })

  describe('when menu button is clicked', () => {
    it('makes links visible', () => {
      const { getAllByRole, getByRole } = render(<Navigation />)

      const menuButton = getByRole('button')
      fireEvent.click(menuButton)

      const links = getAllByRole('link')

      links.forEach((link) => {
        expect(link).toHaveClass('block md:block')
      })
    })
  })
})

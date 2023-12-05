/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react'
import HomePage from '@/app/page'

describe('HomePage', () => {
  it('renders a heading', () => {
    const { getByText } = render(<HomePage />)

    expect(getByText('Gustavo Iha')).toBeInTheDocument()
  })
})

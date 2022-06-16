import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import IndividualProductPage from '../pages/IndividualProductPage';
import '@testing-library/jest-dom';

describe('HomePage Component', () => {
  // it('renders correct heading', () => {
  //   render(<HomePage />);
  //   expect(screen.getByRole('heading').textContent).toMatch(
  //     /Hello, Main Page!/i,
  //   );
  // });

  // it('renders correct label', () => {
  //   render(<HomePage />);
  //   expect(screen.getByDisplayValue(/Popular Categories/i).textContent).toMatch(/Popular Categories/i)

  // })

  it('renders correct label', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(
      screen.getByText(/Popular Categories/i).textContent
    ).toMatch(/Popular Categories/i);
  });

  it("adds item to cart", () => {
    const currentCartContents = jest.fn()
    render(
    <BrowserRouter>
      <IndividualProductPage currentCartContents={currentCartContents} />
    </BrowserRouter>
    )
  })
});

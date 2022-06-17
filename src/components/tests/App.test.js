import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import IndividualProductPage from '../pages/IndividualProductPage';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('HomePage Component', () => {
  // let currentCartContents;
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
      </BrowserRouter>,
    );
    expect(screen.getByText(/Popular Categories/i).textContent).toMatch(
      /Popular Categories/i,
    );
  });

  it('adds item to cart', () => {
    let currentCartContents = [];
    // currentCartContents.setProps([{ blue: 'color' }]);
    render(
      <BrowserRouter>
        <IndividualProductPage />
      </BrowserRouter>,
    );
    const addButton = document.querySelector('.addButton');
    const cartCount = document.querySelector('.cartCount');
    userEvent.click(addButton);
  
    expect(cartCount.textContent).toMatch(/1/i);
  });

});

import HomePage from '../pages/HomePage';
import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

afterEach(() => {
  cleanup();
});
describe('HomePage Component', () => {
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

  it('Should render Carousel on page', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>,
    );
    const carouselElement = screen.getByTestId('carousel');
    expect(carouselElement).toBeInTheDocument();
    expect(carouselElement).toHaveAttribute('class');
    expect(carouselElement).toContainHTML('h2');
    expect(carouselElement).toContainHTML('img');
  });

  it('Should render correct images', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>,
    );

    const previewContainer = screen.getByTestId('preview-container');
    expect(previewContainer).toContainHTML('img');
    expect(previewContainer).toHaveTextContent(/In Stock/i);
  });
});

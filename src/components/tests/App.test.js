import { render, screen } from '@testing-library/react';
import App from '../App';
import HomePage from '../pages/HomePage';
import '@testing-library/jest-dom';

describe('HomePage Component', () => {
  it('renders correct heading', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading').textContent).toMatch(
      /Hello, Main Page!/i,
    );
  });
});

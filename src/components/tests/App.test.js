import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';


describe('App Component', () => {

  
  it('renders correct heading', () => {
    render(<App />);
    expect(screen.getByRole('heading').textContent).toMatch(
      /Hello, Main Page!/i,
    );
  });

});


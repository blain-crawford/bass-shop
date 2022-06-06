import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';
import ShoppingPage from '../pages/ShoppingPage';
import HomePage from '../pages/HomePage';
import MemoryRouter from 'react-router-dom'

describe('App Component', () => {

  it('renders correct heading', () => {
    render(<App />);
    expect(screen.getByRole('heading').textContent).toMatch(
      /Hello, Bass Shop!/i,
    );
  });

});

// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import '@testing-library/jest-dom';
// import App from './App';
// let mockFood;

// jest.mock('./ChildComp', () => ({ favoriteFood, chooseFavoriteFood }) => (
//   <>
//     <div data-testid='food'>{ JSON.stringify(favoriteFood) }</div>
//     <button data-testid='addFavorite' onClick={() => {chooseFavoriteFood(mockFood)}}>
//       Submit
//     </button>
//   </>
// ));

// test('renders correct heading', () => {
//   render(<App />);
//   expect(screen.getByRole('secondHeading')).toHaveTextContent(/Hello, World/i);
// });

// describe('App Component', () => {

//   it('renders magnificent monkeys', () => {
//     const { container } = render(<App />);
//     expect(container).toMatchSnapshot();
//   });

//   it('renders Radical Rhinos after button click', () => {
//     render(<App />);
//     const button = screen.getByRole('button', { name: 'Click Me' });
//     userEvent.click(button);
//     expect(screen.getByRole('heading').textContent).toMatch(/radical rhinos/i);
//   });

//   it('handles rendering a favorite food', () => {
//     mockFood = 'Mustard Greens';

//     render(<App />)

//     const addFoodButton = screen.getByTestId('addFavorite')
//     userEvent.click(addFoodButton);
//     expect(screen.getByTestId('food').textContent).toMatch(/Mustard Greens/i)
//   });
// });

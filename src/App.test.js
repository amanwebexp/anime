import { render, screen } from '@testing-library/react';
import App from './App';
//  Basic test to check if the App component renders
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

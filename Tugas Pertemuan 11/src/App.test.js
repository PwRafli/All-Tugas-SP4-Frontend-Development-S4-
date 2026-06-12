import { render, screen } from '@testing-library/react';
import App from './App';

test('renders StatisStore brand name', () => {
  render(<App />);
  const brandElement = screen.getByText(/StatisStore/i);
  expect(brandElement).toBeInTheDocument();
});

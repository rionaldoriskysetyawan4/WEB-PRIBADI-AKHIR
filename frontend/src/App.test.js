import { render, screen } from '@testing-library/react';
import App from './Page/App';
import Style from './Style';

test('renders learn react link', () => {
  render(<App />);
  render(<Style />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

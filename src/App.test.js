import { render, screen } from '@testing-library/react';
import App from './App';

window.matchMedia = window.matchMedia || function() {
  return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
  };
};
test('renders Title', () => {
  render(<App />);
  const linkElement = screen.getByText(/List Manager/i);
  expect(linkElement).toBeInTheDocument();
});

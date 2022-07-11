import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux'

const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={reduxStore}>{children}</Provider>
)

test('renders app', () => {
  render(<App />);
  const button = component.find('button');
  expect(button).toBeInTheDocument();
});

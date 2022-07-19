import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

it('Renders welcome to Quiz page', () => {
  render(<App />);
  const linkElement = screen.getByText("Welcome to ACA Quiz.");
  expect(linkElement).toBeInTheDocument();
});

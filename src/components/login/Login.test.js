import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './Login';

describe('Login', () => {
    it('renders correctly', () => {
      const { getByText } = render(<Login  />);
      const linkElement = getByText(/Hello/i);
      expect(linkElement).toBeInTheDocument();
    });
});
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GeneralForm from './GeneralForm';

describe('GeneralForm', () => {
    it('renders correctly', () => {
      const { getByText } = render(<GeneralForm />);
      const linkElement = getByText(/Hello/i);
      expect(linkElement).toBeInTheDocument();
    });
});
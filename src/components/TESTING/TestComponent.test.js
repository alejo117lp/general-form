import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TestComponent from './TestComponent';

describe('TestComponent', () => {
  it('renders correctly', () => {
    const { getByText } = render(<TestComponent />);
    const linkElement = getByText(/Hello/i);
    expect(linkElement).toBeInTheDocument();
  });

  it ('renders the correct name prop' , () =>{
    const { getByText } = render (<TestComponent name='Alice'/>);
    const linkElement = getByText (/Hello Alice/i);
    expect(linkElement).toBeInTheDocument();
  });
  
});


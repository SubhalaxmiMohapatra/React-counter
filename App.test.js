import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from './App'

  afterEach(cleanup);
  it('Reset counter', () => {
    const { getByTestId } = render(<App />); 
    
    fireEvent.click(getByTestId('button-reset'))

    expect(getByTestId('count')).toHaveTextContent('1')
  });
  it('increments counter', () => {
    const { getByTestId } = render(<App />); 
    
    fireEvent.click(getByTestId('button-up'))

    expect(getByTestId('count')).toHaveTextContent('1')
  });

  it('decrements counter', () => {
    const { getByTestId } = render(<App />); 
    
    fireEvent.click(getByTestId('button-down'))

    expect(getByTestId('count')).toHaveTextContent('-1')
  });

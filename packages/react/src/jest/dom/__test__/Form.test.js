import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor, fireEvent, cleanup } from '@testing-library/react';
import TestForm from '../demo/TestForm';
// import '@testing-library/jest-dom';

describe('TestForm', () => {
  test('should input toBeEnabled', () => {
    render(<TestForm />);
    // expect(getByTestId('Input')).toBeEnabled();
    // console.log('getByTestId: ', getByTestId('Input'));
  });
});

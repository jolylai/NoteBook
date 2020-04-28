import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor, fireEvent, cleanup } from '@testing-library/react';
import SetTimeout from '../demo/SetTimeout';

describe('SetTimeout', () => {
  afterEach(cleanup);

  test('should increament after 500ms', async () => {
    const { getByTestId, getByText } = render(<SetTimeout />);
    fireEvent.click(getByTestId('button-up'));
    const counter = await waitFor(() => getByText('1'));
    expect(counter).toHaveTextContent('1');
  });
});

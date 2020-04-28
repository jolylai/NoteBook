import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor, fireEvent, cleanup } from '@testing-library/react';
import axiosMock from 'axios';
import TestAxios from '../demo/TestAxios';

jest.mock('axios');

describe('TestAxios', () => {
  afterEach(cleanup);

  test('should display no data text', () => {
    const { getByTestId } = render(<TestAxios />);
    expect(getByTestId('show-data')).toHaveTextContent('No Data');
  });

  test('should display the data', async () => {
    const url = '/greeting';
    const { getByTestId } = render(<TestAxios url={url} />);

    axiosMock.get.mockResolvedValueOnce({
      data: {
        data: { greeting: 'hello there' },
      },
    });

    fireEvent.click(getByTestId('fetch-data'));

    expect(getByTestId('loading')).toHaveTextContent('Loading...');

    const greetingData = await waitFor(() => getByTestId('show-data'));
    
    expect(axiosMock.get).toBeCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);

    expect(greetingData).toHaveTextContent('hello there');

    fireEvent.click(getByTestId('reset-data'));

    expect(getByTestId('show-data')).toHaveTextContent('No Data');
  });
});

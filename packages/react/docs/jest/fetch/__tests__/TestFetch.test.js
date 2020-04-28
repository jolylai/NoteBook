import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor, fireEvent, cleanup } from '@testing-library/react';
import TestFetch from '../demo/TestFetch';

describe('TestFetch', () => {
  afterEach(cleanup);

  test('should display no data text', () => {
    const { getByTestId } = render(<TestFetch />);
    expect(getByTestId('show-data')).toHaveTextContent('No Data');
  });

  test('should display the fetch data', async () => {
    const url = '/greeting';
    const { getByTestId } = render(<TestFetch url={url} />);

    jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
      return Promise.resolve({
        json: () => Promise.resolve({ data: { greeting: 'hello there' } }),
      });
    });

    fireEvent.click(getByTestId('fetch-data'));

    expect(getByTestId('loading')).toHaveTextContent('Loading...');

    const greetingData = await waitFor(() => getByTestId('show-data'));

    expect(window.fetch).toBeCalledTimes(1);
    expect(window.fetch).toBeCalledWith(url);

    expect(greetingData).toHaveTextContent('hello there');

    fireEvent.click(getByTestId('reset-data'));
    expect(greetingData).toHaveTextContent('No Data');
  });
});

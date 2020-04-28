import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, act } from '@testing-library/react';
import ModalTable from './ModalTable';

describe('ModalTable', () => {
  test('shound definded', () => {
    expect(ModalTable).toBeDefined();
  });

  test('should ', async () => {
    const fakeUser = Array(5)
      .fill(1)
      .map((item, index) => ({ name: `name${index}`, id: index }));

    const promise = Promise.resolve({
      total: fakeUser.length,
      data: fakeUser,
      success: true,
    });
    const fetchUser = jest.fn(() => promise);

    const { getByText } = render(
      <ModalTable visible={true} request={fetchUser} />,
    );
    // console.log('fetchUser: ', fetchUser.mock);
    await act(() => promise);
    //  expect(getByText(/name\d/i))
    // console.log('getByText(/name/i): ', getByText(/name\d/i));
  });
});

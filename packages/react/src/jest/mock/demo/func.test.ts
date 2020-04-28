test('callback', () => {
  const func = jest.fn((item, index, arr) => {
    return item + 1;
  });
  const result = [1, 2, 3].map(func);

  //   console.log('func: ', func.mock);
  expect(func.mock.calls[0]).toEqual([1, 0, [1, 2, 3]]);
  expect(func.mock.calls[1]).toEqual([2, 1, [1, 2, 3]]);
  expect(func.mock.calls[2]).toEqual([3, 2, [1, 2, 3]]);

  expect(func.mock.results[0].value).toBe(2);
  expect(func.mock.results[1].value).toBe(3);
  expect(func.mock.results[2].value).toBe(4);

  expect(result).toEqual([2, 3, 4]);
});

test('filter', () => {
  const mockFn = jest.fn();

  mockFn.mockReturnValueOnce(true);
  const result = [1, 2, 3].filter(mockFn);
  console.log('mockFn: ', mockFn.mock);

  //   第一次调用
  expect(mockFn.mock.calls[0]).toEqual([1, 0, [1, 2, 3]]);
  expect(mockFn.mock.results[0].value).toBe(true);

  expect(mockFn.mock.calls[1]).toEqual([2, 1, [1, 2, 3]]);
  expect(mockFn.mock.results[1].value).toBeUndefined();

  expect(result).toEqual([1]);
});

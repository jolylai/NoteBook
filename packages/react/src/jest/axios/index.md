---
title: Axios
nav:
  title: Jest
  path: /jest
group:
  title: 异步
  path: /async
---

## Axios

<code src="./demo/TestAxios.tsx">

## 测试

```js
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

    // 模拟 axios 响应
    axiosMock.get.mockResolvedValueOnce({
      data: {
        data: { greeting: 'hello there' },
      },
    });

    // 点击 Load Data 按钮
    fireEvent.click(getByTestId('fetch-data'));

    // 显示 Loading
    expect(getByTestId('loading')).toHaveTextContent('Loading...');

    // 等待请求响应
    await waitFor(() => {
      expect(axiosMock.get).toBeCalledTimes(1);
      expect(axiosMock.get).toHaveBeenCalledWith(url);
    });

    // 请求响应数据
    expect(getByTestId('show-data')).toHaveTextContent('hello there');

    // 点击重置按钮
    fireEvent.click(getByTestId('reset-data'));

    expect(getByTestId('show-data')).toHaveTextContent('No Data');
  });
});
```

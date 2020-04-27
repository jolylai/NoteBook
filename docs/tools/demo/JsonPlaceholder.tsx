/**
 * title: JsonPlaceholder
 * desc: Fake Online REST API for Testing and Prototyping
 */
import React from 'react';
import { Button } from 'antd';
import { useRequest } from '@umijs/hooks';
import { PaginatedParams } from '@umijs/use-request/lib/types';

interface Item {
  name: {
    last: string;
  };
  email: string;
  phone: string;
  gender: 'male' | 'female';
}

interface Result {
  total: number;
  list: Item[];
}

const getTableData = (): Promise<Result> => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => ({ list: json, total: json.length }));
};

const JsonPlaceholder = () => {
  const { data = { list: [], total: 0 }, loading, run } = useRequest(
    getTableData,
    {
      manual: true,
    },
  );

  return (
    <>
      <Button type="primary" loading={loading} onClick={() => run()}>
        Fetch
      </Button>
      <ol>
        {data.list.map((item: Item, index: number) => (
          <li key={index}>{item.email}</li>
        ))}
      </ol>
    </>
  );
};

export default JsonPlaceholder;

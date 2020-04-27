/**
 * title: JSONPlaceholder
 * desc: Fake Online REST API for Testing and Prototyping
 */
import React from 'react';
import { Button } from 'antd';
import { useRequest } from '@umijs/hooks';

const FetchJson = () => {
  const { data = [], error, loading, run } = useRequest(
    'https://jsonplaceholder.typicode.com/users',
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
        {data.map((item: any) => (
          <li>{item.name}</li>
        ))}
      </ol>
    </>
  );
};

export default FetchJson;

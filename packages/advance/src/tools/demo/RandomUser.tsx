/**
 * title: RandomUser
 * desc: A free, open-source API for generating random user data. Like Lorem Ipsum, but for people.
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

const getTableData = (
  { current, pageSize }: PaginatedParams[0],
  formData: Object = {},
): Promise<Result> => {
  let query = `page=${current}&size=${pageSize}`;
  Object.entries(formData).forEach(([key, value]) => {
    if (value) {
      query += `&${key}=${value}`;
    }
  });

  return fetch(`https://randomuser.me/api?results=${pageSize}&${query}`)
    .then(res => res.json())
    .then(res => ({
      total: res.info.results,
      list: res.results,
    }));
};

const FetchJson = () => {
  const { data = { list: [], total: 0 }, loading, run } = useRequest(
    getTableData,
    {
      paginated: true,
      manual: true,
    },
  );
  console.log('data: ', data);

  return (
    <>
      <Button
        type="primary"
        loading={loading}
        onClick={() => run({ current: 1, pageSize: 5 })}
      >
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

export default FetchJson;

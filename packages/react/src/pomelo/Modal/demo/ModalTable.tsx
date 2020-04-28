import React, { useState } from 'react';
import { Button } from 'antd';
import ModalTable from '../ModalTable';
import { ProColumns } from '@ant-design/pro-table';
import { useRequest } from '@umijs/hooks';

interface User {
  name: string;
  email: string;
  phone: string;
  websit: string;
}

interface Result {
  total: number;
  data: User[];
  success: boolean;
}

const getTableData = (
  //   { current, pageSize }: PaginatedParams[0],
  formData: Object,
): Promise<Result> => {
  let query = `page=${formData.current}&size=${formData.pageSize}`;
  Object.entries(formData).forEach(([key, value]) => {
    if (value) {
      query += `&${key}=${value}`;
    }
  });

  return fetch(`https://randomuser.me/api?results=55&${query}`)
    .then(res => res.json())
    .then(res => {
      console.log('res: ', res);
      return {
        total: res.info.results,
        data: res.results,
        success: true,
      };
    });
};

export default () => {
  const { run, data } = useRequest(getTableData, {
    // manual: true,
    // initialData: {},
    // paginated: true,
  });
  console.log('data: ', data);

  const [visible, setVisible] = useState(true);

  const columns: ProColumns<User>[] = [
    {
      title: 'name',
      dataIndex: 'name',
    },
    {
      title: 'email',
      dataIndex: 'email',
    },
    {
      title: 'phone',
      dataIndex: 'phone',
    },
    {
      title: 'website',
      dataIndex: 'website',
    },
    {
      title: 'company',
      dataIndex: ['company', 'name'],
    },
  ];

  const handleOk = (data: User[] | User) => {
    console.log('data: ', data);
  };

  return (
    <>
      <ModalTable<User>
        rowKey="id"
        visible={visible}
        request={run}
        onCancel={() => setVisible(false)}
        columns={columns}
        onOk={handleOk}
      />
      <Button type="primary" onClick={() => setVisible(true)}>
        Toggle
      </Button>
    </>
  );
};

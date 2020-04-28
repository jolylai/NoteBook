import React from 'react';
import axios from 'axios';
import { Button } from 'antd';

interface TestAxiosProps {
  url: string;
}

const TestAxios = ({ url }: TestAxiosProps) => {
  const [data, setData] = React.useState('No Data');
  const [loading, setLoading] = React.useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await axios
      .get(url || 'http://www.mocky.io/v2/5e90a40f33000078c327d926')
      .then(res => res.data);
    setData(response.data.greeting);
    setLoading(false);
  };

  const resetData = () => {
    setData('No Data');
  };

  return (
    <>
      <Button
        type="primary"
        onClick={fetchData}
        data-testid="fetch-data"
        style={{ marginRight: 8 }}
      >
        Load Data
      </Button>
      <Button onClick={resetData} data-testid="reset-data">
        Reset Data
      </Button>
      {loading ? (
        <h3 data-testid="loading">Loading...</h3>
      ) : (
        <h3 data-testid="show-data">{data}</h3>
      )}
    </>
  );
};

export default TestAxios;

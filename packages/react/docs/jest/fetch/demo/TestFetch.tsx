import React from 'react';
import { Button } from 'antd';

interface TestFetchProps {
  url: string;
}

const TestFetch = ({ url }: TestFetchProps) => {
  const [data, setData] = React.useState('No Data');
  const [loading, setLoading] = React.useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(url).then(res => res.json());
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

TestFetch.defaultProps = {
  url: 'http://www.mocky.io/v2/5e90a40f33000078c327d926',
};

export default TestFetch;

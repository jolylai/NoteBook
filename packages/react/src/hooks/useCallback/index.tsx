import React, { useState, useCallback } from 'react';
import { Button } from 'antd';

const Increment = ({ onClick }) => {
  return (
    <Button type="primary" onClick={() => onClick()}>
      Click
    </Button>
  );
};

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const callback = useCallback(() => {
    setCount(c => c + 1);
  }, [setCount]);

  return (
    <div>
      <div>{`您已点击了 ${count}次`}</div>
      <Increment onClick={callback} />
    </div>
  );
};

export default UseCallback;

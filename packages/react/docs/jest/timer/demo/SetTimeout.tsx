import React from 'react';
import { Button } from 'antd';

const SetTimeout = () => {
  const [counter, setCounter] = React.useState(0);

  const delayCount = () =>
    setTimeout(() => {
      setCounter(counter + 1);
    }, 500);

  return (
    <>
      <h1 data-testid="counter">{counter}</h1>
      <Button
        data-testid="button-up"
        onClick={delayCount}
        style={{ marginRight: 8 }}
      >
        Up
      </Button>
      <Button data-testid="button-down" onClick={() => setCounter(counter - 1)}>
        Down
      </Button>
    </>
  );
};

export default SetTimeout;

import React, { useRef } from 'react';
import { Input, Button } from 'antd';

function Basic() {
  const inputEl = useRef<Input>(null);

  const onButtonClick = () => {
    if (inputEl.current) {
      // `current` 指向已挂载到 DOM 上的文本输入元素
      inputEl.current.focus();
    }
  };

  return (
    <>
      <Input ref={inputEl} style={{ width: 200, marginRight: 8 }} />
      <Button type="primary" onClick={onButtonClick}>
        Focus the input
      </Button>
    </>
  );
}

export default Basic;

import React from 'react';
import { Form, Input } from 'antd';

function TestForm() {
  return (
    <Form>
      <Form.Item label="Input">
        <Input data-testid="input" />
      </Form.Item>
    </Form>
  );
}

export default TestForm;

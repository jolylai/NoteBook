# TypeScript

- [TypeScript 中文手册](https://typescript.bootcss.com/)
- [TypeScript 2.8 下的终极 React 组件模式](https://juejin.im/post/5b07caf16fb9a07aa83f2977#heading-9)
- [TypeScript 2.8 下的终极 React 组件模式 英文](https://levelup.gitconnected.com/ultimate-react-component-patterns-with-typescript-2-8-82990c516935)
- [TypeScript 入门教程](https://ts.xcatliu.com/basics/declaration-files)

## 类型

```ts
const a: number = 1;
const str: string = 'tom';

const person: {
  name: string;
  age: number;
} = {
  name: 'Tom',
  age: 2,
};
```

## [枚举](https://ts.xcatliu.com/advanced/enum)

## React

```tsx
import React from 'react';
interface ApplyInfoProps<T> {
  dataSource: T[];
  render: (data: T) => void;
}

const Demo = <T extends {}>(props: DemoProps<T>) => {
  const { dataSource = [], render } = props;

  return <div>{dataSource.map(item => render(item))}</div>;
};

export default Demo;
```

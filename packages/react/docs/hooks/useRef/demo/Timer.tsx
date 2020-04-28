/**
 * title: 容纳任意值
 * desc: 「ref」 对象是一个 current 属性可变且可以容纳任意值的通用容器，类似于一个 class 的实例属性。
 */
import React, { useEffect, useRef } from 'react';

function Timer() {
  const intervalRef = useRef<number>();

  useEffect(() => {
    const id = setInterval(() => {
      // ...
    });
    intervalRef.current = id;
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return <div>{intervalRef.current}</div>;
}

export default Timer;

import React, { useRef, useState, useCallback } from 'react';

const useDynamicList = <T>(initialValue: T[]) => {
  const counterRef = useRef<number>(-1);
  const keyList = useRef<number[]>([]);

  const setKey = useCallback((index: number) => {
    counterRef.current += 1;
    keyList.current.splice(index, 0, counterRef.current);
  }, []);

  const [list, setList] = useState(() => {
    (initialValue || []).forEach((_, index) => {
      setKey(index);
    });
    return initialValue || [];
  });

  const getKey = (index: number) => keyList.current[index];
  const getIndex = (index: number) =>
    keyList.current.findIndex(item => item === index);

  const push = (obj: T) => {
    setList(l => {
      setKey(l.length);
      return l.concat(obj);
    });
  };

  const unshift = (obj: T) => {
    setList(l => {
      setKey(0);
      return [obj].concat(l);
    });
  };

  return {
    list,
    getKey,
    getIndex,
    push,
    unshift,
  };
};

export default useDynamicList;

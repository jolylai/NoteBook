import { renderHook, act } from '@testing-library/react-hooks';
import useDynamicList from './index';

describe('useDynamicList', () => {
  it('should be definded', () => {
    expect(useDynamicList).toBeDefined();
  });

  const setUp = (props: any): any => renderHook(() => useDynamicList(props));

  it('getKey should work', () => {
    const hook = setUp([1, 2, 3]);
    expect(hook.result.current.list[0]).toBe(1);
    expect(hook.result.current.getKey(0)).toBe(0);
    expect(hook.result.current.getKey(1)).toBe(1);
    expect(hook.result.current.getKey(2)).toBe(2);
  });

  it('methods should work', () => {
    const hook = setUp([
      { name: 'aaa', age: 18 },
      { name: 'bbb', age: 19 },
      { name: 'ccc', age: 20 },
    ]);

    expect(hook.result.current.list[0]).toEqual({ name: 'aaa', age: 18 });
    expect(hook.result.current.list[1]).toEqual({ name: 'bbb', age: 19 });
    expect(hook.result.current.list[2]).toEqual({ name: 'ccc', age: 20 });

    expect(hook.result.current.getKey(0)).toBe(0);
    expect(hook.result.current.getKey(1)).toBe(1);
    expect(hook.result.current.getKey(2)).toBe(2);

    // unshift
    act(() => {
      hook.result.current.unshift({ name: 'ddd', age: 21 });
    });

    expect(hook.result.current.list[0]).toEqual({ name: 'ddd', age: 21 });
    expect(hook.result.current.getKey(0)).toEqual(3);
  });
});

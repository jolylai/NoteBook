# React 生命周期

## render()

返回值类型

- React element （JSX）
- Array 和 [fragments](https://reactjs.org/docs/fragments.html)
- [Portals](https://reactjs.org/docs/portals.html) ⭐️
- String and Number
- Boolean or null

## constructor()

正常只有在两种情况下会使用 constructor

- 初始化组件中的 state
- 绑定事件处理实例

```js
constructor(props) {
  // 否则在constructor中 this.props 将会是undefined
  super(props);

  // 不要在 constuctor 中调用 this.state()
  this.state = { counter: 0 };

  // Don't do this!
  // you can use this.props.color directly instead
  // updates to the color prop won’t be reflected in the state
  this.state = { color: props.color };

  this.handleClick = this.handleClick.bind(this);
}
```

## componentDidMount()

- 适合用于网络请求
- 发起订阅的好地方，记得在 **componentWillUnmount()** 退订
- 在这个地方调用 **this.setState()** 将会触发一次额外的渲染，但是它将在浏览器刷新屏幕之前发生。这保证了即使 render()将会调用两次，但用户不会看到中间状态。它对于像模态框和工具提示框这样的例子是必须的。这时，在渲染依赖 DOM 节点的尺寸或者位置的视图前，你需要先测量这些节点。 ⭐️

## componentDidUpdate(prevProps, prevState, snapshot)

- **componentDidUpdate()**会在更新发生后立即被调用。**该方法并不会在初始化渲染时调用。**
- 操作 DOM；发送请求（要比较当前和之前的属性，如果属性没有改变请求也就没有必要）
- 调用 **this.setState()** 必须在某个条件下，不然会导致死循环
- snapshot 为 **getSnapshotBeforeUpdate()** 中的返回值，否则为 `undefined`
- 如果 **shouldComponentUpdate()** 返回值为 false 时 **componentDidUpdate()** 将不会被调用

## componentWillUnmount()

- 在组件被卸载和销毁之前立刻调用。
- 处理任何必要的清理工作（解绑定时器，取消网络请求，清理任何在 componentDidMount 环节创建的 DOM 元素）

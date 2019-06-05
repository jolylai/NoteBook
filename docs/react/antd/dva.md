# Dva

## 模板

```js
import { query } from "../services/login";

export default {
  namespace: "name",

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === "/") {
        }
      });
    }
  },

  effects: {
    *query({ payload }, { call, put }) {
      const response = yield call(query, payload);
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    }
  }
};
```

## subscriptions

({ dispatch, history }, done) => unlistenFunction

```js
  subscriptions: {
    setupHistory({ dispatch, history }) {
      history.listen(location => {
        dispatch({
          type: 'updateState',
          payload: {
            locationPathname: location.pathname,
            locationQuery: location.query,
          },
        })
      })
    },

    setupRequestCancel({ history }) {
      history.listen(() => {
        const { cancelRequest = new Map() } = window

        cancelRequest.forEach((value, key) => {
          if (value.pathname !== window.location.pathname) {
            value.cancel(CANCEL_REQUEST_MESSAGE)
            cancelRequest.delete(key)
          }
        })
      })
    },

    setup({ dispatch }) {
      dispatch({ type: 'query' })
    },
  }
```

::: tip

- `setupHistory`, `setupRequestCancel`, `setup` 都会订阅，命名建议以 setup 开头
- 建议拆分成多个订阅，这样代码结构更加清晰
  :::

## 扩展 modal

用这种写法能大大简化 modal 中的代码

```js
import modelExtend from "dva-model-extend";

export const model = {
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    }
  }
};

export const pageModel = modelExtend(model, {
  state: {
    list: [],
    pagination: {
      showSizeChanger: true,
      showQuickJumper: true,
      current: 1,
      total: 0,
      pageSize: 10
    }
  },

  reducers: {
    querySuccess(state, { payload }) {
      const { list, pagination } = payload;
      return {
        ...state,
        list,
        pagination: {
          ...state.pagination,
          ...pagination
        }
      };
    }
  }
});
```

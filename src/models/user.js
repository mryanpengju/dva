
export default {

  //空间对象名称
  namespace: 'user',

  //state 对象
  state: {
    user:{}
  },

  //加载组件前执行的请求
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },
  //远程请求信息
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  //reducer 改变数据的唯一途径
  reducers: {
    getUser(state, action) {
      return { ...state, ...action.payload };
    },
  },

};

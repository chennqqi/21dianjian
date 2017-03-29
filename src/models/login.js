import * as loginService from '../services/login';

export default {
  namespace: 'login',
  state: {},
  reducers: {},
  effects: {
    *userlogin({ payload: values }, { call, put }) {
      yield call(loginService.login, values);
      yield put({ type: 'reload' });
    },
  },
  subscriptions: {},
};

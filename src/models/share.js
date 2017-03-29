import * as shareService from '../services/share';

export default {
  namespace: 'share',
  state: {
    list: [],
  },
  reducers: {
    save(state, { payload: { data: list, total, page } }) {
      return { ...state, list, total, page };
    },
  },
  effects: {
    *fetch({ payload: { page = 1 } }, { call, put }) {
      const { data } = yield call(shareService.fetch, { page });
      if (data.code === 1) {
        yield put({
          type: 'save',
          payload: {
            data: data.result,
            total: data.count,
            page: parseInt(page, 10),
          },
        });
      } else {
        console.log(`data.code ${data.code}`);
      }
    },
    *audit({ payload: { id, values } }, { call, put }) {
      yield call(shareService.audit, id, values);
      yield put({ type: 'reload' });
    },
    *reload(action, { put, select }) {
      const page = yield select(state => state.share.page);
      yield put({ type: 'fetch', payload: { page } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/share') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};

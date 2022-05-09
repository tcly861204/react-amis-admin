import appService from '@/services/app';
import { APP_MODE } from 'ice';

export default {
  state: {
    preview: false,
    isMobile: false,
    schema: null,
    curIndex: 0,
    catchSchema: [],
  },
  reducers: {
    update(prevState, payload) {
      return { ...prevState, ...payload };
    },
  },
  effects: (dispatch) => ({
    async initPage({ pathname }) {
      dispatch.app.update({
        schema: null,
      });
      let api = pathname.substr(1);
      if (APP_MODE !== 'dev') {
        api = api.replace(/\//gi, '_');
        api += '.json';
      }
      const schema = await appService.initPage(api);
      dispatch.app.update({
        schema: APP_MODE !== 'dev' ? schema : schema.data,
      });
    },
    async updateSchema(payload) {
      dispatch.app.update(payload);
    },
    async updateIndex(payload) {
      dispatch.app.update(payload);
    },
    async updateCatch(payload) {
      dispatch.app.update(payload);
    },
  }),
};

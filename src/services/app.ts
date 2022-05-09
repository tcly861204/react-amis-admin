import { request, config } from 'ice';

const { BASE_URL } = config;

export default {
  async initPage(url: string) {
    return await request.get(`${BASE_URL}api/${url}`);
  },
};

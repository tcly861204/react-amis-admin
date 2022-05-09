const config = {
  dev: {
    appId: 'dev-idqq',
    BASE_URL: '//localhost:3001/',
  },
  daily: {
    BASE_URL: 'https://github.com/api',
  },
  prod: {
    BASE_URL: './',
  },
  default: {
    appId: 'default-id',
    sercet: 'hahjhjhj',
  },
};

export default config;

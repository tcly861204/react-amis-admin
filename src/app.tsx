import { runApp, IAppConfig, APP_MODE } from 'ice';
import { Spinner } from 'amis';

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
  },
  router: {
    type: APP_MODE === 'dev' ? 'browser' : 'hash',
    fallback: <Spinner />,
  },
};

runApp(appConfig);

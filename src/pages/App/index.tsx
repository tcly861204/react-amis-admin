import Amis from '@/components/Amis';
import store from '@/store';
import { useEffect } from 'react';
import { Spinner } from 'amis';
import { useHistory } from 'ice';

const App = () => {
  const [appStore, appDispatchers] = store.useModel('app');
  const history = useHistory();
  useEffect(() => {
    appDispatchers.initPage(history.location);
  }, [history.location]);
  if (appStore.schema) {
    return <Amis schema={appStore.schema} />;
  }
  return <Spinner />;
};

export default App;

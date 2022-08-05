import Amis from '@/components/Amis';
import store from '@/store';
import { useEffect } from 'react';
import { Spinner } from 'amis';
import { useHistory } from 'ice';

const App = () => {
  const [{ schema }, { initPage }] = store.useModel('app');
  const history = useHistory();
  useEffect(() => {
    initPage(history.location);
  }, [history.location]);
  if (schema) {
    return <Amis schema={schema} />;
  }
  return <Spinner className="pt150" />;
};

export default App;

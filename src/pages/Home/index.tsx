import styles from './index.module.less';
import Amis from '@/components/Amis';
import store from '@/store';

const APP = () => {
  const [homeStore] = store.useModel('home');
  return (
    <div className={styles.container}>
      <Amis schema={homeStore.schema} />
    </div>
  );
};

export default APP;

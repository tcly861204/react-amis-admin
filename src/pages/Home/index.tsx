import styles from './index.module.less';
import Amis from '@/components/Amis';
import store from '@/store';

const APP = () => {
  const [{ schema }] = store.useModel('home');
  return (
    <div className={styles.container}>
      <Amis schema={schema} />
    </div>
  );
};

export default APP;

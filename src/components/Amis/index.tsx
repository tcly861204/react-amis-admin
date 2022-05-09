import { render as renderAmis, ToastComponent, AlertComponent } from 'amis';
import env from '@/config/env';
import { Schema } from 'amis/lib/types.d';
import '@/components/Custom/index';

interface Props {
  schema: Schema;
}

const Amis = (props: Props) => {
  const { schema, ...args } = props;
  return (
    <section>
      <ToastComponent key="toast" position={'top-center'} />
      <AlertComponent key="alert" />
      {renderAmis(schema, args || {}, env)}
    </section>
  );
};

export default Amis;

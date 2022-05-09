import { Layout, Switch, Spinner, classnames as cx, SchemaObject } from 'amis';
import store from '@/store';
import { Editor } from 'amis-editor';
import { message } from 'antd';
import './style.scss';
import logo from '@/assets/logo.png';
import { history } from 'ice';
import { useEffect } from 'react';
import '@/components/Custom/index'; // 编辑器注册一个自定义组件
import './MyRender';

const AmisEditor = ({ location }) => {
  const [appStore, appDispatchers] = store.useModel('app');
  useEffect(() => {
    const pathname = location.search.substr(3);
    appDispatchers.initPage({ pathname });
  }, [location]);
  const save = () => {
    message.success('保存成功');
  };
  const exit = () => {
    history!.push(location.search.substr(3));
  };
  function header() {
    return (
      <div className="editor-header clearfix box-shadow bg-dark">
        <div className="logo clearfix">
          <img src={logo} />
          <span>amis</span>
        </div>
        <div className="editor-preview">
          预览{' '}
          <Switch
            value={appStore.preview}
            onChange={(value: boolean) => appDispatchers.update({ preview: value })}
            className="m-l-xs"
            inline
          />
        </div>

        <div className="editor-preview">
          移动端{' '}
          <Switch
            value={appStore.isMobile}
            onChange={(value: boolean) => appDispatchers.update({ isMobile: value })}
            className="m-l-xs"
            inline
          />
        </div>

        <div className="editor-header-btns">
          <div className={cx('btn-item')} onClick={save}>
            保存
          </div>
          <div className="btn-item" onClick={exit}>
            退出
          </div>
        </div>
      </div>
    );
  }
  if (appStore.schema) {
    return (
      <Layout header={header()}>
        <Editor
          theme={'cxd'}
          preview={appStore.preview}
          value={appStore.schema as SchemaObject}
          onChange={(value: any) =>
            appDispatchers.updateSchema({
              schema: value,
            })
          }
          className="is-fixed"
          isMobile={appStore.isMobile}
        />
      </Layout>
    );
  }
  return <Spinner />;
};

export default AmisEditor;

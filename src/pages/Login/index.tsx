import { LoginForm, ProFormText, ProFormCaptcha, ProFormCheckbox } from '@ant-design/pro-form';
import { UserOutlined, MobileOutlined, LockOutlined } from '@ant-design/icons';
import { message, Tabs } from 'antd';
import { useState } from 'react';
import { history } from 'ice';
import _ from 'lodash';
import styles from './index.module.less';

import appStore from '@/store';

type LoginType = 'phone' | 'account';

export default () => {
  const [userState, userDispatchers] = appStore.useModel('user');
  const [loginType, setLoginType] = useState<LoginType>('account');

  const onFinish = async (value) => {
    const data = await userDispatchers.userLogin({
      ...value,
      type: 'member',
    });
    if (data) {
      const access_token = _.get(data, 'jwt.access_token', '');
      const userId = _.get(data, 'user.id', '');
      localStorage.setItem('token', `bearer ${access_token}`);
      localStorage.setItem('userId', userId);
      // await userDispatchers.userInfo(userId);
      history.push('/goods/list');
    }
  };

  const sendCode = async (phone) => {
    const res = await userDispatchers.sendVerCode(phone);
    if (res) {
      message.success(`手机号 ${phone} 验证码发送成功!`);
    }
  };

  return (
    <div className={styles.container}>
      <LoginForm onFinish={onFinish} title="欢迎登录" subTitle="后台管理">
        <Tabs activeKey={loginType} onChange={(activeKey) => setLoginType(activeKey as LoginType)}>
          <Tabs.TabPane key={'account'} tab={'密码登录'} />
          {/* <Tabs.TabPane key={'phone'} tab={'验证码登录'} /> */}
        </Tabs>
        {loginType === 'account' && (
          <>
            <ProFormText
              name="username"
              initialValue="11111111111"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'} />,
              }}
              placeholder={'用户名:'}
              rules={[
                {
                  required: true,
                  message: '请输入用户名!',
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              initialValue="123456"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'} />,
              }}
              placeholder={'密码: '}
              rules={[
                {
                  required: true,
                  message: '请输入密码！',
                },
              ]}
            />
          </>
        )}
        {loginType === 'phone' && (
          <>
            <ProFormText
              fieldProps={{
                size: 'large',
                prefix: <MobileOutlined className={'prefixIcon'} />,
              }}
              name="mobile"
              placeholder={'手机号'}
              rules={[
                {
                  required: true,
                  message: '请输入手机号！',
                },
                {
                  pattern: /^1\d{10}$/,
                  message: '手机号格式错误！',
                },
              ]}
            />
            <ProFormCaptcha
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'} />,
              }}
              captchaProps={{
                size: 'large',
              }}
              placeholder={'请输入验证码'}
              captchaTextRender={(timing, count) => {
                if (timing) {
                  return `${count} ${'获取验证码'}`;
                }
                return '获取验证码';
              }}
              name="captcha"
              phoneName="mobile"
              rules={[
                {
                  required: true,
                  message: '请输入验证码！',
                },
              ]}
              onGetCaptcha={async (phone) => {
                sendCode(phone);
              }}
            />
          </>
        )}
        <div
          style={{
            marginBottom: 24,
          }}
        >
          <ProFormCheckbox noStyle name="autoLogin">
            自动登录
          </ProFormCheckbox>
          <a
            style={{
              float: 'right',
            }}
          >
            忘记密码
          </a>
        </div>
      </LoginForm>
    </div>
  );
};

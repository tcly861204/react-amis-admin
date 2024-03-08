import { Form, Input, Button, Checkbox } from '@arco-design/web-react'
import {
  IconUser,
  IconLock
} from '@arco-design/web-react/icon'
import styles from './index.module.scss'
import { useCallback } from 'react'
const FormItem = Form.Item

const Login = () => {
  const [form] = Form.useForm();
  const onSubmit = useCallback(() => {
    form.validate().then(res => {
      console.log(res)
    })
  }, [form])
  return <section className={styles.login}>
    <div className={styles.content}>
      <Form
        form={form}
        initialValues={{
          username: 'admin',
          password: '123456'
        }}
        className={styles.form} autoComplete='off'>
        <div>
          <h2 style={{ color: '#666', fontSize: '24px', marginBottom: 20  }}>欢迎登录</h2>
        </div>
        <FormItem field={'username'} rules={[{ required: true }]}>
          <Input placeholder='请输入用户名' prefix={<IconUser />} />
        </FormItem>
        <FormItem field={'password'} rules={[{ required: true }]}>
          <Input.Password
            prefix={<IconLock />}
            defaultVisibility={false}
            placeholder='请输入密码'
          />
        </FormItem>
        <FormItem>
          <Checkbox>记住密码</Checkbox>
        </FormItem>
        <FormItem>
          <Button type='primary' long onClick={onSubmit}>登 录</Button>
        </FormItem>
      </Form>
    </div>
  </section>
}

export default Login
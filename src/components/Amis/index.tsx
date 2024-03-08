import { render as renderAmis, Schema } from 'amis'
import { ToastComponent, AlertComponent } from 'amis-ui'
import axios from 'axios'

interface Props {
  schema: Schema
}

const Amis = ({ schema }: Props) => {
  const theme = 'antd';
  const locale = 'zh-CN';
  return <>
    <ToastComponent
      theme={theme}
      key="toast"
      position={'top-center'}
      locale={locale}
    />
    <AlertComponent theme={theme} key="alert" locale={locale} />
    {
      renderAmis(schema, {
      }, {
        theme: 'cxd',
        updateLocation: (to: unknown, replace: unknown) => {
          console.log(to)
          console.log(replace)
        },
        fetcher: ({
          url, // 接口地址
          method, // 请求方法 get、post、put、delete
          data, // 请求数据
          config, // 其他配置
        }) => {
          const ajax = axios.create({
            baseURL: '/'
          })
          switch (method) {
            case 'get':
              return ajax.get(url, config)
            case 'post':
              return ajax.post(url, data || null, config)
            default:
              return ajax.post(url, data || null, config)
          }
        },
        isCancel: value => axios.isCancel(value),
      })
    }
  </>
}

export default Amis

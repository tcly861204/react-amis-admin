import { Outlet } from 'react-router-dom'
import { Layout } from '@arco-design/web-react'
import {
  IconMenuUnfold,
  IconMenuFold,
} from '@arco-design/web-react/icon'
import Sidebar from '@/components/Sidebar'
import Toolbar from '@/components/ToolBar'
import logoImg from '@/assets/logo.png'
import useStore from '@/store/layout'
import { useCallback } from 'react'
import menuConfig from './menu'
import styles from './index.module.scss'

const App = () => {
  const { collapse, updateField } = useStore(state => state)
  const onCollapse = useCallback((collapsed: boolean) => {
    updateField('collapse', collapsed)
  }, [updateField])
  return <Layout className={styles.container}>
    <Layout.Header>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <h1><img src={logoImg} /><span>amis</span></h1>
        </div>
        <Toolbar />
      </div>
    </Layout.Header>
    <Layout>
      <Layout.Sider
        defaultCollapsed={collapse}
        collapsible={true}
        onCollapse={onCollapse}
        trigger={<div className={styles.collapse}>
          { collapse ? <IconMenuUnfold /> : <IconMenuFold /> }
        </div>}
      >
        <Sidebar config={menuConfig} />
      </Layout.Sider>
      <Layout.Content className={styles.content}>
        <Outlet />
      </Layout.Content>
    </Layout>
  </Layout>
}

export default App

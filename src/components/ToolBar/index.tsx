import { Avatar, Button, Dropdown, Badge, Input, Menu, Space } from '@arco-design/web-react'
import { useNavigate } from 'react-router-dom'
import {
  IconLanguage,
  IconUser,
  IconNotification,
  IconMoon,
  IconSkin,
  IconSettings
} from '@arco-design/web-react/icon'
import styles from './index.module.scss'
const InputSearch = Input.Search

const Toolbar = () => {
  const navigate = useNavigate()
  const handleClick = (key: string) => {
    switch (key) {
      case 'logout':
        localStorage.clear()
        navigate('/login')
        break
    }
  }
  const dropList = (
    <Menu onClickMenuItem={handleClick}>
      <Menu.Item key='logout'>退出</Menu.Item>
    </Menu>
  );
  return <div className={styles.toolbar}>
    <Space size="medium">
      <li>
        <InputSearch allowClear placeholder='请输入关键字' className={styles.search} />
      </li>
      <li>
        <Button shape='circle' icon={<IconLanguage style={{ fontSize: 14 }} />} />
      </li>
      <li>
        <Badge
          count={9}
          dot
          dotStyle={{ width: 6, height: 6 }}
        >
          <Button shape='circle' icon={<IconNotification style={{ fontSize: 14 }} />} />
        </Badge>
      </li>
      <li>
        <Button shape='circle' icon={<IconMoon style={{ fontSize: 14 }} />} />
      </li>
      <li>
        <Button shape='circle' icon={<IconSettings style={{ fontSize: 14 }} />} />
      </li>
      <li>
        <Button shape='circle' icon={<IconSkin style={{ fontSize: 14 }} />} />
      </li>
      <li>
        <Dropdown droplist={dropList} trigger='click' position='br'>
          <Avatar size={32} style={{ backgroundColor: '#3370ff', cursor: 'pointer' }}>
            <IconUser style={{ fontSize: 18 }}/>
          </Avatar>
        </Dropdown>
      </li>
    </Space>
  </div>
}

export default Toolbar

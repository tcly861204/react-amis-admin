import { Avatar, Button, Badge, Input, Space } from '@arco-design/web-react'
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
        <Avatar size={32} style={{ backgroundColor: '#3370ff' }}>
          <IconUser style={{ fontSize: 18 }}/>
        </Avatar>
      </li>
    </Space>
  </div>
}

export default Toolbar

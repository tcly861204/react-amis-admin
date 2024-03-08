import { Menu } from '@arco-design/web-react'
import { useNavigate } from 'react-router-dom'
import {
  IconHome,
  IconApps,
  IconBook,
  IconPalette,
  IconMusic,
  IconFileVideo,
  IconThunderbolt,
  IconImage,
  IconFire,
  IconNav
} from '@arco-design/web-react/icon'
import { useCallback } from 'react';
import useStore from '@/store/layout'
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

type MenuItemType = {
  label: string
  path?: string
  icon?: string
  key: string
  children?: MenuItemType[]
}
interface Props {
  config: MenuItemType[]
}
const Sidebar = ({config}: Props) => {
  const navigate = useNavigate()
  const { collapse } = useStore(state => state)
  const renderIcon = useCallback((icon?: string) => {
    switch(icon) {
      case 'IconApps':
        return <IconApps />
      case 'IconBook':
        return <IconBook />
      case 'IconHome':
        return <IconHome />
      case 'IconPalette':
        return <IconPalette />
      case 'IconMusic':
        return <IconMusic />
      case 'IconFileVideo':
        return <IconFileVideo />
      case 'IconNav':
        return <IconNav />
      case 'IconThunderbolt':
        return <IconThunderbolt />
      case 'IconImage':
        return <IconImage />
      case 'IconFire':
        return <IconFire />
    }
  }, [])
  const onMenuClick = (item: MenuItemType) => {
    if (item.path) {
      navigate(item.path)
    }
  }
  return <Menu
    collapse={collapse}
    defaultOpenKeys={['home']}
    defaultSelectedKeys={[]}
  >
    {
      config.map((item: MenuItemType) => {
        if (item.children && item.children.length) {
          return <SubMenu
            key={item.key}
            title={
              <>
                {renderIcon(item.icon)} {item.label}
              </>
            }
          >
            {
              item.children.map(sub => {
                return <MenuItem key={sub.key} style={{ fontSize: 12 }} onClick={() => onMenuClick(sub)}>{sub.label}</MenuItem>
              })
            }
          </SubMenu>
        } else {
          return <MenuItem key={item.key} onClick={() => onMenuClick(item)}>
            {renderIcon(item.icon)} {item.label}
          </MenuItem>
        }
      })
    }
  </Menu>
}

export default Sidebar
import { HomeOutlined, SnippetsOutlined } from '@ant-design/icons';

const asideMenuConfig = [
  {
    name: '首页',
    path: '/',
    icon: HomeOutlined,
  },
  {
    name: '表单',
    path: '/form',
    icon: SnippetsOutlined,
    children: [
      {
        name: '表单展示模式',
        path: '/app/form/mode',
      },
      {
        name: '表单类型汇总',
        path: '/app/form/full',
      },
      {
        name: '静态展示',
        path: '/app/form/static',
      },
      {
        name: '输入提示',
        path: '/app/form/hint',
      },
    ],
  },
  {
    name: '表格',
    path: '/table',
    icon: SnippetsOutlined,
    children: [
      {
        name: '表格模式',
        path: '/app/crud/table',
      },
    ],
  },
];

export { asideMenuConfig };

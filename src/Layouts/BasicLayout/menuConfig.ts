import { HomeOutlined, SnippetsOutlined } from '@ant-design/icons';

const asideMenuConfig = [
  {
    name: '首页',
    path: '/',
    icon: HomeOutlined,
  },
  {
    name: '表单',
    path: '/app',
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
];

export { asideMenuConfig };

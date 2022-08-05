import { DashboardOutlined, SnippetsOutlined, RadarChartOutlined } from '@ant-design/icons';

const asideMenuConfig = [
  {
    name: '首页',
    path: '/',
    icon: DashboardOutlined,
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
      {
        name: 'fieldset',
        path: '/app/form/fieldset',
      },
      {
        name: 'tabs',
        path: '/app/form/tabs',
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
      {
        name: '表格高度自适应',
        path: '/app/crud/auto-fill',
      },
    ],
  },
  {
    name: '弹窗',
    path: '/dialog',
    icon: SnippetsOutlined,
    children: [
      {
        name: '对话框',
        path: '/app/dialog/simple',
      },
      {
        name: '表格高度自适应',
        path: '/app/dialog/drawer',
      },
    ],
  },
  {
    name: '选项卡',
    path: '/tabs',
    icon: SnippetsOutlined,
    children: [
      {
        name: '常规选项卡',
        path: '/app/tabs/normal',
      },
    ],
  },
  {
    name: '主题编辑器',
    path: '/app/theme',
    icon: SnippetsOutlined,
  },
  {
    name: '图表',
    path: '/app/chart',
    icon: RadarChartOutlined,
  },
  {
    name: '轮播图',
    path: '/app/carousel',
    icon: SnippetsOutlined,
  },
  {
    name: '音频',
    path: '/app/audio',
    icon: SnippetsOutlined,
  },
  {
    name: '视频',
    path: '/app/video',
    icon: SnippetsOutlined,
  },
];

export { asideMenuConfig };

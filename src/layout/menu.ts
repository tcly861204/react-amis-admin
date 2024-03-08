export default [
  {
    label: '首页',
    icon: 'IconHome',
    path: '/',
    key: 'home'
  },
  {
    label: '表单',
    key: 'form',
    icon: 'IconBook',
    children: [
      {
        label: '表单展示模式',
        path: '/app/form/mode',
        key: 'form_mode'
      },
      {
        label: '表单类型汇总',
        path: '/app/form/full',
        key: 'form_full'
      },
      {
        label: '静态展示',
        path: '/app/form/static',
        key: 'form_static',
      },
      {
        label: '输入提示',
        path: '/app/form/hint',
        key: 'form_hint',
      },
      {
        label: 'fieldset',
        path: '/app/form/fieldset',
        key: 'form_fieldset',
      },
      {
        label: 'tabs',
        path: '/app/form/tabs',
        key: 'form_tabs',
      },
    ],
  },
  {
    label: '表格',
    key: 'table',
    icon: 'IconApps',
    children: [
      {
        label: '表格模式',
        path: '/app/crud/table',
        key: 'crud_table'
      },
      {
        label: '表格高度自适应',
        path: '/app/crud/auto-fill',
        key: 'crud_auto-fill'
      },
    ],
  },
  {
    label: '弹窗',
    key: 'dialog',
    icon: 'IconThunderbolt',
    children: [
      {
        label: '对话框',
        path: '/app/dialog/simple',
        key: 'dialog_simple',
      },
      {
        label: '表格高度自适应',
        path: '/app/dialog/drawer',
        key: 'dialog_drawer',
      },
    ],
  },
  {
    label: '选项卡',
    icon: 'IconNav',
    key: 'tabs',
    children: [
      {
        label: '常规选项卡',
        path: '/app/tabs/normal',
        key: 'tabs_normal'
      },
    ],
  },
  {
    label: '主题编辑器',
    path: '/app/theme',
    key: 'theme',
    icon: 'IconPalette',
  },
  {
    label: '图表',
    path: '/app/chart',
    key: 'chart',
    icon: 'IconFire',
  },
  {
    label: '轮播图',
    path: '/app/carousel',
    key: 'carousel',
    icon: 'IconImage',
  },
  {
    label: '音频',
    path: '/app/audio',
    key: 'audio',
    icon: 'IconMusic',
  },
  {
    label: '视频',
    path: '/app/video',
    key: 'video',
    icon: 'IconFileVideo',
  },
]
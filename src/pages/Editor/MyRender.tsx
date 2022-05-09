import { BasePlugin, registerEditorPlugin } from 'amis-editor';

export class MyRendererPlugin extends BasePlugin {
  rendererName = 'my-renderer';

  // 暂时只支持这个，配置后会开启代码编辑器
  $schema = '/schemas/UnkownSchema.json';

  // 用来配置名称和描述
  name = '自定义渲染器';
  description = '这只是个示例';

  // tag，决定会在哪个 tab 下面显示的
  tags = ['功能'];

  // 图标
  icon = 'fa fa-server';

  // 用来生成预览图的
  previewSchema = {
    type: 'my-renderer',
    tip: 'demo',
  };

  // 拖入组件里面时的初始数据
  scaffold = {
    type: 'my-renderer',
    tip: '233',
  };

  // 右侧面板相关
  panelTitle = '自定义组件';
  panelControls = [
    {
      type: 'tabs',
      tabsMode: 'tiled',
      className: 'editor-prop-config-tabs',
      contentClassName: 'no-border p-l-none p-r-none',
      tabs: [
        {
          title: '常规',
          controls: [
            {
              name: 'tip',
              label: '字段名',
              type: 'text',
            },
          ],
        },
        {
          title: '外观',
          controls: [],
        },
        {
          title: '显隐',
          controls: [],
        },
        {
          title: '其他',
          controls: [],
        },
      ],
    },
  ];
}

registerEditorPlugin(MyRendererPlugin);

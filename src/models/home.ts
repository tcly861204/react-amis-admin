export default {
  state: {
    preview: false,
    isMobile: false,
    schema: {
      type: 'page',
      body: [
        {
          type: 'panel',
          title: '图表',
          body: [
            {
              type: 'chart',
              config: {
                xAxis: {
                  type: 'category',
                  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                },
                yAxis: {
                  type: 'value',
                },
                series: [
                  {
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                  },
                ],
              },
              replaceChartOption: true,
              id: 'u:7f12746d834c',
            },
          ],
        },
        {
          type: 'form',
          api: '/api/form',
          body: [
            {
              type: 'input-text',
              name: 'name',
              label: '姓名：',
            },
            {
              name: 'email',
              type: 'input-email',
              label: '邮箱：',
            },
          ],
        },
        {
          type: 'form',
          body: [
            {
              type: 'radios',
              name: 'foo',
              label: false,
              options: [
                {
                  label: '类型1',
                  value: 1,
                },
                {
                  label: '类型2',
                  value: 2,
                },
              ],
            },
            {
              type: 'input-text',
              name: 'text1',
              label: false,
              placeholder: '选中 类型1 时可见',
              visibleOn: '${foo == 1}',
            },
            {
              type: 'input-text',
              name: 'text2',
              label: false,
              placeholder: '选中 类型2 时不可点',
              disabledOn: '${foo == 2}',
            },
          ],
        },
        {
          type: 'form',
          title: '我是自定义组件示例',
          body: {
            type: 'my-renderer',
            tip: '简单示例',
          },
        },
      ],
    },
  },
  reducers: {
    update(prevState, payload) {
      return { ...prevState, ...payload };
    },
  },
};

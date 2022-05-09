import { Component } from 'react';
import { Renderer } from 'amis';

interface Props {
  tip: string;
}

class CustomRenderer extends Component<Props> {
  render() {
    const { tip } = this.props;
    return <div>这是自定义组件：{tip}</div>;
  }
}

export default Renderer({
  type: 'my-renderer',
  autoVar: true, // amis 1.8 之后新增的功能，自动解析出参数里的变量
})(CustomRenderer as any);

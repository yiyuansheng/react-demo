import React from 'react';
import { Layout } from 'antd';
import Aside from './views/layout/aside'
import Head from './views/layout/head'
import Main from './views/layout/main'
// function Home() {
//   return (
//     <div className="home">
//       <Link to="/login">去登录</Link>
//     </div>
//   );
// }
class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      collapsed: false
    }
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount() {
    if (!sessionStorage.login) this.props.history.push('/login')
  }
  render() {
    return (
      <div className="home">
        <Layout>
          {/* 侧边菜单 */}
          <Aside collapsed={this.state.collapsed} />
          <Layout className="site-layout">
            {/* 头部 */}
            <Head toggle={this.toggle.bind(this)}
              history={this.props.history} collapsed={this.state.collapsed}
            />
            {/* 内容 */}
            <Main />
          </Layout>
        </Layout>
      </div>
    )
  }
  onPanelChange(value, mode) {
    console.log(value, mode);
  }
}

export default App;

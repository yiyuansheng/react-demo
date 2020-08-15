import React from 'react';
import { Row, Col, Statistic } from 'antd'
import './index.scss'
import http from '../../utils/http'
import echarts from 'echarts';
import Chart1 from './chart1'
import Chart2 from './chart2'
import Chart3 from './chart3'

import dark from '../../utils/dark'
echarts.registerTheme('my_theme', dark);

// function Home() {
//   return (
//     <div className="home">
//       <Link to="/login">去登录</Link>
//     </div>
//   );
// }
class Home extends React.Component {
  constructor(props) {
    super()
    this.state = {
      xData1: [],
      seriesData1: []
    }
  }
  componentDidMount() {
    let date = new Date()
    let month = date.getMonth() + 1
    let i = 6
    let xData1 = []
    while (i > 0) {
      if (month === 0) month = 12
      xData1.unshift(`${month}月`)
      month--
      i--
    }
    this.setState({
      xData1,
    })
    this.loadData()
  }
  loadData() {
    http({
      url: '/api/user/chart',
    })
      .then(res => {
        this.setState({
          seriesData1: res.data
        })
      })
  }
  render() {
    var { xData1, seriesData1 } = this.state
    return (
      <div className="home">
        <Row gutter={18}>
          <Col className="gutter-row" span={6}>
            <div className="card">
              <Statistic title="访问量" value={112893} />
              <div className="bd-t mv-2x"></div>
              <p>日访问量 123</p>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="card">
              <Statistic title="用户数" value={112893} />
              <div className="bd-t mv-2x"></div>
              <p>新注册 123</p>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="card">
              <Statistic title="照片" value={112893} />
              <div className="bd-t mv-2x"></div>
              <p>新增 123</p>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="card">
              <Statistic title="音乐" value={112893} />
              <div className="bd-t mv-2x"></div>
              <p>听歌 11</p>
            </div>
          </Col>
        </Row>

        <Chart1 />

        <div className="flex-between">
          <Chart2 xData1={xData1} seriesData1={seriesData1} />
          <div className="ph-1x"></div>
          <Chart3 />
        </div>
      </div>
    )
  }
}

export default Home;

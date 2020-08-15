import React from 'react';
import './index.scss'
import echarts from 'echarts';
import ReactEcharts from "echarts-for-react";
import dark from '../../utils/dark'
echarts.registerTheme('my_theme', dark);

class Chart1 extends React.Component {
    constructor() {
        super()
        this.state = {
            option: {}
        }
    }
    componentDidMount() {
        let date = new Date()
        let month = date.getMonth() + 1
        let i = 12
        let xData1 = []
        while (i > 0) {
            if (month === 0) month = 12
            xData1.unshift(`${month}月`)
            month--
            i--
        }
        this.setState({
            option: {
                xAxis: {
                    type: 'category',
                    data: xData1
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [326,369,589,320,856,1400,1325,1020,658,985,412,542],
                    type: 'bar'
                }],
                tooltip: {},
                barCategoryGap: '40%',
            }
        })
    }
    render() {
        const { option } = this.state
        return (
            <div className="mt-2x">
                <div className="box flex-between bd-b font-l">
                    <p>访问量</p>
                    <div className="flex-start times">
                        <p className="ph-1x">7天</p>
                        <p className="ph-1x">30天</p>
                        <p className="ph-1x">6个月</p>
                        <p className="ph-1x primary">12个月</p>
                    </div>
                </div>
                <ReactEcharts
                    option={option}
                    style={{ width: '100%', height: '500px' }}
                    theme='my_theme'
                />
            </div>
        )
    }
}

export default Chart1;

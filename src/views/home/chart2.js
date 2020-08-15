import React from 'react';
import './index.scss'
import echarts from 'echarts';
import ReactEcharts from "echarts-for-react";
import dark from '../../utils/dark'
echarts.registerTheme('my_theme', dark);

class Chart1 extends React.Component {
    render() {
        const option = {
            xAxis: {
                type: 'category',
                data: this.props.xData1
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: this.props.seriesData1,
                type: 'line'
            }],
            tooltip: {},
            grid: {
                left: '25%',
                right: '0'
            }
        }
        return (
            <div className="mt-2x flex-grow bg-primary">
                <div className="box flex-between bd-b font-l">
                    <p>新用户</p>
                    <div className="flex-start times">
                        <p className="ph-1x">7天</p>
                        <p className="ph-1x">30天</p>
                        <p className="ph-1x primary">6个月</p>
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

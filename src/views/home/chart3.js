import React from 'react';
import './index.scss'
import echarts from 'echarts';
import ReactEcharts from "echarts-for-react";
import dark from '../../utils/dark'
echarts.registerTheme('my_theme', dark);

class Chart2 extends React.Component {
    constructor() {
        super()
        this.state = {
            option: {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: '25%',
                    top: '35%',
                    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '微信分享']
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            {value: 632, name: '直接访问'},
                            {value: 234, name: '邮件营销'},
                            {value: 365, name: '联盟广告'},
                            {value: 520, name: '视频广告'},
                            {value: 1000, name: '搜索引擎'},
                            {value: 800, name: '微信分享'},
                        ],
                        left: '50%'
                    }
                ],
            }
        }
    }
    render() {
        const { option } = this.state
        return (
            <div className="mt-2x flex-grow bg-primary">
                <div className="box flex-between bd-b font-l">
                    <p>访问来源</p>
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

export default Chart2;

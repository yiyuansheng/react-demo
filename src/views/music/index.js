import React, { Component } from 'react'
import './index.scss'
import fetchJsonp from 'fetch-jsonp'
import { Table, Select } from 'antd';
const { Option } = Select;

// const { Column, ColumnGroup } = Table;

class MusicList extends Component {
    constructor() {
        super()
        this.state = {
            lists: [],
            loading: false
        }
    }
    componentDidMount() {
        this.loadData(1)
    }
    loadData(i) {
        this.setState({
            loading: true
        })
        fetchJsonp(`http://tingapi.ting.baidu.com/v1/restserver/ting?xml&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=${i}&size=100&offset=0`, {
            method: 'get'
        }).then(res => {
            return res.json()
        }).then(data => {
            // console.log(data);
            var arr = [];
            for (var i = 0; i < data.song_list.length; i++) {
                arr.push({
                    key: i,
                    index: i + 1,
                    title: data.song_list[i].title,
                    author: data.song_list[i].author,
                    pic: data.song_list[i].pic_small
                })
            };
            this.setState({
                lists: arr,
                loading: false
            })

        }).catch(error => {
            this.setState({
                loading: false
            })
        })
    }
    handleChange(val) {
        this.loadData(val)
    }
    render() {
        const columns = [
            {
                title: '序号',
                dataIndex: 'index',
                key: 'index',
            },
            {
                title: '歌曲名',
                dataIndex: 'title',
                key: 'title',
            },
            {
                title: '歌手',
                dataIndex: 'author',
                key: 'author',
            },
            {
                title: '封面',
                dataIndex: 'pic',
                key: 'pic',
                render: (text, record) => (<img src={record.pic} alt="" />)
            }
        ];
        return (
            <div>
                <Select defaultValue="1" style={{ width: 120 }} onChange={this.handleChange.bind(this)}>
                    <Option value="1">新歌榜</Option>
                    <Option value="2">热歌榜</Option>
                    <Option value="11">摇滚榜</Option>
                    <Option value="12">爵士</Option>
                    <Option value="16">流行</Option>
                </Select>
                <Table columns={columns} dataSource={this.state.lists} scroll={{ y: 700 }} loading={this.state.loading} />
            </div>
        )
    }
}

export default MusicList
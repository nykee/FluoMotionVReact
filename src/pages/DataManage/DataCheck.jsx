import React from 'react';
import { Table ,Button} from 'antd';



class DataCheck extends React.Component {



    render() {
        const columns = [{
            title: '姓名',
            dataIndex: 'name',

            // specify the condition of filtering result
            // here is that finding the name started with `value`

            sorter: (a, b) => a.name.length - b.name.length,
        }, {
            title: '年龄',
            dataIndex: 'age',
            sorter: (a, b) => a.age - b.age,
        }, {
            title: '手术前后类型',
            dataIndex: 'sType',
            filters: [{
                text: '术前',
                value: '术前',
            }, {
                text: '术后',
                value: '术后',
            }],
            filterMultiple: false,
            onFilter: (value, record) => record.sType.indexOf(value) === 0,
            sorter: (a, b) => a.sType.length - b.sType.length,
        },{
            title:'病种类型',
            dataIndex: 'dType',
            filters: [{
                text: 'ACLBefore',
                value: 'ACLBefore',
            }, {
                text: 'ACLAfter',
                value: 'ACLAfter',
            },
                {
                    text: '关节炎',
                    value: '关节炎',
                },
                {
                    text: '半月板断裂',
                    value: '半月板断裂',
                },
            ],
            filterMultiple: false,
            onFilter: (value, record) => record.dType.indexOf(value) === 0,
            sorter: (a, b) => a.dType.length - b.dType.length,
        },
            {
                title:'状态',
                dataIndex: 'status',
                filters: [{
                    text: '上传失败',
                    value: '上传失败',
                }, {
                    text: '上传中',
                    value: '上传中',
                },
                    {
                        text: '上传完成',
                        value: '上传完成',
                    },
                ],
                filterMultiple: false,
                onFilter: (value, record) => record.status.indexOf(value) === 0,
                sorter: (a, b) => a.status.length - b.status.length,
            },
            {
                title:'操作',
                dataIndex: 'operation',
                render:()=>{
                    return (<Button type="primary">查看</Button>)
                }
            }

        ];

        const data = [{
            key: '1',
            name: '张三',
            age: 32,
            sType: '术前',
            dType: 'ACLBefore',
            status:"上传中"
        }, {
            key: '2',
            name: '李四',
            age: 42,
            sType: '术后',
            dType: 'ACLAfter',
            status:"上传失败"
        }, {
            key: '3',
            name: '王五',
            age: 22,
            sType: '术后',
            dType: '关节炎',
            status:"上传完成"
        }, {
            key: '4',
            name: '赵六',
            age: 31,
            sType: '术前',
            dType: '半月板断裂',
            status:"上传中"
        },
        ];

        function onChange(pagination, filters, sorter) {
            console.log('params', pagination, filters, sorter);
        }
        return (
            <Table bordered columns={columns} dataSource={data} onChange={onChange} />

        )
    }
}

export default DataCheck;
import React from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;


class PatientBasicInfoForm extends React.Component {
    state = {

    };
    handleSubmit = (e) => {

    }
    handleConfirmBlur = (e) => {

    }





    render() {


        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        };





        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="姓名"
                    hasFeedback
                >
                        <Input placeholder="请输入病例姓名"/>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="病种类型"
                    hasFeedback
                >
                    <Select  placeholder="请选择病种类型">
                        <Option value="ACLbefore">ACL术前</Option>
                        <Option value="ACLafter">ACL术后</Option>
                        <Option value="GJY">关节炎</Option>
                    </Select>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="手术前后选择"
                    hasFeedback
                >
                    <Select  placeholder="请选择手术前后类型">
                        <Option value="beforeS">术前</Option>
                        <Option value="afterS">术后</Option>
                    </Select>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="备注"
                    hasFeedback
                >
                    <TextArea row={4}/>
                </FormItem>




            </Form>
        );
    }
}



export default PatientBasicInfoForm;
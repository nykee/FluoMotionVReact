import React from 'react';
import { Form, Select} from 'antd'
const Option = Select.Option;

const FormItem = Form.Item;
class PlateLocationForm extends React.Component {
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
                    label="方板定位器防止方法"
                    hasFeedback
                >
                    <Select  placeholder="请选择方板定位器防止方法">
                        <Option value="hor">横放</Option>
                        <Option value="ver">竖放</Option>
                    </Select>
                </FormItem>





            </Form>

        )
    }
}

export default PlateLocationForm;
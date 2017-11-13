import React from 'react';
import { Form, Select, Upload, Button, Icon} from 'antd'

const Option = Select.Option;
const FormItem = Form.Item;

class PatientFileUploadForm extends React.Component {
    state = {
        fileList: [{
            uid: -1,
            name: '',
            status: 'done',
            url: '',
        }],
    }
    render() {


        const props = {
            action: '',
            onChange: this.handleChange,
            multiple: true,
        };

        return (
            <Upload {...props} fileList={this.state.fileList}>
                <Button>
                    <Icon type="upload" /> upload
                </Button>
            </Upload>

        )
    }
}

export default PatientFileUploadForm;
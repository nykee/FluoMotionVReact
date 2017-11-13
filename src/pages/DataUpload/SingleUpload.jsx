import React from 'react';
import { Steps, Button, message } from 'antd';
import PatientBasicInfoForm from '../../components/SingelUpload/PatientBasicInfoForm'
import PlateLocationForm from '../../components/SingelUpload/PlateLocationForm'
import PatientFileUploadForm from '../../components/SingelUpload/PatientFileUploadForm'
const Step = Steps.Step;

const steps = [{
    title: '步骤1',
    content: '输入病例基本信息',
}, {
    title: '步骤2',
    content: '选择方板防止位置',
}, {
    title: '步骤三',
    content: '上传病例文件',
}];



class UploadOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
    }
    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }
    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }
    render() {
        const { current } = this.state;
        return (
            <div>
                <Steps current={current}>
                    {steps.map(item => <Step key={item.title} title={item.title} />)}
                </Steps>
                <div className="steps-content">{steps[this.state.current].content}</div>

                <div>
                    {
                        this.state.current === 0
                        &&
                        <PatientBasicInfoForm></PatientBasicInfoForm>
                    }
                    {
                        this.state.current === 1
                        &&
                        <PlateLocationForm></PlateLocationForm>

                    }
                    {
                        this.state.current === 2
                        &&
                        <PatientFileUploadForm></PatientFileUploadForm>

                    }
                </div>
                <div className="steps-action">
                    {
                        this.state.current < steps.length - 1
                        &&
                        <Button type="primary" onClick={() => this.next()}>下一步</Button>
                    }
                    {
                        this.state.current === steps.length - 1
                        &&
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
                    }
                    {
                        this.state.current > 0
                        &&
                        <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                            上一步
                        </Button>
                    }
                </div>
            </div>
        );
    }
}

export default UploadOne;
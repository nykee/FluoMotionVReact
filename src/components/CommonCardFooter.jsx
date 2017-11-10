import React from 'react';

class CommonCardFooter extends React.Component {
    constructor(){
        super();
        this.state={
            hover:false
        };
        this.onMouseEnter =this.onMouseEnter.bind(this)
        this.onMouseLeave =this.onMouseLeave.bind(this)
    }
    onMouseEnter(){
        this.setState({
            hover: true,
        });
    }
    onMouseLeave(){
        this.setState({
            hover: false,
        })
    }


    render() {
        let fr={
            float:'right',

        };
        let onHover ={
            cursor:'pointer',
            color:'#6CC788'
        };
        return (
            <div className={this.state.hover?onHover:''}>
                <span className="moreInfo " style={fr}><i className="fa fa-angle-double-right fa-lg "></i>更多</span>
            </div>

        )
    }
}

export default CommonCardFooter;
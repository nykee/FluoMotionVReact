import React from 'react';

class CustomCardSum extends React.Component {

    constructor() {
        super();
        this.state={
            hover:false
        };
        this.onMouseEnter =this.onMouseEnter.bind(this);
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
        let sumHoverStyle =this.state.hover?{color:'#20A0FF', cursor:'pointer'}:{};
        return (
            <h2 style={sumHoverStyle} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>{this.props.sum}</h2>
        )
    }
}

export default CustomCardSum;
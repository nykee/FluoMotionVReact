import React from 'react';

class CommonCardHeader extends React.Component {
    constructor() {
        super();
        this.state ={
            hover:false
        };
        this.onMouseEnter =this.onMouseEnter.bind(this);
        this.onMouseLeave =this.onMouseLeave.bind(this);
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
        let clearFix ={
            display:'block',visibility:'hidden',clear:'both',height:0,content:'.',fontSize:0
        };
        let fl={
            float:'left',
            fontSize:18,
            fontWeight:'bold'
        };
        let refreshStyle= this.state.hover?{float:'right',cursor:'pointer',fontSize:18,color:'#6CC788'}:{float:'right',fontSize:18};
        return (
            <div className="card-top" style={{marginBottom:'1rem'}}>
                <h3 style={fl}>{this.props.title}</h3>
                <i className="fa fa-refresh" style={refreshStyle} onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter}></i>
                <span style={clearFix}></span>
            </div>


        )
    }
}

export default CommonCardHeader;
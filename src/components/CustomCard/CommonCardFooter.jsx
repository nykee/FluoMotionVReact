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


        let moreInfoStyle =this.state.hover?{float:'right',cursor:'pointer', color:'#6CC788'}:{float:'right'};
        return (
            <div style={{marginTop:'1.2rem'}}>
                <span className="moreInfo " style={moreInfoStyle} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                    <i className="fa fa-angle-double-right fa-lg "></i>更多
                </span>
            </div>

        )
    }
}

export default CommonCardFooter;
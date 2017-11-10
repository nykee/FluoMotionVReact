import React from 'react';

class CommonCardHeader extends React.Component {
    render() {
        let clearFix ={
            display:'block',visibility:'hidden',clear:'both',height:0,content:'.',fontSize:0
        };
        let fr={
            float:'right'
        };
        let fl={
            float:'left'
        };
        return (
            <div className="card-top">
                <h3 style={fl}>{this.props.title}</h3>
                <i className="fa fa-refresh" style={fr}></i>
                <span style={clearFix}></span>
            </div>


        )
    }
}

export default CommonCardHeader;
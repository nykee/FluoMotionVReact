import React from 'react';

class HelpContainer extends React.Component {
    render() {
        return (
            <div style={{height:'80%',marginTop:'1.5rem'}}>{this.props.children}</div>

        )
    }
}

export default HelpContainer;
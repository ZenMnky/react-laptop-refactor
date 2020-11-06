import React, { Component } from 'react';

class CustomizeFeatures extends Component{
    render(){
        let {features} = this.props;
        return(
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        );
    }
}

export default CustomizeFeatures;
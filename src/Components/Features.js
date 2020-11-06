import React, { Component } from 'react';
import CustomizeFeatures from './CustomizeFeatures';

class Features extends Component{
    render(){
        let {features} = this.props;
        return(
            <CustomizeFeatures features={features} />
        );
    }
}

export default Features;
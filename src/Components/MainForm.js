import React, { Component } from 'react';
import Features from './Features';

class MainForm extends Component{
    render(){
        let {features} = this.props;
        return(
            <Features features={features}/>
        );
    }
}

export default MainForm;
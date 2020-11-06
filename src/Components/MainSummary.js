import React, { Component } from 'react';
import SummaryOptions from './SummaryOptions';
import SummaryTotal from './SummaryTotal';

class MainSummary extends Component{
    render(){
        const {summary, USCurrencyFormat, total } = this.props;
        return(
            <section className="main__summary">
                <h2>Your cart</h2>
                <SummaryOptions summary={summary} />
                <SummaryTotal 
                    USCurrencyFormat={USCurrencyFormat}
                    total={total}
                />
          </section>
        );
    }
}

export default MainSummary;
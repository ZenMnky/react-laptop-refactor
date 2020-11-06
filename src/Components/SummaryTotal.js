import React from 'react';

const SummaryTotal = (props) => {
    const {USCurrencyFormat, total} = props;
    return(
        <div className="summary__total">
            <div className="summary__total__label">
                Total
            </div>
            <div className="summary__total__value">
                {USCurrencyFormat.format(total)}
            </div>
        </div>
    )
}

export default SummaryTotal;
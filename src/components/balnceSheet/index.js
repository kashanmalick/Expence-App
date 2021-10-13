import './css/style.css'
import * as React from 'react';


function BalanceSheet(props) {
  return (
    <div>
      <div>
        <p className="colour">Your Balance</p>
        <h1>{props.sign}<span>{props.curr}</span></h1>
      </div>
    </div>

  )
}

export default BalanceSheet;

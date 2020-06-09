import React from "react"
import Total from './Total'




export default function Summary(props){



Object.keys(props.state.selected).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
   
      const selectedOption = this.state.selected[feature];

    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {props.USCurrencyFormat.format(selectedOption.cost)}
        </div>
     
        <div className="summary__total">

            <Total
                USCurrencyFormat= {props.USCurrencyFormat}
                total={this.total}
        
            />

        </div> 
        </div>)
}
     
)
const total = Object.keys(props.state.selected).reduce(
    (acc, curr) => acc + props.state.selected[curr].cost,
    0
  );
}

    
   



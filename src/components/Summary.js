import React from "react";
import Total from "./Total";
import Option from "./Option"



export default function Summary(props) {
  const total = Object.keys(props.selected).reduce(
    (acc, curr) => acc + props.selected[curr].cost,
    0
  );

  const selected = Object.keys(props.selected).map((feature, idx) => {
    const featureHash = feature + "-" + idx;

    const selectedOption = props.selected[feature];

    return (
     <Option
      featureHash= {featureHash}
      selectedOption = {selectedOption}
      feature = {props.feature}
     
     
     />
    );
  });

  return (
    <>
      {selected}
      <div className="summary__total">
        <Total total={total} />
      </div>
    </>
    
  );
}

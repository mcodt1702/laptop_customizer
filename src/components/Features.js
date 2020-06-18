import React from "react";
import slugify from "slugify";
import FeatureName from './FeatureName'
import Item from './Item'

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function Features(props) {
  let features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const options = props.features[feature].map((computer) => {
      const itemHash = slugify(JSON.stringify(computer));


      return (
        
      <div>
          <Item 
        itemHash = {itemHash}
        feature = {feature}
        computer = {computer}
        idx = {idx}
        selected = {props.selected}
        updateFeature = {props.updateFeature}
        />

          <label htmlFor={itemHash} className="feature__label">
            {computer.name} ({USCurrencyFormat.format(computer.cost)})
          </label>
      </div> 
      
        
      );
    });
    return(
        <FeatureName
         feature={feature}
        options={options}
       
        />)
  });

  return features;
}

import React from "react";
import slugify from "slugify";
import FeatureName from './FeatureName'

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function Features(props) {
  let features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const options = props.features[feature].map((item) => {
      const itemHash = slugify(JSON.stringify(item));

      return (
        <div key={itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(feature)}
            checked={item.name === props.selected[feature].name}
            onChange={(e) => props.updateFeature(feature, item)}
          />
          <label htmlFor={itemHash} className="feature__label">
            {item.name} ({USCurrencyFormat.format(item.cost)})
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

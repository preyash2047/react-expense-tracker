import React from 'react';

import AbbreviateNumber from '../../Utils/AbbreviateNumber';
import './Axis.css';

const Axis = (props) => {
  const axisValues = [
    AbbreviateNumber(Math.round(props.maxValues)),
    AbbreviateNumber(Math.round(props.maxValues / 2)),
    0,
  ];
  return (
    <div className="chart-axis">
      {axisValues.map((axisValue) => (
        <div className="chart-axis__value">{axisValue}</div>
      ))}
      <div className="chart-axis__label">Scale</div>
    </div>
  );
};

export default Axis;

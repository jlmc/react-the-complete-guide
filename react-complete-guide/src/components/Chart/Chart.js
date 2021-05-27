import React from 'react';

import './Chart.css';
import ChartBar from './ChartBar';

const Chart = props => {
  //[{value:123, label: 'abc'}]
  let dataPoints = props.dataPoints;

  let values = dataPoints.map(dataPoint => dataPoint.value);
  let max = Math.max(...values);

  return (
    <div className="chart">
      {dataPoints.map(dataPoint => (
        <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={max} label={dataPoint.label} />
      ))}
    </div>
  );
};

export default Chart;

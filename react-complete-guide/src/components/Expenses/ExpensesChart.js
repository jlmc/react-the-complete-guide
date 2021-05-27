import Chart from '../Chart/Chart';

const ExpensesChart = props => {
  const chartDataPoints = [
    { label: 'Jan', value: 0.0 },
    { label: 'Feb', value: 0.0 },
    { label: 'Mar', value: 0.0 },
    { label: 'Apr', value: 0.0 },
    { label: 'May', value: 0.0 },
    { label: 'Jun', value: 0.0 },
    { label: 'Jul', value: 0.0 },
    { label: 'Aug', value: 0.0 },
    { label: 'Sep', value: 0.0 },
    { label: 'Oct', value: 0.0 },
    { label: 'Nov', value: 0.0 },
    { label: 'Dec', value: 0.0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
    let value = expense.price === undefined || Number.isNaN(expense.price) ? 0 : expense.price;
    //console.log(expenseMonth + "----" + value)

    chartDataPoints[expenseMonth].value += value;
  }

  //console.log(props.expenses)
  //console.log(chartDataPoints)

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;

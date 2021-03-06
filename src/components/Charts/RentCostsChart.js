import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useFormatter } from '../../components/Money';
import { getMonthlyRentCosts } from '../../state/values/selectors';
import { useSelector } from 'react-redux';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

export default function RentCostChart() {
  const classes = useStyles()
  const theme = useTheme()

  const monthlyRentCosts = useSelector(getMonthlyRentCosts)

  const moneyFormatter = useFormatter()
  const costFormatter = (item) => {
    return moneyFormatter(item)
  }
  const yearFormatter = month => month / 12
  return (

    <div className={classes.chartContainer}>
      <AreaChart width={600}
                 height={300}
                 data={monthlyRentCosts}
                 margin={{ top: 5, right: 20, bottom: 5, left: 20 }}>
        <Area
          stackId={1}
          dot={false}
          name="Initial cost"
          dataKey="initialCost"
          tickFormatter={costFormatter}
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          stackId={1}
          dot={false}
          stroke="#82ca9d"
          fill="#82ca9d"
          name="Rent cost"
          dataKey="rentCost"
          tickFormatter={costFormatter}/>
        <Area
          stackId={1}
          dot={false}
          name="Opportunity cost"
          dataKey="opportunityCost"
          tickFormatter={costFormatter}
          stroke={theme.palette.buy.main}
          fill={theme.palette.buy.main}/>
        <CartesianGrid
          stroke={theme.palette.text.hint}
          strokeDasharray="5 5"/>
        <XAxis
          stroke={theme.palette.text.hint}
          dataKey="month"
          tickFormatter={yearFormatter}
          tickSize={5}/>
        <YAxis
          stroke={theme.palette.text.hint}
          tickFormatter={costFormatter}/>
        <Tooltip
          tickFormatter={yearFormatter}
          formatter={costFormatter}/>
      </AreaChart>
    </div>
  );
}


const useStyles = makeStyles(theme => ({
  chartContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: theme.spacing(2, 4)
  }
}))
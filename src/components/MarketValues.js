import React from 'react'
import ConnectedTextField from './ConnectedTextField';
import ValueCollection from './ValueCollection';

export default function MarketValues({ values }) {
  return (
    <ValueCollection>
      <ConnectedTextField
        valueKey="savingsInterest"
        label="Savings interest"
        type='percent'
        step={0.01}
        max={10}
      />
      <ConnectedTextField
        label="House growth"
        valueKey={'houseGrowth'}
        type='percent'
        step={0.01}
        max={10}
      />
    </ValueCollection>
  )
}
import 'antd/dist/antd.css'
import React from 'react'
import { render } from 'react-dom'
import { DateSelect } from './js/dateSelect'
const startData = {
  name: 'us_visa_expiration',
  type: 'datePickerGroup',
  label: 'Expiration of U.S. visa',
  fields: [
    {
      name: 'us_visa_expiration_month',
      nameBlock: 'us_visa_expiration',
      type: 'datePicker',
      label: 'Month',
      optionalField: true,
      min: '2', // can be 'today'
      max: '12', // can be 'today' , maximum 12
    },
    {
      name: 'us_visa_expiration_day',
      nameBlock: 'us_visa_expiration',
      type: 'datePicker',
      label: 'Date',
      optionalField: true,
      min: '3', // can be 'today'
      max: 'today', // can be 'today'
    },
    {
      name: 'us_visa_expiration_year',
      nameBlock: 'us_visa_expiration',
      type: 'datePicker',
      label: 'Year',
      optionalField: true,
      min: '1996', // can be 'today'
      max: 'today', // can be 'today'
    },
  ],
}
const types = {
  YEAR: 'Year',
  DATE: 'Date',
  MONTH: 'Month',
}
const App = () => {
  const newObj = {}
  const currentDate = new Date()
  startData.fields.forEach(({ label, min, max, name }) => {
    const res = {
      name,
      min,
      max,
    }
    switch (label) {
      case types.YEAR:
        newObj.year = res
        if (max === 'today') newObj.year.max = currentDate.getFullYear()
        if (min === 'today') newObj.year.min = currentDate.getFullYear()
        break
      case types.MONTH:
        newObj.month = res
        if (max === 'today') newObj.month.max = currentDate.getMonth() + 1
        if (min === 'today') newObj.month.min = currentDate.getMonth() + 1
        break
      case types.DATE:
        newObj.date = res
        if (max === 'today') newObj.date.max = currentDate.getDate()
        if (min === 'today') newObj.date.min = currentDate.getDate()
        break

      default:
        break
    }
  })

  return (
    <div style={{ width: 400, margin: '0 auto', padding: '100px 20px 0' }}>
      <DateSelect year={newObj.year} month={newObj.month} date={newObj.date} />
    </div>
  )
}

render(<App />, document.getElementById('root'))

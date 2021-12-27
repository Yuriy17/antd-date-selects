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
      min: '2',
      max: '10',
    },
    {
      name: 'us_visa_expiration_day',
      nameBlock: 'us_visa_expiration',
      type: 'datePicker',
      label: 'Date',
      optionalField: true,
      min: '3',
      max: '25',
    },
    {
      name: 'us_visa_expiration_year',
      nameBlock: 'us_visa_expiration',
      type: 'datePicker',
      label: 'Year',
      optionalField: true,
      min: '1996',
      max: '2019',
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
  startData.fields.forEach(({ label, min, max, name }) => {
    const res = {
      name,
      min,
      max,
    }
    switch (label) {
      case types.YEAR:
        newObj.year = res
        break
      case types.MONTH:
        newObj.month = res
        break
      case types.DATE:
        newObj.date = res
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

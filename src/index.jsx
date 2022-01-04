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
      defaultValue: '4',
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
  const { fields } = startData
  const currentDate = new Date()

  const setToday = (property, label) => {
    let res = ''
    if (property === 'today') {
      switch (label) {
        case types.YEAR:
          res = currentDate.getFullYear()
          break
        case types.MONTH:
          res = currentDate.getMonth() + 1
          break
        case types.DATE:
          res = currentDate.getDate()
          break
      }
    } else {
      res = property
    }
    return +res
  }
  const newFields = fields.map(({ label, min, max, name, defaultValue }) => ({
    label,
    min: setToday(min, label),
    max: setToday(max, label),
    name,
    defaultValue,
  }))

  return (
    <div style={{ width: 400, margin: '0 auto', padding: '100px 20px 0' }}>
      <DateSelect fields={newFields} />
    </div>
  )
}

render(<App />, document.getElementById('root'))

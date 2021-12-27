// // Test import of a JavaScript module
// import { example } from '@/js/example'

// // Test import of an asset
// import webpackLogo from '@/images/webpack-logo.svg'

// // Test import of styles
// import '@/styles/index.scss'

// // Appending to the DOM
// const logo = document.createElement('img')
// logo.src = webpackLogo

// const heading = document.createElement('h1')
// heading.textContent = example()

// // Test a background image url in CSS
// const imageBackground = document.createElement('div')
// imageBackground.classList.add('image')

// // Test a public folder asset
// const imagePublic = document.createElement('img')
// imagePublic.src = '/assets/example.png'

// const app = document.querySelector('#root')
// app.append(logo, heading, imageBackground, imagePublic)

import 'antd/dist/antd.css'
import React from 'react'
import { render } from 'react-dom'
import { DateSelect } from './js/dateSelect'
// import './index.css'
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
      min: '',
      max: '10',
    },
    {
      name: 'us_visa_expiration_day',
      nameBlock: 'us_visa_expiration',
      type: 'datePicker',
      label: 'Date',
      optionalField: true,
      min: '',
      max: '',
    },
    {
      name: 'us_visa_expiration_year',
      nameBlock: 'us_visa_expiration',
      type: 'datePicker',
      label: 'Year',
      optionalField: true,
      min: '',
      max: '',
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
        //year.options = optionsArrayFromMinMax(min || 2000, max || new Date().getFullYear())
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
  console.log('🚀 ~ file: index.jsx ~ line 99 ~ App ~ newObj', newObj)
  return (
    <div style={{ width: 400, margin: '0 auto', padding: '100px 20px 0' }}>
      <DateSelect year={newObj.year} month={newObj.month} date={newObj.date} />
    </div>
  )
}

render(<App />, document.getElementById('root'))

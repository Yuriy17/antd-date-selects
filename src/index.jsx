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
import { Date } from './js/date'
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
    },
    {
      name: 'us_visa_expiration_day',
      nameBlock: 'us_visa_expiration',
      type: 'datePicker',
      label: 'Date',
      optionalField: true,
    },
    {
      name: 'us_visa_expiration_year',
      nameBlock: 'us_visa_expiration',
      type: 'datePicker',
      label: 'Year',
      optionalField: true,
      min: '1996',
      max: '2020',
    },
  ],
}

const App = () => (
  <div style={{ width: 400, margin: '100px auto' }}>
    <Date data={startData} />
  </div>
)

render(<App />, document.getElementById('root'))

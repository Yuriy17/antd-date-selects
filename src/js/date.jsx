import { Col, Input, Row, Select } from 'antd'
import React, { useEffect, useState } from 'react'
const { Option } = Select

const types = {
  YEAR: 'Year',
  DATE: 'Date',
  MONTH: 'Month',
}
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
// const months = {
//   JANUARY: 'January',
//   FEBRUARY: 'February',
//   MARCH: 'March',
//   APRIL: 'April',
//   MAY: 'May',
//   JUNE: 'June',
//   JULY: 'July',
//   AUGUST: 'August',
//   SEPTEMBER: 'September',
//   OCTOBER: 'October',
//   NOVEMBER: 'November',
//   DECEMBER: 'December',
// }
// const getSelect = ({ name, type, max, min }) => {
//   const { YEAR, DATE, MONTH } = types
//   const currentDate = new Date()
//   let selectOptions = []

//   switch (type) {
//     case YEAR:
//       for (let i = +(min || 2000); i <= +(max || currentDate.getFullYear()); i += 1) {
//         selectOptions.push(
//           <Option key={i} value={i}>
//             {i}
//           </Option>
//         )
//       }
//       break
//     case MONTH:
//       forEach((month) =>
//         selectOptions.push(
//           <Option key={month} value={month}>
//             {month}
//           </Option>
//         )
//       )
//       break
//     case DATE:
//       selectOptions
//       break

//     default:
//       break
//   }
//   return (
//     <Select defaultValue="lucy" style={{ width: 120 }}>
//       <Option value="jack">Jack</Option>
//       <Option value="lucy">Lucy</Option>
//       <Option value="disabled" disabled>
//         Disabled
//       </Option>
//       <Option value="Yiminghe">yiminghe</Option>
//     </Select>
//   )
// }
const optionsArrayFromMinMax = (min, max, arr) => {
  const newArr = []
  for (let i = +min; i <= +max; i += 1) {
    const value = arr && arr.length ? arr[i] : i
    newArr.push(
      <Option key={value} value={value}>
        {value}
      </Option>
    )
  }
  return newArr
}
export const Date = ({ data }) => {
  // const {
  //   JANUARY,
  //   FEBRUARY,
  //   MARCH,
  //   APRIL,
  //   MAY,
  //   JUNE,
  //   JULY,
  //   AUGUST,
  //   SEPTEMBER,
  //   OCTOBER,
  //   NOVEMBER,
  //   DECEMBER,
  // } = months
  const { fields } = data
  console.log('🚀 ~ file: date.jsx ~ line 64 ~ Date ~ fields', fields)
  const [currentDate, setCurrentDate] = useState()
  const [currentDateOptions, setCurrentDateOptions] = useState(optionsArrayFromMinMax(1, 31))
  console.log('🚀 ~ file: date.jsx ~ line 82 ~ Date ~ currentDateOptions', currentDateOptions)
  const [currentMonth, setCurrentMonth] = useState()
  const [currentYear, setCurrentYear] = useState()
  //const currentDate = new Date();

  const date = {}
  const year = {}
  const month = {
    options: optionsArrayFromMinMax(0, months.length - 1, months),
  }

  fields.forEach(({ label, min, max, name }) => {
    switch (label) {
      case types.YEAR:
        year.options = optionsArrayFromMinMax(min || 2000, max || currentDate.getFullYear())
        year.name = name

        break
      case types.MONTH:
        month.name = name
        break
      case types.DATE:
        date.name = name
        break

      default:
        break
    }
  })
  // const selects = data && data.length && data.map((item) => (
  //   <Col span={8}>
  //     {getSelect(item)}
  //   </Col>
  // ));
  useEffect(() => {
    // effect
    // return () => {
    //   cleanup
    // }
    //if (currentMonth === FEBRUARY) {
    if (currentYear && currentMonth) {
      const isLeapYear = new Date(currentYear, 1, 29).getMonth() == 1 ? true : false
      const monthInex = month.indexOf(currentMonth)
      const days = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      // setCurrentDateOptions(optionsArrayFromMinMax(1, days[monthInex]))
      // console.log(currentDateOptions)
    }

    //}
  }, [currentYear, currentMonth])
  return (
    <Input.Group size="large">
      <Row>
        <Col span={8}>
          <Select
            name={month.name}
            onChange={(value) => setCurrentMonth(value)}
            showSearch
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            style={{ width: 120 }}
          >
            {month.options}
          </Select>
        </Col>
        <Col span={8}>
          <Select
            name={date.name}
            onChange={(value) => setCurrentDate(value)}
            showSearch
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            style={{ width: 120 }}
          >
            {currentDateOptions}
          </Select>
        </Col>
        <Col span={8}>
          <Select
            name={year.name}
            onChange={(value) => setCurrentYear(value)}
            showSearch
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            style={{ width: 120 }}
          >
            {year.options}
          </Select>
        </Col>
      </Row>
    </Input.Group>
  )
}

import { Col, Input, Row, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import {
  APRIL,
  AUGUST,
  DECEMBER,
  FEBRUARY,
  JANUARY,
  JULY,
  JUNE,
  MARCH,
  MAY,
  NOVEMBER,
  OCTOBER,
  SEPTEMBER,
} from './constants'
const { Option } = Select

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

const defaultMonths = {
  1: {
    min: 1,
    max: 31,
    name: JANUARY,
  },
  2: {
    min: 1,
    max: 28,
    name: FEBRUARY,
  },
  3: {
    min: 1,
    max: 31,
    name: MARCH,
  },
  4: {
    min: 1,
    max: 30,
    name: APRIL,
  },
  5: {
    min: 1,
    max: 31,
    name: MAY,
  },
  6: {
    min: 1,
    max: 30,
    name: JUNE,
  },
  7: {
    min: 1,
    max: 31,
    name: JULY,
  },
  8: {
    min: 1,
    max: 31,
    name: AUGUST,
  },
  9: {
    min: 1,
    max: 30,
    name: SEPTEMBER,
  },
  10: {
    min: 1,
    max: 31,
    name: OCTOBER,
  },
  11: {
    min: 1,
    max: 30,
    name: NOVEMBER,
  },
  12: {
    min: 1,
    max: 31,
    name: DECEMBER,
  },
}
const getMonthDate = (minMonth, maxMonth, minDate, maxDate) => {
  const monthDate = {}
  for (let index = +minMonth || 1; index < (+maxMonth + 1 || 13); index += 1) {
    const monthObj = defaultMonths[index]
    monthDate[index] = {
      min: minDate || monthObj.min,
      max: maxDate || monthObj.max,
      name: monthObj.name,
    }
  }
  return monthDate
}
export const DateSelect = ({ year, month, date }) => {
  const [currentDate, setCurrentDate] = useState()
  const [currentMonth, setCurrentMonth] = useState()
  const [currentYear, setCurrentYear] = useState()
  const newMonth = getMonthDate(month.min, month.max, date.min, date.max)
  const [months, setMonths] = useState(newMonth)

  useEffect(() => {
    if (currentYear) {
      if (month.min < 3) {
        const isLeapYear = new Date(currentYear, 1, 29).getMonth() == 1 ? true : false
        console.log('🚀 ~ file: dateSelect.jsx ~ line 120 ~ useEffect ~ isLeapYear', isLeapYear)

        setMonths((prev) => ({
          ...prev,
          2: {
            ...prev[2],
            max: isLeapYear ? 29 : 28,
          },
        }))
        console.log(months[2])
      }
    }
  }, [currentYear])

  return (
    <Input.Group size="large">
      <Row>
        <Col span={8}>
          <Select
            name={month.name}
            onChange={(value) => setCurrentMonth(value)}
            value={currentMonth}
            showSearch
            placeholder="Month"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            style={{ width: 120 }}
          >
            {Object.keys(months).map((key, i) => (
              <Option key={months[key].name} value={+month.min + i + 1}>
                {months[key].name}
              </Option>
            ))}
          </Select>
        </Col>
        <Col span={8}>
          <Select
            name={date.name}
            onChange={(value) => setCurrentDate(value)}
            value={currentDate}
            showSearch
            placeholder="Date"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            style={{ width: 120 }}
          >
            {optionsArrayFromMinMax(
              months[currentMonth || month.min || '1'].min,
              months[currentMonth || month.max || '12'].max
            )}
          </Select>
        </Col>
        <Col span={8}>
          <Select
            name={year.name}
            onChange={(value) => setCurrentYear(value)}
            value={currentYear}
            showSearch
            placeholder="Year"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            style={{ width: 120 }}
          >
            {optionsArrayFromMinMax(year.min || 2000, year.max || new Date().getFullYear())}
          </Select>
        </Col>
      </Row>
    </Input.Group>
  )
}

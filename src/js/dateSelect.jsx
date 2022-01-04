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
  for (let i = min; i <= max; i += 1) {
    const value = arr && arr.length ? arr[i] : i
    newArr.push(
      <Option key={value} value={value}>
        {value}
      </Option>
    )
  }
  return newArr
}

const defaultMonths = [
  {
    index: 1,
    min: 1,
    max: 31,
    name: JANUARY,
  },
  {
    index: 2,
    min: 1,
    max: 28,
    name: FEBRUARY,
  },
  {
    index: 3,
    min: 1,
    max: 31,
    name: MARCH,
  },
  {
    index: 4,
    min: 1,
    max: 30,
    name: APRIL,
  },
  {
    index: 5,
    min: 1,
    max: 31,
    name: MAY,
  },
  {
    index: 6,
    min: 1,
    max: 30,
    name: JUNE,
  },
  {
    index: 7,
    min: 1,
    max: 31,
    name: JULY,
  },
  {
    index: 8,
    min: 1,
    max: 31,
    name: AUGUST,
  },
  {
    index: 9,
    min: 1,
    max: 30,
    name: SEPTEMBER,
  },
  {
    index: 10,
    min: 1,
    max: 31,
    name: OCTOBER,
  },
  {
    index: 11,
    min: 1,
    max: 30,
    name: NOVEMBER,
  },
  {
    index: 12,
    min: 1,
    max: 31,
    name: DECEMBER,
  },
]
const getMonthDate = (minMonth, maxMonth, minDate, maxDate) => {
  const monthDate = []
  const minMonthIndex = minMonth < 1 && minMonth > 12 ? 0 : minMonth - 1
  const maxMonthIndex = maxMonth < 1 && maxMonth > 12 ? 12 : maxMonth

  for (let index = minMonthIndex; index < maxMonthIndex; index += 1) {
    const monthObj = defaultMonths[index]
    let { min, max } = monthObj
    min = minDate > min && minDate < max ? minDate : min
    max = maxDate < max && maxDate > min ? maxDate : max

    monthDate.push(monthObj)
  }

  return monthDate
}
const types = {
  YEAR: 'Year',
  DATE: 'Date',
  MONTH: 'Month',
}
export const DateSelect = ({ fields }) => {
  const monthData = fields.find(({ label }) => label === types.MONTH)
  const dateData = fields.find(({ label }) => label === types.DATE)
  const yearData = fields.find(({ label }) => label === types.YEAR)

  const [currentDay, setCurrentDay] = useState(dateData.defaultValue)
  const [currentMonth, setCurrentMonth] = useState(monthData.defaultValue)
  const [currentYear, setCurrentYear] = useState(yearData.defaultValue)

  const months = getMonthDate(monthData.min, monthData.max, dateData.min, dateData.max)

  const [currentDaysMax, setCurrentDaysMax] = useState(
    currentMonth ? months.find(({ index }) => index === currentMonth) : 31
  )

  useEffect(() => {
    if (currentMonth === 2) {
      // check leap year for February
      if (new Date(currentYear, 1, 29).getMonth() == 1) {
        if (currentDaysMax === 28) {
          setCurrentDaysMax(29)
        }
      } else {
        if (currentDaysMax === 29) {
          setCurrentDaysMax(28)
        }
      }
    }
  }, [currentYear])

  useEffect(() => {
    if (currentMonth) {
      setCurrentDaysMax(months.find(({ index }) => index === currentMonth).max)
    }
  }, [currentMonth])

  return (
    <Input.Group size="large">
      <Row>
        <Col span={8}>
          <Select
            name={monthData.name}
            onChange={(value) => setCurrentMonth(value)}
            value={currentMonth}
            showSearch
            placeholder="Month"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            style={{ width: 120 }}
          >
            {months.map(({ name, min }, i) => (
              <Option key={name} value={min + i + 1}>
                {name}
              </Option>
            ))}
          </Select>
        </Col>
        <Col span={8}>
          <Select
            name={dateData.name}
            onChange={(value) => setCurrentDay(value)}
            value={currentDay}
            showSearch
            placeholder="Date"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            style={{ width: 120 }}
          >
            {optionsArrayFromMinMax(
              currentMonth ? months.find(({ index }) => index === currentMonth).min : 1,
              currentDaysMax
            )}
          </Select>
        </Col>
        <Col span={8}>
          <Select
            name={yearData.name}
            onChange={(value) => setCurrentYear(value)}
            value={currentYear}
            showSearch
            placeholder="Year"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            style={{ width: 120 }}
          >
            {optionsArrayFromMinMax(yearData.min || 2000, yearData.max || 2030)}
          </Select>
        </Col>
      </Row>
    </Input.Group>
  )
}

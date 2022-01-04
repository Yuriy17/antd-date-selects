import React, { useState } from 'react';

export const Day = ({ name, defaultValue, onChange, placeholder, min, max }) => {
  const { value, setValue } = useState();
  let options = [];
  for (let index = min; index < max; index+=1) {
    options.push(
      <Option key={value} value={value}>
        {value}
      </Option>
      )
  }
  return (<Select
    name={name}
    onChange={onChange}
    value={defaultValue}
    showSearch
    placeholder={placeholder}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
    style={{ width: 120 }}
  >
    {options}
  </Select>);
}
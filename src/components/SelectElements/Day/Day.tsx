import React from 'react';

export const Day = ({ name, value, onChange, placeholder, options }) => {

  return (<Select
    name={name}
    onChange={onChange}
    value={value}
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
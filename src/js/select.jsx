import { Col, Row, Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import React from 'react'
import { render } from 'react-dom'


export const SelectDate = () => {
  return       <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
 };

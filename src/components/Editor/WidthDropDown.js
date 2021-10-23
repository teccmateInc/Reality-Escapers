import React from 'react'
import { Button, Dropdown, Space, Menu } from 'antd'
import { FaChevronUp } from '../FontAwesome'

const options = ['25%', '50%', '75%', '100%', '125%', '150%', '175%', '200%']
const menu = (
  <Menu>
    {options.map((o) => (
      <Menu.Item>
        <a target='_blank' rel='noopener noreferrer' href='/'>
          {o}
        </a>
      </Menu.Item>
    ))}
    <Menu.Divider />
    <Menu.Item>
      <a target='_blank' rel='noopener noreferrer' href='/'>
        Fit
      </a>
    </Menu.Item>
  </Menu>
)
const WidthDropDown = () => {
  return (
    <Space wrap>
      <Dropdown overlay={menu} placement='topCenter'>
        <Button type='default' className='btn'>
          71% &nbsp;
          <FaChevronUp />
        </Button>
      </Dropdown>
    </Space>
  )
}

export default WidthDropDown

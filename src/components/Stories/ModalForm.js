import React from 'react'
import { Form, Input } from 'antd'

const ModalForm = () => {
  return (
    <Form layout='vertical' style={{ textAlign: 'initial' }}>
      <Form.Item label='Name:'>
        <Input placeholder='Type in your story name' />
      </Form.Item>
      <Form.Item
        label='Add tags:'
        extra='Press enter, tab or comma to separate items.'
      >
        <Input placeholder='Search for tag(s)' />
      </Form.Item>
    </Form>
  )
}

export default ModalForm

import React from 'react'
import { Col, Row } from 'antd'
import Drag from './Drag'
import { ItemTypes } from '../../helper/constants/Contants'

const row = {
  padding: '16px',
}

const col = {
  marginTop: '12px',
  background: '#1D1B36',
  height: '64px',
  borderRadius: '10px',
  padding: '0 20px',
  display: 'flex',
  alignItems: 'center',
}

const title = {
  fontSize: '24px',
  color: 'white',
  margin: '0',
}

const headerOne = {
  fontSize: '22px',
  color: 'white',
  margin: '0',
}

const headerTwo = {
  fontSize: '20px',
  color: 'white',
  margin: '0',
}

const headerThree = {
  fontSize: '18px',
  color: 'white',
  margin: '0',
}

const paragraph = {
  fontSize: '17px',
  color: 'white',
  margin: '0',
}

const sText = {
  fontSize: '14px',
  color: 'white',
  margin: '0',
}

const Text = () => {
  return (
    <div>
      <Row style={row}>
        <Drag type={ItemTypes.HEADER1}>
          <Col span={24} style={col}>
            <h1 style={title}>Add Heading 1</h1>
          </Col>
        </Drag>
        <Drag type={ItemTypes.HEADER2}>
          <Col span={24} style={col}>
            <h2 style={headerOne}>Add Heading 2</h2>
          </Col>
        </Drag>
        <Drag type={ItemTypes.HEADER3}>
          <Col span={24} style={col}>
            <h3 style={headerTwo}>Add Heading 3</h3>
          </Col>
        </Drag>
        {/* <Drag type={ItemTypes.HEADER4}>
          <Col span={24} style={col}>
            <h4 style={headerThree}>Add Heading 3</h4>
          </Col>
        </Drag> */}
        <Drag type={ItemTypes.PARAGRAPH}>
          <Col span={24} style={col}>
            <p style={paragraph}>Add Paragraph</p>
          </Col>
        </Drag>
        <Drag type={ItemTypes.SPAN}>
          <Col span={24} style={col}>
            <p style={sText}>Add Supporting Text</p>
          </Col>
        </Drag>
      </Row>
    </div>
  )
}

export default Text

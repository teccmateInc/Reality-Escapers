import React, { useState } from 'react'
import { Modal, Card, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import ModalForm from './ModalForm'
import { useHistory } from 'react-router-dom'

const { Meta } = Card

const TemplateModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const history = useHistory()

  const handleOk = () => {
    history.push('/stories/editor')
  }

  const handleVisibility = () => {
    setIsModalVisible(!isModalVisible)
  }

  return (
    <>
      <Card
        hoverable
        style={{
          width: 200,
          height: 360,
          borderRadius: 15,
          textAlign: 'center',
          padding: '120px 0',
          background: '#F0F2F5',
        }}
        onClick={handleVisibility}
      >
        <PlusOutlined className='dashboard-scratch' />
        <Meta title=' Start from scratch' />
      </Card>
      <Modal
        title='New Story'
        visible={isModalVisible}
        className='templateModal'
        onCancel={handleVisibility}
        footer={[
          <Button
            type='primary'
            onClick={handleVisibility}
            className='modal-cancel-button'
          >
            Cancel
          </Button>,
          <Button
            type='primary'
            onClick={handleOk}
            className='modal-create-button'
          >
            Create Stories
          </Button>,
        ]}
      >
        <ModalForm />
      </Modal>
    </>
  )
}

export default TemplateModal

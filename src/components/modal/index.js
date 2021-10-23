import React from 'react'
import { Modal } from 'antd'

const ModalView = ({
  title,
  subText,
  imageSrc,
  open,
  onClose,
  okText,
  cancelText,
  centered,
  onDlete,
  okButtonProps,
  cancelButtonProps,
}) => {
  //   const [isModalVisible, setIsModalVisible] = useState(open)

  const handleOk = () => {
    onDlete()
  }

  const handleCancel = () => {
    onClose()
  }

  return (
    <Modal
      title={title}
      visible={open}
      onOk={handleOk}
      onCancel={handleCancel}
      okText={okText}
      cancelText={cancelText}
      centered={centered}
      cancelButtonProps={cancelButtonProps}
      okButtonProps={okButtonProps}
    >
      {imageSrc && <img src={imageSrc} />}
      {subText && <p style={{ marginTop: '1.5rem' }}>{subText}</p>}
    </Modal>
  )
}

ModalView.defaultProps = {
  title: 'Confirmation',
  subText: '',
  imageSrc: null,
  open: true,
  onClose: () => {},
  okText: 'Close',
  cancelText: 'Back',
  centered: true,
  onDlete: () => {},
  okButtonProps: {},
  cancelButtonProps: {},
}

export default ModalView

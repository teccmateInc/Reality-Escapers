import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import React, { Fragment } from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import emojis from '../../assets/s3-bucket/emojis.json'
import Masonry from 'react-responsive-masonry'
import Drag from './Drag'
import { ItemTypes } from '../../helper/constants/Contants'

const antIcon = (
  <LoadingOutlined style={{ fontSize: 50, color: 'white' }} spin />
)

const Emojis = () => {
  const [result, setResult] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  return (
    <Fragment>
      {loading ? (
        <div className='spinner'>
          <Spin spinning={loading} indicator={antIcon}></Spin>
        </div>
      ) : (
        <Masonry
          columnsCount={5}
          gutter='10px'
          style={{
            width: '80%',
            overflowY: 'scroll',
            height: '83vh',
            overflowX: 'hidden',
            scrollbarWidth: 'none',
          }}
        >
          {emojis.map((url, index) => {
            return (
              <Drag type={ItemTypes.IMAGE}>
                <img width='30' alt={`emoji-${index}`} src={url} />
              </Drag>
            )
          })}
        </Masonry>
      )}
    </Fragment>
  )
}

export default Emojis

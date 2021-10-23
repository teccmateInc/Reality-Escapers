import React, { Fragment } from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import shapes from '../../assets/s3-bucket/shapes.json'
import Masonry from 'react-responsive-masonry'
import Drag from './Drag'
import { ItemTypes } from '../../helper/constants/Contants'

const antIcon = (
  <LoadingOutlined style={{ fontSize: 50, color: 'white' }} spin />
)

const Static = () => {
  const [loading, setLoading] = React.useState(false)

  return (
    <Fragment>
      {loading ? (
        <div className='spinner'>
          <Spin spinning={loading} indicator={antIcon}></Spin>
        </div>
      ) : (
        <Masonry
          columnsCount={2}
          gutter='2px'
          style={{
            width: '80%',
            overflowY: 'scroll',
            height: '83vh',
            overflowX: 'hidden',
            scrollbarWidth: 'none',
          }}
        >
          {shapes.map((url, index) => {
            return (
              <Drag type={ItemTypes.IMAGE}>
                <img
                  width='90'
                  alt={`shape-${index}`}
                  src={url}
                  style={{ color: '#fff' }}
                />
              </Drag>
            )
          })}
        </Masonry>
      )}
    </Fragment>
  )
}

export default Static

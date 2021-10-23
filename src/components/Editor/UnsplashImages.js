import React, { useState, useEffect } from 'react'
import { Card, Row, Spin, Input } from 'antd'
import axios from 'axios'
import {
  SearchOutlined,
  LoadingOutlined,
  CheckCircleTwoTone,
} from '@ant-design/icons'
import Masonry from 'react-responsive-masonry'
import Drag from './Drag'
import { ItemTypes } from '../../helper/constants/Contants'
import { useSelector } from 'react-redux'
import { isUrl } from '../../helper/meta'
// import { LazyImage } from '../LazyImage'
const antIcon = (
  <LoadingOutlined style={{ fontSize: 50, color: 'white' }} spin />
)

const row = {
  padding: '3px 18px',
}

const input = {
  background: '#0D0B22',
  marginBottom: '10px',
}

const inputLogo = {
  background: '#0D0B22',
  color: 'white',
}

const UnsplashImages = () => {
  const { story } = useSelector((state) => state)
  let { currentStoryIndex, stories } = story
  let bgImgSrc = stories[currentStoryIndex].backgroundUrl
  let backgroundImg = isUrl(bgImgSrc)
  console.log(bgImgSrc, backgroundImg)

  const [result, setResult] = useState([])
  const [search, setSearch] = useState('nature')
  const [loading, setLoading] = useState(false)

  const accessToken = 'jF2rvKYUMtPjksg_EuYNajbukgHZEwe_vDTSLGW0c3g'

  const loadPictures = async () => {
    setLoading(true)
    const url =
      'https://api.unsplash.com/photos/random?client_id=' +
      accessToken +
      '&count=46'
    axios.get(url).then((res) => {
      setResult(res.data)
      setLoading(false)
    })
  }

  const onSearch = (e) => {
    setSearch(e.target.value)
    // loadPictures()
  }

  const hasBackgroundImg = (urls) => {
    let imgsUrls = Object.keys(urls).map((key) => urls[key])
    // console.log(imgsUrls.includes(bgImgSrc))
    return imgsUrls.includes(bgImgSrc)
  }

  useEffect(() => {
    loadPictures()
  }, [])

  return (
    <div>
      <Row style={row} className='hidescroll'>
        <Input
          size='large'
          placeholder='Search Images'
          prefix={<SearchOutlined style={inputLogo} />}
          style={input}
          onChange={onSearch}
        />
        {loading ? (
          <div className='spinner'>
            <Spin spinning={loading} indicator={antIcon}></Spin>
          </div>
        ) : (
          <Masonry
            columnsCount={2}
            gutter='10px'
            style={{
              overflowY: 'scroll',
              height: '78vh',
              overflowX: 'hidden',
              scrollbarWidth: 'none',
            }}
          >
            {result.map(({ urls }, i) => {
              return (
                <Card
                  className={
                    backgroundImg && hasBackgroundImg(urls) ? 'selectedImg' : ''
                  }
                  key={i}
                  cover={
                    <Drag type={ItemTypes.IMAGE}>
                      <img
                        alt='background-image'
                        src={urls.thumb}
                        data-url={urls.regular}
                      />
                    </Drag>
                  }
                  bodyStyle={
                    backgroundImg && hasBackgroundImg(urls)
                      ? { position: 'absolute' }
                      : {}
                  }
                >
                  {backgroundImg && hasBackgroundImg(urls) && (
                    <CheckCircleTwoTone
                      twoToneColor='#52c41a'
                      style={{ fontSize: '18px' }}
                    />
                  )}
                </Card>
              )
            })}
          </Masonry>
        )}
      </Row>
    </div>
  )
}

export default UnsplashImages

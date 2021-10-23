import React from 'react'
import { Card, Row, Spin } from 'antd'
import axios from 'axios'
import { Input } from 'antd'
import Masonry from 'react-responsive-masonry'
import { SearchOutlined, LoadingOutlined } from '@ant-design/icons'
import { LazyImage } from '../LazyImage'

const antIcon = (
  <LoadingOutlined style={{ fontSize: 50, color: 'white' }} spin />
)

const row = {
  padding: '0 18px',
}

const input = {
  background: '#0D0B22',
  marginBottom: '10px',
}

const inputLogo = {
  background: '#0D0B22',
  color: 'white',
}

const Videos = () => {
  const [result, setResult] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [search, setSearch] = React.useState('nature')

  const accessToken = '563492ad6f917000010000015a2e11c34eb24de2b39be47097343fd1'

  const loadVideos = async () => {
    setLoading(true)
    const url =
      'https://api.pexels.com/videos/search?query=' + search + '&per_page=46'
    axios
      .get(url, {
        headers: {
          Authorization: `${accessToken}`,
        },
      })
      .then((data) => {
        setResult(data.data.videos)
        setLoading(false)
      })
  }

  const onSearch = (e) => {
    setSearch(e.target.value)
    loadVideos()
  }

  React.useEffect(() => {
    loadVideos()
  }, [])

  return (
    <div>
      <Row style={row} className='hidescroll'>
        <Input
          size='large'
          placeholder='Search Video'
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
            gutter='5px'
            style={{
              overflowY: 'scroll',
              height: '76vh',
              overflowX: 'hidden',
              scrollbarWidth: 'none',
            }}
          >
            {result.map((search, i) => {
              return (
                <div class='video'>
                  <Card
                    key={i}
                    cover={<img alt='example' src={search.image} />}
                  />
                  <span></span>
                </div>
              )
            })}
          </Masonry>
        )}
      </Row>
    </div>
  )
}

export default Videos

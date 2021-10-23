import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import 'whatwg-fetch'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import Drag from './Drag'
import { ItemTypes } from '../../helper/constants/Contants'
import Masonry from 'react-responsive-masonry'
import { LazyImage } from '../LazyImage'

const input = {
  background: '#0D0B22',
  marginBottom: '10px',
}

const inputLogo = {
  background: '#0D0B22',
  color: 'white',
}

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gifs: [],
      searchValue: '',
      giphySearchUrl:
        'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC',
      giphyTrendingUrl:
        'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC',
    }

    this.loadTrendingGifs()
  }

  static get propTypes() {
    return {
      onSelected: PropTypes.func.isRequired,
      visible: PropTypes.bool,
      modal: PropTypes.bool,
    }
  }

  static get defaultProps() {
    return {
      visible: true,
      modal: false,
    }
  }

  loadTrendingGifs() {
    const { giphyTrendingUrl } = this.state
    fetch(giphyTrendingUrl, {
      method: 'get',
    })
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        let gifs = response.data.map((g, i) => {
          return g.images
        })
        this.setState({ gifs })
      })
  }

  searchGifs() {
    const { giphySearchUrl, searchValue } = this.state
    if (searchValue.length < 1) {
      return
    }
    let url = giphySearchUrl + '&q=' + searchValue.replace(' ', '+')
    this.setState({ gifs: [] })
    fetch(url, {
      method: 'get',
    })
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        let gifs = response.data.map((g, i) => {
          return g.images
        })
        this.setState({ gifs })
      })
  }

  onGiphySelect(gif) {
    // this.props.onSelected(gif)
  }

  onSearchChange(event) {
    event.stopPropagation()
    this.setState({ searchValue: event.target.value }, () => this.searchGifs())
  }

  onKeyDown(event) {
    if (event.key === 'Escape') {
      event.preventDefault()
      this.reset()
    }
  }

  reset() {
    this.setState({ searchValue: '' })
  }

  render() {
    const { gifs } = this.state
    const { visible, modal } = this.props
    return (
      <div className='hidescroll' style={{ height: '85vh !important' }}>
        <Wrapper>
          <GiphyPickerWrapper visible={visible} modal={modal}>
            {/* <Input
              name='giphy-search'
              type='text'
              autoCapitalize='none'
              autoComplete='off'
              autoCorrect='off'
              onChange={this.onSearchChange.bind(this)}
              value={this.state.searchValue}
              onKeyDown={this.onKeyDown.bind(this)}
              placeholder='Search for gifs'
            /> */}
            <Input
              name='giphy-search'
              size='large'
              placeholder='Search Video'
              prefix={<SearchOutlined style={inputLogo} />}
              style={input}
              // onChange={onSearch}
              onChange={this.onSearchChange.bind(this)}
              value={this.state.searchValue}
              onKeyDown={this.onKeyDown.bind(this)}
            />
            <GiphyWrapper>
              {gifs.map((g, i) => {
                let gifUrl = g.fixed_width.url
                return (
                  // <LazyImage
                  //   isGif={true}
                  //   key={i}
                  //   src={gifUrl}
                  //   alt={`gif=${i}`}
                  //   onGifClick={() => {
                  //     this.onGiphySelect(g)
                  //   }}
                  // />
                  <Drag type={ItemTypes.IMAGE}>
                    <Giphy
                      // className=''
                      key={i}
                      src={gifUrl}
                      onClick={() => {
                        this.onGiphySelect(g)
                      }}
                    />
                  </Drag>
                )
              })}
            </GiphyWrapper>
          </GiphyPickerWrapper>
        </Wrapper>
      </div>
    )
  }
}

const Wrapper = styled.div`
  position: relative;
`
const Giphy = styled.img`
  cursor: pointer;
  justify-content: center;
  align-items: center;
  padding: 0.21rem;
`

const GiphyPickerWrapper = styled.div`
  // position: ${(props) => (props.modal ? 'absolute' : 'static')};
  opacity: 1;
  -webkit-transition: opacity 300ms linear;
  transition: opacity 300ms linear;
  border-radius: 2px;
  width: 232px;
  z-index: 100;
`

const GiphyPicker = styled.div`
  cursor: pointer;
  border: 1px solid #eee;
  padding: 0.4rem 0.8rem;
  margin: 0;
  border-radius: 2px;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`

const GiphyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  place-content: stretch center;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden scroll;
`

// const GiphysPicker = (props) => {
//   const [state, setState] = useState({
//     gifs: [],
//     searchValue: '',
//     giphySearchUrl: 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC',
//     giphyTrendingUrl:
//       'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC',
//   })

//   useEffect(() => {
//     loadTrendingGifs()
//   }, [])

//   // static get defaultProps() {
//   //   return {
//   //     visible: true,
//   //     modal: false,
//   //   }
//   // }

//   const loadTrendingGifs = () => {
//     const { giphyTrendingUrl } = state
//     fetch(giphyTrendingUrl, {
//       method: 'get',
//     })
//       .then((response) => {
//         return response.json()
//       })
//       .then((response) => {
//         let gifs = response.data.map((g, i) => {
//           return g.images
//         })
//         setState({ ...state, gifs })
//       })
//   }

//   const searchGifs = () => {
//     const { giphySearchUrl, searchValue } = state
//     if (searchValue.length < 1) {
//       return
//     }
//     let url = giphySearchUrl + '&q=' + searchValue.replace(' ', '+')
//     setState({ ...state, gifs: [] })
//     fetch(url, {
//       method: 'get',
//     })
//       .then((response) => {
//         return response.json()
//       })
//       .then((response) => {
//         let gifs = response.data.map((g, i) => {
//           return g.images
//         })
//         setState({ ...state, gifs })
//       })
//   }

//   const onGiphySelect = (gif) => {
//     props.onSelected(gif)
//   }

//   const onSearchChange = (event) => {
//     event.stopPropagation()
//     setState({ ...state, searchValue: event.target.value }, () => searchGifs())
//   }

//   const onKeyDown = (event) => {
//     if (event.key === 'Escape') {
//       event.preventDefault()
//       reset()
//     }
//   }

//   const reset = () => {
//     setState({ ...state, searchValue: '' })
//   }

//   const { gifs } = state
//   const { visible, modal } = props
//   console.log(gifs)

//   return (
//     <div className='hidescroll' style={{ height: '85vh !important' }}>
//       <Wrapper>
//         <GiphyPickerWrapper visible={visible} modal={modal}>
//           {/* <Input
//               name='giphy-search'
//               type='text'
//               autoCapitalize='none'
//               autoComplete='off'
//               autoCorrect='off'
//               onChange={.onSearchChange.bind()}
//               value={.state.searchValue}
//               onKeyDown={.onKeyDown.bind()}
//               placeholder='Search for gifs'
//             /> */}
//           <Input
//             name='giphy-search'
//             size='large'
//             placeholder='Search Video'
//             prefix={<SearchOutlined style={inputLogo} />}
//             style={input}
//             // onChange={onSearch}
//             onChange={onSearchChange}
//             value={state.searchValue}
//             onKeyDown={onKeyDown}
//           />
//           <GiphyWrapper>
//             {state.gifs.map((g, i) => {
//               let gifUrl = g.fixed_width.url
//               return (
//                 <Giphy
//                   className='giphy-gif'
//                   key={i}
//                   src={gifUrl}
//                   onClick={() => {
//                     onGiphySelect(g)
//                   }}
//                 />
//               )
//             })}
//           </GiphyWrapper>
//         </GiphyPickerWrapper>
//       </Wrapper>
//     </div>
//   )
// }

// GiphysPicker.defaultProps = {
//   onSelected: PropTypes.func.isRequired,
//   visible: PropTypes.bool,
//   modal: PropTypes.bool,
// }

// export default GiphysPicker

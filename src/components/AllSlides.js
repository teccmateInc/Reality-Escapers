import React,{useContext} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Layout, Avatar, Button ,Row} from 'antd'
import { FaPalette, FaFont, FaCamera, FaSmiley, FaUpload } from './FontAwesome'
import MainContent from './MainContent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import HeaderTop from './Editor/Header/HeaderTop'
import HeaderBottom from './Editor/Header/HeaderBottom'
import logo from '../assets/imgs/logo.png'
import SideMenuContent from './Editor/SideMenuContent'
import { SlidesProvider } from '../providers/Slides'
import {CloseOutlined} from '@ant-design/icons'
import { SlidesContext } from "../providers/Slides";

const { Sider } = Layout
const { Content } = Layout;



export default function MainLayout() {

//   const { slides } = useContext(SlidesContext);
//   const noOfSlides = slides.length;
//   const slidesCount = `${noOfSlides} Slide${noOfSlides > 1 ? "(s)" : ""}`;
  const [isOpen, setIsOpen] = React.useState(false)
  const [sideType, setSideType] = React.useState('')

  const history = useHistory()

  const openSecondarySider = (type) => {
    if (sideType === type && isOpen) {
      setIsOpen(false)
      setSideType('')
      return
    } else {
      setIsOpen(true)
      switch (type) {
        case 'background':
          setSideType(type)
          break
        case 'text':
          setSideType(type)
          break
        case 'media':
          setSideType(type)
          break
        case 'objects':
          setSideType(type)
          break
        case 'help':
          setSideType(type)
          break

        default:
          setIsOpen(!isOpen)
          break
      }
    }
  }

  return (
    <SlidesProvider>
      <Layout className='sect'>
        <Sider className='sider'>
          <div className='logo'>
            <Avatar
              shape='square'
              size='medium'
              src={logo}
              onClick={() => history.push('/stories/templates')}
            />{' '}
          </div>

          <div
            className={
              sideType === 'background' && isOpen
                ? 'sideBarContent sideBarContent-active'
                : 'sideBarContent'
            }
            onClick={() => openSecondarySider('background')}
          >
            <div className='sideBarIcons'>
              <FaPalette />
            </div>
            <div className='sideBarTexts'>Background</div>
          </div>

          <div
            className={
              sideType === 'text' && isOpen
                ? 'sideBarContent sideBarContent-active'
                : 'sideBarContent'
            }
            onClick={() => openSecondarySider('text')}
          >
            <div className='sideBarIcons'>
              <FaFont />
            </div>
            <div className='sideBarTexts'>Text</div>
          </div>

          <div
            className={
              sideType === 'media' && isOpen
                ? 'sideBarContent sideBarContent-active'
                : 'sideBarContent'
            }
            onClick={() => openSecondarySider('media')}
          >
            <div className='sideBarIcons'>
              <FaCamera />
            </div>
            <div className='sideBarTexts'>Media</div>
          </div>

          <div
            className={
              sideType === 'objects' && isOpen
                ? 'sideBarContent sideBarContent-active'
                : 'sideBarContent'
            }
            onClick={() => openSecondarySider('objects')}
          >
            <div className='sideBarIcons'>
              <FaSmiley />
            </div>
            <div className='sideBarTexts'>Objects</div>
          </div>

          <div className='sideBarContent'>
            <div className='sideBarIcons'>
              {/* <FaUpload /> */}
              <FontAwesomeIcon icon={faCloudUploadAlt} />
            </div>
            <div className='sideBarTexts'>Upload</div>
          </div>
          
          <div className='sideLastItem'>?</div>
        </Sider>
        {isOpen && sideType && (
          <SideMenuContent
            sideType={sideType}
            open={isOpen}
            onClose={() => {
              setIsOpen(!isOpen)
              setSideType('')
            }}
          />
        )}
        <Layout className='sect'>
          <HeaderTop/>
          <HeaderBottom optionVisiblity={false}/>
          <Content style={{position: 'relative'}} className="content">
              <Link to='/stories/editor'>
                    <Button style={{position : 'absolute' , bottom:'20px', right:'30px'}}><CloseOutlined /> Close</Button>
              </Link>
           </Content>
        </Layout>
      </Layout>
    </SlidesProvider>
  )
}

import React , { useContext, useState } from 'react'
import { Button, InputNumber, Layout ,Pagination, Select} from 'antd'
import { FaUndo, FaRedo, FaPlay } from '../../FontAwesome'
import BasicButton from '../../form_control/BasicButton'
import '../../../assets/css/Navbar.css'
import { SlidesContext } from '../../../providers/Slides'
import {PlusOutlined,MinusOutlined,FontColorsOutlined,BgColorsOutlined,BoldOutlined,ItalicOutlined,FontSizeOutlined,AlignLeftOutlined,
  AlignCenterOutlined,AlignRightOutlined,LinkOutlined} from '@ant-design/icons'
const { Header } = Layout

export default function HeaderTop() {

  const { changeAlignment } = useContext(SlidesContext)
  
  return (
    <div>
      <Header className='headerOne'>
        <BasicButton
          className='btn'
          type='default'
          withTooltip
          tooltipProps={{
            tooltipTitle: 'Go back to list of stories',
            tooltipPosition: 'right',
          }}
        >
          My Stories
        </BasicButton>
        <BasicButton
          withTooltip
          tooltipProps={{ tooltipTitle: 'Undo' }}
          icon={<FaUndo />}
          className='btn btn-undo'
          type='default'
          size='sm'
        />
        <BasicButton
          withTooltip
          tooltipProps={{ tooltipTitle: 'Redo' }}
          icon={<FaRedo />}
          className='btn btn-redo'
          type='default'
          size='sm'
        />
        <div className='leftSideOfNav'>
          <BasicButton
            withTooltip
            tooltipProps={{ tooltipTitle: 'View Your Slides' }}
            icon={<FaPlay />}
            className='btn'
            type='default'
          >
            &nbsp;Preview
          </BasicButton>
          <BasicButton
            className='btn'
            type='default'
            withTooltip
            tooltipProps={{
              tooltipTitle: 'Publish story',
            }}
          >
            Publish
          </BasicButton>
          <BasicButton
            className='btn btn-save'
            type='default'
            withTooltip
            tooltipProps={{
              tooltipTitle: 'Save story',
              tooltipPosition: 'left',
            }}
          >
            Save
          </BasicButton>
        </div>
      </Header>
    </div>
  )
}

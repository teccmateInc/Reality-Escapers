import React, { useEffect, useState } from 'react'
import { Card, Col } from 'antd'
import SlideMenu from './SlideMenu'

const Slide = ({
  className,
  childClass,
  style,
  children,
  withContextMenu,
  topBar,
  bottomBar,
  onClick,
  dropRef,
  slideId,
}) => {
  const [slideChildren, setSlideChildren] = useState([])
  useEffect(() => {
    setSlideChildren(children)
  }, [children])
  return (
    <Col
      ref={dropRef}
      className={className}
      onClick={() => onClick()}
      style={{ top: childClass !== 'active' && '26px' }}
    >
      {topBar}
      <Card
        className={childClass}
        style={{ ...style, backgroundSize: 'cover' }}
      >
        {children
          ? slideChildren.map((child, i) => {
              return (
                <SlideMenu
                  childIndex={i}
                  slideId={slideId}
                  withContextMenu={!withContextMenu}
                  key={i}
                >
                  {child}
                </SlideMenu>
              )
            })
          : null}
      </Card>
      {/* <SlideMenu withContextMenu={!withContextMenu}>
        <Card className={childClass} style={style}>
          {children}
        </Card>
      </SlideMenu> */}

      {bottomBar}
    </Col>
  )
}

Slide.defaultProps = {
  className: '',
  childClass: 'in-active',
  style: {},
  children: null,
  withContextMenu: false,
  topBar: null,
  bottomBar: null,
  onClick: () => {},
}

export default Slide

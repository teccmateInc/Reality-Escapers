import React, { useRef, useState } from 'react'
import ResizableRect from '../ResizableRect'

const Resize = ({ tag, child }) => {
  const [state, setState] = useState({
    width: 100,
    height: 100,
    top: 100,
    left: 100,
    rotateAngle: 0,
    position: 'absolute',
  })
  const [active, setActive] = useState(false)
  const editableRef = useRef()

  // Resize.handleClickOutside = (e) => {
  //   console.log('outside')
  // }

  const { width, top, left, height, rotateAngle } = state

  // useEffect(() => {}, [])

  const handleResize = (style, isShiftKey, type) => {
    // type is a string and it shows which resize-handler you clicked
    // e.g. if you clicked top-right handler, then type is 'tr'
    let { top, left, width, height } = style
    top = Math.round(top)
    left = Math.round(left)
    width = Math.round(width)
    height = Math.round(height)
    setState({
      ...state,
      top,
      left,
      width,
      height,
    })
  }

  const handleRotate = (rotateAngle) => {
    setState({
      ...state,
      rotateAngle,
    })
  }

  const handleDrag = (deltaX, deltaY) => {
    setState({
      ...state,
      left: state.left + deltaX,
      top: state.top + deltaY,
    })
  }

  let imgProps = `${tag}` === 'img' ? { src: `${child}` } : {}
  let children = `${tag}` !== 'img' ? `${child}` : null

  return (
    <ResizableRect
      left={left}
      top={top}
      width={width}
      height={height}
      rotateAngle={rotateAngle}
      // aspectRatio={false}
      // minWidth={10}
      // minHeight={10}
      // zoomable="n, w, s, e, nw, ne, se, sw"
      zoomable={tag === 'img' ? 'n, w, s, e, nw, ne, se, sw' : 'w, e'}
      // rotatable={true}
      // onRotateStart={handleRotateStart}
      onRotate={handleRotate}
      // onRotateEnd={handleRotateEnd}
      // onResizeStart={handleResizeStart}
      onResize={handleResize}
      // onResizeEnd={handleUp}
      // onDragStart={handleDragStart}
      onDrag={handleDrag}
      // onDragEnd={handleDragEnd}
    >
      {React.createElement(
        `${tag}`,
        {
          ...imgProps,
          // ref: editableRef,
          // onClick: handleClickOutside,
          // onDoubleClick: handleClose,
          // id: id,
          // style: { ...state, transform: `rotate(${state.rotateAngle}deg)` },
        },
        children
      )}
    </ResizableRect>
  )
}

Resize.defaultProps = {
  tag: 'div',
  child: null,
}

// const clickOutsideConfig = {
//   handleClickOutside: () => Resize.handleClickOutside,
// }

// export default onClickOutside(Resize, clickOutsideConfig)

export default Resize

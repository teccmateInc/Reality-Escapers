import React, { useContext, useEffect, useState } from 'react'
import { useDrop } from 'react-dnd'
import { Card, Col } from 'antd'
import SlideHeader from './SlideHeader'
import SlideFooter from './SlideFooter'
import InitialSlide from './InitialSlide'
import MiddleElements from './MiddleElements'
import { SlidesContext } from '../../../providers/Slides'
import { ItemTypes } from '../../../helper/constants/Contants'

const Slides = () => {
  const {
    currentSlide,
    getSlides,
    changeSlide,
    openDeleteModal,
    addNewSlide,
    updateSlide, //updateStoryLayer
    slides,
  } = useContext(SlidesContext)

  const [slidesView, setSlidesView] = useState([])
  const { HEADER1, HEADER2, HEADER3, HEADER4, PARAGRAPH, SPAN, IMAGE } =
    ItemTypes
  const [{ isOver, isOverCurrent }, drop] = useDrop(
    () => ({
      accept: [HEADER1, HEADER2, HEADER3, HEADER4, PARAGRAPH, SPAN, IMAGE],
      drop(item, monitor) {
        const didDrop = monitor.didDrop()
        console.log('dropped', didDrop, item, monitor.getItemType())
        updateSlide(monitor.getItemType(), currentSlide)
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
      }),
    }),
    [currentSlide]
  )

  useEffect(() => {
    setSlidesView(getSlides())
    console.log('Updated::', getSlides())
  }, [slides])

  let isCurrentSlideRendered = false

  const Slide = ({
    className,
    childClass = 'in-active',
    style,
    children,
    topBar,
    bottomBar,
    onClick = () => {},
  }) => (
    <Col className={className} onClick={() => onClick()}>
      {topBar}
      <Card className={childClass} style={style}>
        {children}
      </Card>
      {bottomBar}
    </Col>
  )

  let dragOverStyle = isOver ? { border: '2px solid #adff2fd1' } : {}

  return (
    <>
      {slidesView.map((slide, i) => {
        const { isActive, backgroundColor, id, child, backgroundUrl } = slide
        return (
          <>
            {!isActive && i < 2 && !isCurrentSlideRendered ? (
              <Slide
                key={i}
                className={
                  i === 0 && !slidesView[i + 1]?.isActive
                    ? 'past-slide'
                    : 'prev-slide'
                }
                style={{
                  background:
                    'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC',
                  // backgroundUrl.length > 0 ? backgroundUrl : null,
                }}
                onClick={() => changeSlide(id)}
              />
            ) : isCurrentSlideRendered ? (
              <>
                <Slide
                  className={
                    slidesView[i + 1] !== undefined ||
                    slidesView[i - 1].isActive
                      ? 'next-slide'
                      : 'future-slide'
                  }
                  style={{ background: backgroundColor }}
                  onClick={() => changeSlide(id)}
                />
              </>
            ) : (
              (isCurrentSlideRendered = true && (
                <div className='current-slide' ref={drop}>
                  <Slide
                    className='ml-25'
                    style={{ background: backgroundColor, ...dragOverStyle }}
                    childClass='slide'
                    topBar={
                      <SlideHeader
                        number={currentSlide + 1}
                        onAdd={addNewSlide}
                      />
                    }
                    bottomBar={
                      slidesView.length > 1 && (
                        <SlideFooter onClick={openDeleteModal} />
                      )
                    }
                  >
                    {child}
                  </Slide>
                  <Col className='mx-25'>
                    <MiddleElements onAdd={addNewSlide} />
                  </Col>
                </div>
              ))
            )}
          </>
        )
      })}
      {/* <Col className={lastIndex < 5 ? 'next-slide' : 'future-slide'}>
          <InitialSlide />
        </Col> */}
    </>
  )
}

export default Slides

/* Storyfyme Reanders story:
     <Col className='past-slide'>
        <Card className='in-active'></Card>
      </Col>
      <Col className='prev-slide'>
        <Card className='in-active'></Card>
      </Col>
      <div className='current-slide'>
        <Col className='mx-25'>
          <SlideHeader />
          <Card className='slide'></Card>{' '}
        </Col>
        <Col className='mx-25'>
          <MiddleElements />
        </Col>
      </div>
      <Col className='next-slide'>
        <Card className='in-active'></Card>
      </Col>
      <Col className='future-slide'>
        <InitialSlide />
      </Col> 
*/

import React, { useRef, useContext, useState } from 'react'
import { Col } from 'antd'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import SlideHeader from './SlideHeader'
import SlideFooter from './SlideFooter'
import InitialSlide from './InitialSlide'
import MiddleElements from './MiddleElements'
import { SlidesContext } from '../../../providers/Slides'
import { useDispatch } from 'react-redux'
import { changeStoryLayer, addStoryLayer } from '../../../redux/slices/storiesSlice'

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/components/effect-coverflow/effect-coverflow.min.css'
// import 'swiper/components/pagination/pagination.min.css' //Pagination not required

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper/core'
import Slide from './Slide'
import { getBackgroundStyles } from '../../../helper/meta'
import { useOnDrop } from '../../../hooks'

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination])

export default function Slides() {
  const {
    currentSlide,
    // changeSlide,
    openDeleteModal,
    // addNewSlide,
    updateSlide,
    slides,
  } = useContext(SlidesContext)

  const dispatch = useDispatch()
  const [drop] = useOnDrop()

  let swiper = useRef()
  const [isLastSlide, lastActive] = useState(false)

  const addStory = () => {
    let sw = swiper.current?.swiper
    dispatch(addStoryLayer())
    sw.addSlide(
      sw.activeIndex,
      <div class='swiper-slide'>
        <Slide
          childClass={'active'}
          // style={{ background: backgroundColor }}
          topBar={<SlideHeader number={sw.activeIndex + 1} onAdd={addStory} />}
          bottomBar={<SlideFooter onClick={openDeleteModal} />}
        />
        ,
      </div>
    )
  }

  // console.log('lamst', currentSlide)
  return (
    <Swiper
      // effect={'coverflow'}
      // grabCursor={true}
      // centeredSlides={true}
      allowTouchMove={false}
      onTransitionStart={() => {
        let sw = swiper.current?.swiper
        isLastSlide && lastActive(false)
        sw.slides.length !== sw.activeIndex + 1 &&
          dispatch(changeStoryLayer({ index: sw.activeIndex }))
      }}
      // onTransitionEnd={() => changeSlide(swiper.current?.swiper.activeIndex)}
      slidesPerView={'auto'} //'auto' or Number of slide diplay 1,2,etc
      slideToClickedSlide
      spaceBetween={30}
      centeredSlides
      // pagination={{
      //   clickable: true,
      // }}
      // coverflowEffect={{
      //   rotate: 50,
      //   stretch: 0,
      //   depth: 100,
      //   modifier: 1,
      //   slideShadows: true,
      // }}
      // pagination={true}
      ref={swiper}
      // speed={500}
    >
      {slides.map((slide, i) => {
        let { isActive, backgroundColor, id, child, backgroundUrl } = slide
        //console.log(slide)
        let backgroundStyle = getBackgroundStyles({
          color: backgroundColor,
          url: backgroundUrl,
        })

        let hasActiveAndNotLast = isActive && !isLastSlide
        return (
          <SwiperSlide key={id}>
            <Slide
              slideId={id}
              dropRef={hasActiveAndNotLast ? drop : null}
              childClass={hasActiveAndNotLast ? 'active' : 'in-active '}
              style={{ ...backgroundStyle }}
              withContextMenu={hasActiveAndNotLast}
              topBar={
                hasActiveAndNotLast && (
                  <SlideHeader number={i + 1} onAdd={addStory} />
                )
              }
              bottomBar={
                hasActiveAndNotLast &&
                slides.length > 1 && <SlideFooter onClick={openDeleteModal} />
              }
            >
              {child}
            </Slide>
            {/* <Col
              style={{ top: !hasActiveAndNotLast && '26px' }}
              ref={hasActiveAndNotLast ? drop : null}
              >
              {hasActiveAndNotLast && (
                <SlideHeader number={i + 1} onAdd={addNewSlide} />
                )}
                <Card
                className={hasActiveAndNotLast ? 'active' : 'in-active '}
                style={{ background: backgroundColor }}
                >
                {child}
                </Card>
                {hasActiveAndNotLast && slides.length > 1 && (
                  <SlideFooter onClick={openDeleteModal} />
                  )}
                  </Col>
                */}
            {hasActiveAndNotLast && (
              <Col>
                <MiddleElements onAdd={addStory} />
              </Col>
            )}
          </SwiperSlide>
        )
      })}
      <SwiperSlide onClick={() => lastActive(true)}>
        <Col style={{ top: '18px' }}>
          <InitialSlide />
        </Col>
      </SwiperSlide>
      ]
    </Swiper>
  )
}

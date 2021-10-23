import { createSlice } from '@reduxjs/toolkit'
// import { v4 as uuidv4 } from 'uuid'
import Resize from '../../components/Editor/Resize'
import { ADD_NEW_STORY_LAYER } from '../../helper/constants/Contants'
import { generateId, isUrl } from '../../helper/meta'

//Initial states of stories
// STORIES => SLIDES
const initialState = {
  currentStoryIndex: 0,
  stories: [
    ADD_NEW_STORY_LAYER,
    {
      id: generateId(),
      backgroundColor: '',
      backgroundUrl: '',
      child: [],
      isActive: false,
    },
    {
      id: generateId(),
      backgroundColor: '',
      backgroundUrl: '',
      child: [],
      isActive: false,
    },
  ],
}

const storiesSlice = createSlice({
  name: 'stories',
  initialState,
  reducers: {
    //TODO
    createStory: (state, action) => {},

    //TODO
    deleteStory: (state, action) => {},

    changeBackground: (state, action) => {
      let { type } = action.payload
      let { currentStoryIndex, stories } = state
      // console.log(type, isUrl(type))
      stories[currentStoryIndex].backgroundUrl = ''
      stories[currentStoryIndex].backgroundColor = ''
      type === 'img' && isUrl(action.payload.val)
        ? (stories[currentStoryIndex].backgroundUrl = action.payload.val)
        : (stories[currentStoryIndex].backgroundColor = type)
    },

    // changeAlignment = ((alignment) => {
    //     let tempArr = [...slides]
    //     console.log('Temp', tempArr)
    // }),

    // getSlides = (() => {
    //     let tempArr = [...slides]
    //     let curr = tempArr.findIndex((a) => a.id === tempArr[currentSlide].id) + 1
    //     let startFrom = curr - 2 >= 2 ? curr - 3 : 0
    //     let endAt =
    //         slides.length >= 5 && startFrom === 0
    //             ? curr + 2
    //             : slides.length < 5
    //                 ? slides.length
    //                 : 5
    //     // console.log(slides.length, endAt)
    //     let a = tempArr.splice(startFrom, endAt)
    //     return a
    // }),

    changeStoryLayer: (state, action) => {
      let { currentStoryIndex, stories } = state
      let { index } = action.payload
      // console.log(index)
      // let index = slides.findIndex((a) => a.id === id)
      stories[currentStoryIndex].isActive = false
      stories[index].isActive = true
      state.currentStoryIndex = index
    },

    addStoryLayer: (state, action) => {
      // console.log('object')
      let { currentStoryIndex, stories } = state
      stories[currentStoryIndex].isActive = false
      stories.splice(currentStoryIndex + 1, 0, ADD_NEW_STORY_LAYER)
      state.currentStoryIndex = currentStoryIndex + 1
    },

    updateStoryLayer: (state, action) => {
      let { type, val, alt } = action.payload
      let { stories, currentStoryIndex } = state
      if (type) {
        // console.log('Tag Props', val, alt)
        if (alt !== 'background-image') {
          stories[currentStoryIndex].child.push(
            <Resize tag={type} child={val} />
          )
        } else {
          storiesSlice.caseReducers.changeBackground(state, action)
        }
      }
    },

    //TODO
    deleteStoryLayer: (state, action) => {
      let { childIndex, slideId } = action.payload
      let { stories } = state
      const selectedIndex = stories.findIndex((slide) => slide.id === slideId)
      stories[selectedIndex].child = stories[selectedIndex].child.filter(
        (_, i) => i !== childIndex
      )
    },

    // const deleteSlide = useCallback((deleteIdx) => {
    //   const tempArr = [...slides]
    //   tempArr.splice(deleteIdx, 1)
    //   // let activeIndex = deleteIdx === tempArr.length ? deleteIdx - 1 : deleteIdx
    //   let activeIndex =
    //     deleteIdx === tempArr.length || deleteIdx > 0 ? deleteIdx - 1 : deleteIdx
    //   // console.log(deleteIdx, activeIndex)
    //   tempArr[activeIndex].isActive = true
    //   setCurrentSlide(activeIndex)
    //   setSlides(tempArr)
    //   closeModal()
    //   openNotification({
    //     type: 'success',
    //     desc: `Slide ${deleteIdx + 1} Deleted Successfully!`,
    //   })
    // })

    // const deleteSlideChild = useCallback((childIndex, slideId) => {
    //   let tempSlides = [...slides]
    //   const selectedIndex = tempSlides.findIndex((slide) => slide.id === slideId)
    //   tempSlides[selectedIndex].child = tempSlides[selectedIndex].child.filter(
    //     (obj, i) => i !== childIndex
    //   )
    //   setSlides(tempSlides)
    // })
  },
})

export const {
  addStoryLayer,
  updateStoryLayer,
  changeStoryLayer,
  changeBackground,
} = storiesSlice.actions

export default storiesSlice.reducer

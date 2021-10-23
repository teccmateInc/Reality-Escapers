import { generateId } from '../meta'

export const ItemTypes = {
  HEADER1: 'h1',
  HEADER2: 'h2',
  HEADER3: 'h3',
  HEADER4: 'h4',
  PARAGRAPH: 'p',
  SPAN: 'span',
  IMAGE: 'img',
  VIDEO: 'video',
}

export const DEFAULT_PICKER_COLOR = '#ffffff'

export const DEFAULT_SOLID_COLORS = [
  '#000000',
  '#ffffff',
  '#ff5757',
  '#ff66c4',
  '#cb6ce6',
  '#8c52ff',
  '#5271ff',
  '#38b6ff',
  '#5ce1e6',
  '#7ed957',
  '#c9e265',
  '#ffde59',
  '#ffbd59',
  '#ff914d',
  '#42003c',
  '#000000',
]

export const DEFAULT_GRADIENT_COLORS = [
  'linear-gradient(0deg, hsl(14, 100%, 80%) 0.00%,hsl(345, 100%, 52%) 100.00%)',
  'linear-gradient(270deg, hsl(22, 94%, 74%) 8.00%,hsl(43, 90%, 69%) 92.00%)',
  'linear-gradient(315deg, hsl(128, 62%, 75%) 8.00%,hsl(78, 96%, 73%) 92.00%)',
  'linear-gradient(270deg, hsl(57, 94%, 63%) 0.00%,hsl(139, 87%, 45%) 100.00%)',
  'linear-gradient(315deg, hsl(199, 88%, 87%) 8.00%,hsl(217, 96%, 81%) 92.00%)',
  'linear-gradient(0deg, hsl(193, 100%, 49%) 0.00%,hsl(217, 100%, 46%) 100.00%)',
  'linear-gradient(0deg, hsl(242, 26%, 72%) 0.00%,hsl(240, 26%, 63%) 51.00%,hsl(240, 26%, 63%) 100.00%)',
  'linear-gradient(0deg, hsl(238, 25%, 42%) 0.00%,hsl(234, 25%, 46%) 15.00%,hsl(237, 23%, 51%) 28.00%,hsl(240, 28%, 57%) 43.00%,hsl(240, 31%, 61%) 57.00%,hsl(235, 38%, 65%) 71.00%,hsl(242, 42%, 71%) 82.00%,hsl(241, 46%, 75%) 92.00%,hsl(248, 50%, 79%) 100.00%)',
  'linear-gradient(270deg, hsl(335, 100%, 75%) 0.00%,hsl(350, 100%, 73%) 100.00%)',
  'linear-gradient(90deg, hsl(242, 87%, 71%) 0.00%,hsl(333, 75%, 70%) 100.00%)',
  'linear-gradient(45deg, hsl(247, 49%, 29%) 0.00%,hsla(265, 64%, 63%, 0.22) 100.00%)',
  'radial-gradient(circle at center, hsl(60, 100%, 50%) 0.00%,hsl(160, 100%, 30%) 50.00%,hsl(300, 100%, 25%) 100.00%)',
  'linear-gradient(45deg, hsl(47, 49%, 29%) 0.00%,hsla(65, 64%, 63%, 0.22) 100.00%)',
  'linear-gradient(0deg, hsl(138, 25%, 42%) 0.00%,hsl(134, 25%, 46%) 15.00%,hsl(137, 23%, 51%) 28.00%,hsl(140, 28%, 57%) 43.00%,hsl(140, 31%, 61%) 57.00%,hsl(135, 38%, 65%) 71.00%,hsl(142, 42%, 71%) 82.00%,hsl(141, 46%, 75%) 92.00%,hsl(148, 50%, 79%) 100.00%)',
  'linear-gradient(270deg, hsl(235, 100%, 75%) 0.00%,hsl(250, 100%, 73%) 100.00%)',
]

export const ADD_NEW_STORY_LAYER = {
  id: generateId(),
  backgroundColor: '',
  backgroundUrl: '',
  child: [],
  isActive: true,
}

export const CREATE_NEW_STORY = {
  [generateId()]: {
    name: '', // Name of story
    activeLayer: 0,
    storyLayers: [
      ADD_NEW_STORY_LAYER
    ],
  },
}


export const headerCss = {
  fontFamily: 'fontFamily: "sans-serif"',
  sizeDecreament: 'size : "decreament"',
  sizeIncreament: 'size : "increament"',
  fontColor: 'color : "gray"',
  backgroundColor : 'backgroundColor : "red"',
  fontWeightBold : 'fontWeight : "bold"',
  fontStyleItaic: 'fontStyle : "italic"',
  fontSize: 'fontSize: "1em"',
  fontWeightLighter: 'fontWeight: "lighter"',
  textAlignLeft: 'text-align: "left"',
  textAlignCenter: 'text-align: "center"',
  textAlignRight: 'text-align: "right"',
}
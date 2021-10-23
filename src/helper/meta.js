/**
 * Checks if a valid URL;
 * @param val: string/url != (undefined or null)
 */
export const isUrl = (url) => {
  try {
    return Boolean(new URL(url))
  } catch (e) {
    return false
  }
}

/**
 * @returns unique id
 */
export const generateId = () => Math.random().toString(32).slice(2)

/**
 * Checks color is gradient or not
 * @param val: color
 * @returns true/false
 */
export const isGradientColor = (color) =>
  validString(color) && color.includes('-gradient')

/**
 * @param val: object contains color || url != (undefined or null)
 * @returns if url background --> image with styles,
 *          else if color contains '-gradient' --> backgroundImage as gardient color
 *          else --> backgroundColor
 */

export const getBackgroundStyles = ({ color, url }) => {
  // check if background image url is exist
  if (isUrl(url)) {
    return {
      backgroundImage: `url(${url})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }
  }
  // any gradient
  else if (isGradientColor('-gradient')) {
    return {
      backgroundImage: color,
    }
  } else return { backgroundColor: color }
}

/**
 * Checks if a valid string;
 * @param val: number/string/object/array != (undefined or null)
 */
export const validValue = (val) =>
  typeof val !== 'undefined' && val !== undefined && val !== null

/**
 * Checks if a valid string
 * @param str: string
 */
export const validString = (str) => !!str && typeof str === 'string'

/**
 * Checks if a valid string and validate with min length.
 * @param str: string
 */
export const validStringWithMinLength = (str, length = 1) =>
  !!str && typeof str === 'string' && str.length >= length

/**
 * @param rgb: string
 * @returns hex
 */
export const RGBToHex = (rgb) => {
  // Choose correct separator
  let sep = rgb.indexOf(',') > -1 ? ',' : ' '
  // Turn "rgb(r,g,b)" into [r,g,b]
  rgb = rgb.substr(4).split(')')[0].split(sep)

  let r = (+rgb[0]).toString(16),
    g = (+rgb[1]).toString(16),
    b = (+rgb[2]).toString(16)

  if (r.length == 1) r = '0' + r
  if (g.length == 1) g = '0' + g
  if (b.length == 1) b = '0' + b

  return '#' + r + g + b
}

/**
 * empty function
 */
export const emptyFunc = () => {}

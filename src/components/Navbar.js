import React , { useContext, useState } from 'react'
import { Button, InputNumber, Layout ,Pagination, Select} from 'antd'
import { FaUndo, FaRedo, FaPlay } from './FontAwesome'
import BasicButton from './form_control/BasicButton'
import "../assets/css/Navbar.css"
import { SlidesContext } from '../providers/Slides';
import HeaderTop from './Editor/Header/HeaderTop'
import HeaderBottom from './Editor/Header/HeaderBottom'
const { Header } = Layout;
export default function Navbar({openAnimationPanel}) {

  const { changeAlignment } = useContext(SlidesContext)
  
  return (
    <div>
      <HeaderTop/>
      <HeaderBottom openAnimationPanel={openAnimationPanel}/>
      
             {/* vertical center alignment  top: 282px  */}
          {/* <span className="alignment-icon" onClick ={() => changeAlignment(282)}>
            <svg viewBox="0 0 20 16"><g id="Group_2026" data-name="Group 2026" transform="translate(-1638 -143)"><rect id="Rectangle_199" data-name="Rectangle 199" width="20" height="1" rx="0.5" transform="translate(1658 152) rotate(180)"></rect><rect id="Rectangle_197" data-name="Rectangle 197" width="16" height="6" rx="1.5" transform="translate(1646 143) rotate(90)"></rect><rect id="Rectangle_198" data-name="Rectangle 198" width="9" height="6" rx="1.5" transform="translate(1655 147) rotate(90)"></rect></g></svg>
          </span> */}

           {/*bottom alignment  top: 565px  */}
          {/* <span className="alignment-icon" onClick ={() => changeAlignment(565)}>
            <svg viewBox="0 0 20 20"><g id="Group_2024" data-name="Group 2024" transform="translate(-1677 -139)"><rect id="Rectangle_199" data-name="Rectangle 199" width="20" height="1" rx="0.5" transform="translate(1697 159) rotate(180)"></rect><g id="Group_396" data-name="Group 396" transform="translate(1679 155) rotate(-90)"><rect id="Rectangle_197" data-name="Rectangle 197" width="16" height="6" rx="1.5"></rect><rect id="Rectangle_198" data-name="Rectangle 198" width="9" height="6" rx="1.5" transform="translate(0 9)"></rect></g></g></svg>
          </span> */}

          {/* <span className="alignment-icon-disable">
            <svg viewBox="0 0 20 15"><g id="Group_2029" data-name="Group 2029" transform="translate(-1880 -144)"><rect id="Rectangle_199" data-name="Rectangle 199" width="20" height="1" rx="0.5" transform="translate(1880 158)" fill="#757575"></rect><rect id="Rectangle_200" data-name="Rectangle 200" width="20" height="1" rx="0.5" transform="translate(1880 144)" fill="#757575"></rect><g id="Group_396" data-name="Group 396" transform="translate(287.5 -19.5)"><rect id="Rectangle_197" data-name="Rectangle 197" width="16" height="6" rx="1.5" transform="translate(1595 168)" fill="#757575"></rect></g></g></svg>
          </span> */}

        {/*horizontal left alignment   left: 0px; */}
          {/* <span className="alignment-icon">
            <svg viewBox="0 0 20 20"><g id="Group_2023" data-name="Group 2023" transform="translate(-1769 -139)"><rect id="Rectangle_199" data-name="Rectangle 199" width="20" height="1" rx="0.5" transform="translate(1770 139) rotate(90)"></rect><g id="Group_396" data-name="Group 396" transform="translate(178 -17)"><rect id="Rectangle_197" data-name="Rectangle 197" width="16" height="6" rx="1.5" transform="translate(1595 168)"></rect><rect id="Rectangle_198" data-name="Rectangle 198" width="9" height="6" rx="1.5" transform="translate(1595 159)"></rect></g></g></svg>
          </span> */}

            {/*horizontal center alignment   left: 64px; we can divid */}
          {/* <span className="alignment-icon">
            <svg viewBox="0 0 20 20"><g id="Group_2027" data-name="Group 2027" transform="translate(-1807 -139)"><rect id="Rectangle_199" data-name="Rectangle 199" width="20" height="1" rx="0.5" transform="translate(1816 139) rotate(90)"></rect><rect id="Rectangle_197" data-name="Rectangle 197" width="16" height="6" rx="1.5" transform="translate(1807 151)"></rect><rect id="Rectangle_198" data-name="Rectangle 198" width="9" height="6" rx="1.5" transform="translate(1811 142)"></rect></g></svg>
          </span> */}

          {/*horizontal right alignment   left: 128px; top: 0px; */}
          {/* <span className="alignment-icon">
            <svg viewBox="0 0 20 20"><g id="Group_2025" data-name="Group 2025" transform="translate(-1842 -139)"><rect id="Rectangle_199" data-name="Rectangle 199" width="20" height="1" rx="0.5" transform="translate(1862 139) rotate(90)"></rect><g id="Group_396" data-name="Group 396" transform="translate(1858 157) rotate(180)"><rect id="Rectangle_197" data-name="Rectangle 197" width="16" height="6" rx="1.5"></rect><rect id="Rectangle_198" data-name="Rectangle 198" width="9" height="6" rx="1.5" transform="translate(0 9)"></rect></g></g></svg>
          </span> */}
          {/* <span className="alignment-icon-disable">
            <svg viewBox="0 0 15 20"><g id="Group_2028" data-name="Group 2028" transform="translate(-1715 -139)"><rect id="Rectangle_199" data-name="Rectangle 199" width="20" height="1" rx="0.5" transform="translate(1716 139) rotate(90)" fill="#757575"></rect><rect id="Rectangle_200" data-name="Rectangle 200" width="20" height="1" rx="0.5" transform="translate(1730 139) rotate(90)" fill="#757575"></rect><g id="Group_396" data-name="Group 396" transform="translate(1893.5 -1453.5) rotate(90)"><rect id="Rectangle_197" data-name="Rectangle 197" width="16" height="6" rx="1.5" transform="translate(1595 168)" fill="#757575"></rect></g></g></svg>
          </span> */}
      
    </div>
  )
}

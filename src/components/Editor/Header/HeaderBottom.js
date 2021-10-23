import React, { useContext, useState,useEffect,useRef } from "react";
import { Button, InputNumber, Layout, Pagination, Select } from "antd";
import { FaUndo, FaRedo, FaPlay } from "../../FontAwesome";
import BasicButton from "../../form_control/BasicButton";
import { isUrl } from "../../../helper/meta";
import "../../../assets/css/Navbar.css";
import { SlidesContext } from "../../../providers/Slides";
import {
  PlusOutlined,
  MinusOutlined,
  FontColorsOutlined,
  BgColorsOutlined,
  BoldOutlined,
  ItalicOutlined,
  FontSizeOutlined,
  AlignLeftOutlined,
  AlignCenterOutlined,
  AlignRightOutlined,
  LinkOutlined,
  DeleteFilled,
} from "@ant-design/icons";
import { FontSize } from "../../../assets/imgs/FontSize";
import Animation from "../../animation/Animation";
import { headerCss } from "../../../helper/constants/Contants";
const {fontFamily,sizeDecreament,sizeIncreament,fontColor,backgroundColor,fontWeightBold,fontStyleItaic,fontSize,fontWeightLighter,textAlignLeft,textAlignCenter,textAlignRight} = headerCss;
const { Header } = Layout;
export default function HeaderBottom({
  optionVisiblity = true,
  openAnimationPanel,
}) {
  //   const { changeAlignment } = useContext(SlidesContext)

  //For Animation

  const [isOpen, setIsOpen] = useState(false);
  const [sideType, setSideType] = useState("");
  const [isTrue,setIstrue] = useState(false);
  const [input,setInput] = useState()
  const [invalidurl,setInvalidurl] = useState()
  const openSecondarySider = (type) => {
    if (sideType === type && isOpen) {
      setIsOpen(false);
      setSideType("");
      return;
    } else {
      setIsOpen(true);
      switch (type) {
        case "background":
          setSideType(type);
          break;
        case "text":
          setSideType(type);
          break;
        case "media":
          setSideType(type);
          break;
        case "objects":
          setSideType(type);
          break;
        case "help":
          setSideType(type);
          break;

        default:
          setIsOpen(!isOpen);
          break;
      }
    }
  };

  let urlRef = useRef();
  useEffect(() => {
    
    document.addEventListener("mousedown",(event)=>{
      if(!urlRef.current?.contains(event.target)){
        setIstrue(false);  
      }
    })
  },[])

  const { Option } = Select;

  function changeFontStyle(value) {
    console.log(`selected ${value}`);
  }
  function changeFontStyleSearch(val) {
    console.log("search:", val);
  }
  function changeFontWeight(value) {
    console.log(`selected ${value}`);
  }
  function changeFontWeightSearch(val) {
    console.log("search:", val);
  }

  const [count, setCount] = useState(0);
  return (
    <div>
      <Header className="headerTwo">
        {optionVisiblity && (
          <div className="icon-container">
            <span onClick={()=>{
              console.log(fontFamily)
            }} style={{ margin: "3px 10px 0 0" }}>
              <Select
                showSearch
                style={{ width: 100 }}
                placeholder="Arial"
                optionFilterProp="children"
                onChange={changeFontStyle}
                onSearch={changeFontStyleSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="Arial">Arial</Option>
                <Option value="Roboto">Roboto</Option>
                <Option value="Serif">Serif</Option>
                <Option value="Sans-serif">Sans-serif</Option>
                <Option value="Fantasy ">Fantasy </Option>
              </Select>
            </span>
            <span
              onClick={() => {
                console.log(sizeDecreament)
                if (count > 0) {
                  setCount(count - 1);
                } else {
                  alert("You can't less more than 0");
                }
              }}
            >
              <MinusOutlined className="minusIcon"/>
            </span>
            <span>
              <input className="inputCount" value={count} />
            </span>
            <span
              onClick={() => {
                console.log(sizeIncreament)
                if (count <= 9) {
                  setCount(count + 1);
                } else {
                  alert("You can't add more than 10");
                }
              }}
            >
              <PlusOutlined className="plusIcon" />
            </span>
            <span onClick={()=>{
              console.log(fontColor)
            }} className="alignment-icon">
              <FontColorsOutlined />
            </span>
            <span onClick={()=>{
              console.log(backgroundColor)
            }} className="alignment-icon">
              <BgColorsOutlined />
            </span>
            <span onClick={()=>{
              console.log(fontWeightBold)
            }} className="alignment-icon">
              <BoldOutlined />
            </span>
            <span onClick={()=>{
              console.log(fontStyleItaic)
            }} className="alignment-icon">
              <ItalicOutlined />
            </span>
            <span onClick={()=>{
              console.log(fontSize)
            }} className="alignment-icon">
              <FontSize />
            </span>
            <span onClick={()=>{
              console.log(fontWeightLighter)
            }} style={{ marginTop: "3px" }}>
              <Select
                showSearch
                style={{ width: 100 }}
                placeholder="Regular"
                optionFilterProp="children"
                onChange={changeFontWeight}
                onSearch={changeFontWeightSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="Light">Light</Option>
                <Option value="Bold">Bold</Option>
                <Option value="Bolder">Bolder</Option>
                <Option value="Regular">Regular</Option>
              </Select>
            </span>
            <span onClick={()=>{
              console.log(textAlignLeft)
            }} className="alignment-icon">
              <AlignLeftOutlined />
            </span>
            <span onClick={()=>{
              console.log(textAlignCenter)
            }} className="alignment-icon">
              <AlignCenterOutlined />
            </span>
            <span onClick={()=>{
              console.log(textAlignRight)
            }} className="alignment-icon">
              <AlignRightOutlined />
            </span>
            <span className="alignment-icon">
              <LinkOutlined onClick={()=>setIstrue(true)}/>
      { isTrue ? 
      <div ref={urlRef} className="urlModal">
        <input type="url" placeholder='Enter url' onChange={(e)=>{
             setInput(e.target.value)
        }}/>
        <BasicButton onClick={()=>{
          isUrl(input) ? setInvalidurl("Correct Url") : setInvalidurl("Invalid Url") 
        }} size='sm' className='btn'>Apply URL</BasicButton>
        <h3 style={{textAlign:'center'}}>{invalidurl}</h3>
      </div> : null }
            </span>
            <BasicButton
              className="animateBtn"
              type="default"
              withTooltip
              tooltipProps={{
                tooltipTitle: "Animate",
              }}
              onClick={() => openAnimationPanel({ component: <Animation /> })}
            >
              Animate
            </BasicButton>
            <span className="deleteIcon">
              <DeleteFilled />
            </span>
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
        )}{" "}
      </Header>
      <div
        className={
          sideType === "background" && isOpen
            ? "sideBarContent sideBarContent-active"
            : "sideBarContent"
        }
        onClick={() => openSecondarySider("background")}
      >
        {/* <div className='sideBarIcons'>
            </div>
            <div className='sideBarTexts'>Background</div> */}
      </div>
    </div>
  );
}

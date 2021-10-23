import React,{useState,useRef,useEffect} from 'react'
import { Row, Col, Slider, InputNumber } from 'antd'
import { FaAdd, FaStopwatch } from '../../FontAwesome'
import BasicButton from '../../form_control/BasicButton'

const MiddleElements = ({ onAdd }) => {
  const [isTrue, setIstrue] = useState(false)
  const [state,setState] = useState(
    {
      inputValue: 1,
      time: 's'
    }
  )
  const stopWatchModal = useRef()
  useEffect(() => {
    document.addEventListener("mousedown",(e)=>{
      if(!stopWatchModal.current?.contains(e.target)){
        setIstrue(false);
      }
    })
  }, [])
  const onChange = value => {
    setState({
      inputValue: value,
      time: 's'
    });
  };
  return (
    <div className='middle-elements'>
      <Row>
        <Col>
          <BasicButton
            withTooltip
            icon={<FaAdd />}
            className='btn-save-m-e'
            tooltipProps={{ tooltipTitle: 'Add New Slide' }}
            onClick={onAdd}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: 25 }}>
        <Col>
          <FaStopwatch  style={{cursor: 'pointer'}} onClick={()=>setIstrue(!isTrue)} />
        </Col>
      </Row>
      <Row style={{ marginTop: 10 }}>
        <Col>Auto advance</Col>
      </Row>
      <Row>
      { isTrue ? 
      <div ref={stopWatchModal} className="customModal">
        <div className="topContent">
          <input type="checkbox"/>
          <span>Enable auto advance</span>
        </div>
        <h6>Delay</h6>
      <div className="slider">
      <Row>
        <Col span={8}>
          <Slider style={{width: "80px"}}
            min={1}
            max={50}
            onChange={onChange}
            trackStyle={{backgroundColor: 'black'}}
            handleStyle={{backgroundColor: 'black',border: 'black'}}
            value={typeof state.inputValue === 'number' ? state.inputValue : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={50}
            style={{backgroundColor: "transparent",border:'none', marginLeft: "60px",color: 'black'}}
            value={state.inputValue+ state.time}
            onChange={onChange}
          />
        </Col>  
      </Row>
      </div>
      
      </div> : null }
      </Row>
      <Row style={{ marginTop: 10, fontSize: '10px' }}>
        <Col>Disable</Col>
      </Row>
    </div>
  )
}

export default MiddleElements

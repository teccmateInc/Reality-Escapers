import React, { useContext } from "react";
import { Button, Layout, Row } from "antd";
import { FaLayerGroup, FaRuler } from "./FontAwesome";
import Slides from "./Editor/Slider/Slides";
import WidthDropDown from "./Editor/WidthDropDown";
import { SlidesContext } from "../providers/Slides";
import Transition from "./Editor/Slider/Transition";
import { Link } from "react-router-dom";

const { Content } = Layout;

export default function MainContent() {
  const { slides } = useContext(SlidesContext);
  const noOfSlides = slides.length;
  const slidesCount = `${noOfSlides} Slide${noOfSlides > 1 ? "(s)" : ""}`;

  return (
    <Content className="content"> 
      <Row className="slider">
        {/* <Slides /> */}
        <Transition />
      </Row>
      <div className="bottomButtons">
        <Button type="default" className="btn">
          <FaRuler />
        </Button>
        <WidthDropDown />
      
      <Link to="/stories/allSlides"style={{ cursor: "pointer" }}>
          <Button type="default" className="btn">
            <FaLayerGroup /> &nbsp; {slidesCount}
          </Button>
       </Link>
      </div>
    </Content>
  );
}

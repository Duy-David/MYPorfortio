import React from "react";
import "./service.scss";
import theme_pattern from "../../assets/theme_pattern.svg"
import Services_Data from "../../assets/services_data";
import arrow_icon from '../../assets/arrow_icon.svg'
const Service = () => {
  return (
    <div id="services" className="services">
      <div className="title-box">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
      {Services_Data.map((item,index)=>{
        return <div key={index} className="services-format">
            <h3>{item.s_no}</h3>
            <h2>{item.s_name}</h2>
            <p>{item.s_desc}</p>
            <div className="service-readmore">
                <p>Read more</p>
                <img src={arrow_icon} alt="" />
            </div> 
        </div>
      })}
      </div>
    </div>
  );
};

export default Service;

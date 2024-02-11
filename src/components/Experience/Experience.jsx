import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>9071</div>
        <span  style={{color: darkMode?'white':''}}>In 250k+</span>
        <span>JEE ADVANCED</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>500</div>
        <span  style={{color: darkMode?'white':''}}>In 6k+</span>
        <span>Dakshana</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>80</div>
        <span  style={{color: darkMode?'white':''}}>In 2k+</span>
        <span>JNV</span>
      </div>
    </div>
  );
};

export default Experience;

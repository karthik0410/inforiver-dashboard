
import "../CSS/toolbar.css";
import "../CSS/style.css";
import { getIcon } from "../constant/Helper";
import { useState } from "react";
import { SketchPicker } from 'react-color';

const Toolbar = ({ setRows, setColumns }) => { 
  const [isChecked, setIsChecked] = useState(true);
  const [color1, setColor1] = useState('#ffffff');
  const [color2, setColor2] = useState('#ffffff');
  const [showColorPicker1, setShowColorPicker1] = useState(false);
  const [showColorPicker2, setShowColorPicker2] = useState(false);
  


  const handleInputChange1 = (e) => {
    const value = parseInt(e.target.value);
    setRows(value);
  };

  const handleInputChange2 = (e) => {
    const value = parseInt(e.target.value);
    setColumns(value);
  };

  const handleToggleChange = () => {
    setIsChecked(!isChecked);
  };

  const handleColorChange1 = (selectedColor) => {
    setColor1(selectedColor.hex);
  };

  const handleColorChange2 = (selectedColor) => {
    setColor2(selectedColor.hex);
  };

  const toggleColorPicker1 = () => {
    setShowColorPicker1(!showColorPicker1);
    setShowColorPicker2(false);
  };

  const toggleColorPicker2 = () => {
    setShowColorPicker2(!showColorPicker2);
    setShowColorPicker1(false);
  };
  return (
    <div className="toolbar-container">
      {/* Grid */}
      <div className="gridContainer">
        <div className="gridItem">
          <div className="gridText">Grid</div>
        </div>
      </div>
      <div className="componentWrapper">
        <div className="columnWrapper">
          <div className="columnTitle">Column</div>
          <div className="columnContent">
            <input
              type="number"
              id="row"
              name="row"
              min="0"
              defaultValue="3"
              onChange={handleInputChange1}
            />
          </div>
        </div>
        <div className="rowWrapper">
          <div className="rowTitle">Row</div>
          <div className="rowContent">
            <input
              type="number"
              id="col"
              name="col"
              min="0"
              defaultValue="3"
              onChange={handleInputChange2}
            />
          </div>
        </div>
      </div>

      {/* Spacing */}
      <div className="spacingWrapper">
        <div className="spacingHeader">
          <div className="spacingTitle">Spacing</div>
        </div>
        <div className="spacingCont`ent">
          <div className="spacingItem">
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="0"
              defaultValue="0"
            />
          </div>
        </div>
      </div>

      <div className="marginWrapper">
        <div className="marginHeader">
          <div className="marginTitle">Margin</div>
        </div>
        <div className="marginContent">
          <div className="marginItem">
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="0"
              defaultValue="0"
            />
          </div>
        </div>
      </div>


      {/* Margin */}


      {/* Corner radius */}
      <div className="cornerRadiusContainer">
        <div className="cornerRadiusHeader">
          <div className="marginTitle">Corner radius</div>
        </div>
        <div className="cornerRadiusContent">
          <div className="cornerRadiusItem">
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="0"
              defaultValue="0"
            />
          </div>
        </div>
      </div>

      {/* Stoke */}
      <div className="stokeContainer">
        <div className="stokeHeader">
          <div className="headerText">Stoke</div>
        </div>
        <div className="stoke">
          <div className="stokeContent">
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="0"
              defaultValue="0"
            />
            </div>
            <div className="color-picker">
              <div className="colorBox" onClick={toggleColorPicker1}>
                {showColorPicker1 && (
                  <SketchPicker color={color1} onChange={handleColorChange1} className="picker" />
                )}
              </div>
            </div>
          </div>
        
        {/* Shadow */}
        <div className="shadowContainer">
          <div className="shadowHeader">
            <div className="headerText">Shadow</div>
          </div>
          <div className="shadowItem">
            <div className="shadowContent">
              <div className="shadowBox">
                <div className="shadow">
                  <label className="switch">
                    <input type="checkbox" checked={isChecked} onChange={handleToggleChange}></input>
                    <span className="slider round"></span>
                  </label>
                  <div className="color-picker">
                    <div className="colorBox" onClick={toggleColorPicker2}>
                      {showColorPicker2 && (
                        <SketchPicker color={color2} onChange={handleColorChange2} className="picker_shadow" />
                      )}
                    </div>
                  </div>
                </div>
                <div className="all-shadows">
                  <div className="shadowInner">
                    <div className="shadow-icon">
                      <i className={getIcon("light-shadow-top")}></i>
                    </div>
                    <div className="shadow-icon">
                      <i className={getIcon("light-shadow-topleft")}></i>
                    </div>
                    <div className="shadow-icon">
                      <i className={getIcon("light-shadow-right")}></i>
                    </div>
                    <div className="shadow-icon">
                      <i className={getIcon("light-shadow-bottomleft")}></i>
                    </div>
                    <div className="shadow-icon">
                      <i className={getIcon("light-shadow-bottom")}></i>
                    </div>
                    <div className="shadow-icon">
                      <i className={getIcon("light-shadow-bottomright")}></i>
                    </div>
                    <div className="shadow-icon">
                      <i className={getIcon("light-shadow-left")}></i>
                    </div>
                    <div className="shadow-icon">
                      <i className={getIcon("light-shadow-centre")}></i>
                    </div>
                    <div className="shadow-icon">
                      <i className={getIcon("light-shadow-topright")}></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shadowBox">
                <div className="shadowInner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      </div>
  );
};

export default Toolbar;






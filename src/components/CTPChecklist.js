import React, { Component } from "react"; 

class CTPChecklist extends Component {

    render() { 
        return (
          <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
            <title>CTP Checklist</title>
            
          </head>
          <body>
          <form onSubmit={this.handleSubmit}>
          <div className="section">
              <h2>1: In Job</h2>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section1[]" value="Machine Detail" /> Machine Detail
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section1[]" value="Approved A/W & Separation printout (with all lines mentioned)" /> Approved A/W & Separation printout (with all lines mentioned)
                  </label>
                </div>
              
                <div className="name-input">
                  <label htmlFor="name">Sign Off:</label>
                  <input type="text" id="name" name="name" required />
                </div>
              
                <div className="submit-button-class">
                  <button className="submit-button" type="submit">SAVE</button>
                </div>


            </div>
    
            <div className="section">
              <h2>2: On Job</h2>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section2[]" value="Exposure & Developer Machine Temperature " /> Exposure & Developer Machine Temperature 
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section2[]" value="Physically Plate Check before exposing" /> Physically Plate Check before exposing 
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section2[]" value="Check Color Layer of set with separation" /> Check Color Layer of set with separation 
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section2[]" value="Scum Test (If required)" /> Scum Test (If required) 
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section2[]" value="Angle/Gripper detail noting" /> Angle/Gripper detail noting 
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section2[]" value="Positive Density Check" /> Positive Density Check 
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section2[]" value="Physically positive check for Mesh etc." /> Physically positive check for Mesh etc. 
                  </label>
                </div>
              
                <div className="name-input">
                  <label htmlFor="name">Sign Off:</label>
                  <input type="text" id="name" name="name" required />
                </div>
              
                <div className="submit-button-class">
                  <button className="submit-button" type="submit" onClick={() => this.handleSectionSave("section2")}>SAVE</button>
                </div>
              
            </div>
    
            <div className="section">
              <h2>3: Exit Job</h2>
              <div className="checkbox-container">
                <label>
                  <input type="checkbox" name="section3[]" value="No. of plate/positive check and note them" /> No. of plate/positive check and note them 
                </label>
              </div>
              <div className="checkbox-container">
                <label>
                  <input type="checkbox" name="section3[]" value="Plate transfer to offset proof dept" /> Plate transfer to offset proof dept
                </label>
              </div>
              <div className="checkbox-container">
                <label>
                  <input type="checkbox" name="section3[]" value="Positive transfer to silkscreen dept" /> Positive transfer to silkscreen dept 
                </label>
              </div>
              <div className="checkbox-container">
                <label>
                  <input type="checkbox" name="section3[]" value="Extra Plate" /> Extra Plate
                </label>
              </div>

    
                <div className="name-input">
                  <label htmlFor="name">Sign Off:</label>
                  <input type="text" id="name" name="name" required />
                </div>
    
                <div className="submit-button-class">
                  <button className="submit-button" type="submit">
                    SAVE
                  </button>
                </div>
            </div>
    
            <div className="section">
              <div className="remarks">
                <div className="input-container">
                  <label htmlFor="userInput">Remarks:</label>
                  <input type="text" id="userInput" name="userInput" required />
                </div>
              </div>
    
              <div className="hand-off-tracker">
                <div className="row-one">Hand-Off Details</div>
                <div className="row-two">
                  Given By:
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="row-three">
                  Taken By:
                  <input type="text" id="name" name="name" required />
                </div>
              </div>
            </div>
    
            <div className="section">
              <button className="submit-button" type="submit"  >
                SUBMIT FORM
              </button>
            </div>
            </form>
          </body>
        </html>

        )
    }
}

export default CTPChecklist;






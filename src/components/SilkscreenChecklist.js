import React, { Component } from "react"; 

class SilkscreenChecklist extends Component {

    render() { 
        return (
          <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
            <title>Silkscreen Checklist</title>
            
          </head>
          <body>
          <form onSubmit={this.handleSubmit}>
          <div className="section">
              <h2>1: In Job</h2>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section1[]" value="Check positive with approved A/W, separation print and proof sheets" /> Check positive with approved A/W, separation print and proof sheets 
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section1[]" value="Mesh selection based on the job" /> Mesh selection based on the job 
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section1[]" value="No. Of proof sheet received from other dept" /> No. Of proof sheet received from other dept 
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section1[]" value="No. Of proof sheets required to be mentioned before the S/S print" /> No. Of proof sheets required to be mentioned before the S/S print
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
                    <input type="checkbox" name="section2[]" value="Mesh preparation & QC" /> Mesh preparation & QC 
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section2[]" value="Check ink lustre against reference & QC and sign " /> Check ink lustre against reference & QC and sign 
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section2[]" value="CInk Ratio as per the standard (reference) " /> Ink Ratio as per the standard (reference) 
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section2[]" value="Registration, thickness, sharpness of element " /> Registration, thickness, sharpness of element  
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
                  <input type="checkbox" name="section3[]" value="Final QC of supervisor with all given input" /> Final QC of supervisor with all given input 
                </label>
              </div>
              <div className="checkbox-container">
                <label>
                  <input type="checkbox" name="section3[]" value="Mark good quality sheet" /> Mark good quality sheet 
                </label>
              </div>
              <div className="checkbox-container">
                <label>
                  <input type="checkbox" name="section3[]" value="Proofsheet quantity transfer to the next dept" /> Proofsheet quantity transfer to the next dept 
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

export default SilkscreenChecklist;






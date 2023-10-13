import React, { Component } from "react"; 

class FinalChecklist extends Component {

    render() { 
        return (
          <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
            <title>Final Mockup & QC Checklist</title>
            
          </head>
          <body>
          <form onSubmit={this.handleSubmit}>
          <div className="section">
              <h2>1: In Job</h2>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section1[]" value="Printout of approved A/W received " /> Printout of approved A/W received 
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section1[]" value="Check for GHW sticker " /> Check for GHW sticker 
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section1[]" value="Check for the approved Proofsheet & matched with approved A/W " /> Check for the approved Proofsheet & matched with approved A/W 
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section1[]" value="Check for the punched sheets " /> Check for the punched sheets 
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
                    <input type="checkbox" name="section2[]" value="QC of punched sheets against approved A/W" /> QC of punched sheets against approved A/W 
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section2[]" value="QC of punched sheets for color & Postpress operations against approval sheet " /> QC of punched sheets for color & Postpress operations against approval sheet 
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section2[]" value="GHW pasted on the mockup " /> GHW pasted on the mockup 
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
                  <input type="checkbox" name="section3[]" value="Check final mockup quality with approvals " /> Check final mockup quality with approvals 
                </label>
              </div>
              <div className="checkbox-container">
                <label>
                  <input type="checkbox" name="section3[]" value="Record & archive good quality sheets " /> Record & archive good quality sheets 
                </label>
              </div>
              <div className="checkbox-container">
                <label>
                  <input type="checkbox" name="section3[]" value="Billing copy & DSO proof " /> Billing copy & DSO proof 
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

export default FinalChecklist;






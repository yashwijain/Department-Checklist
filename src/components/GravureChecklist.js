import React, { Component } from "react"; 

class GravureChecklist extends Component {

    render() { 
        return (
          <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
            <title>Gravure Checklist</title>
            
          </head>
          <body>
          <form onSubmit={this.handleSubmit}>
          <div className="section">
              <h2>1: In Job</h2>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section1[]" value="Check job print with approved A/W" /> Check job print with approved A/W
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section1[]" value="Check cylinder as per the job" /> Check cylinder as per the job
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section1[]" value="Check no. of sheet received from other department" /> Check no. of sheet received from other department
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section1[]" value="Check for ink (min 6 kg with solvent)" /> Check for ink (min 6 kg with solvent) 
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section1[]" value="Color/effect reference" /> Color/effect reference 
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section1[]" value="No. of proof sheets required to print before gravure printing" /> No. of proof sheets required to print before gravure printing
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
                    <input type="checkbox" name="section2[]" value="Check ink viscosity" /> Check ink viscosity  
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section2[]" value="Check color/effect with reference" /> Check color/effect with reference
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section2[]" value="Registration" /> Registration 
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section2[]" value="Printing quality" /> Printing quality 
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section2[]" value="Ink quality" /> Ink quantity 
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section2[]" value="Ink mixing ratio" /> Ink mixing ratio
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section2[]" value="Check the printed sheet with the approved A/W" /> Check the printed sheet with the approved A/W
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
                  <input type="checkbox" name="section3[]" value="Ink ratio recording " /> Ink ratio recording 
                </label>
              </div>
              <div className="checkbox-container">
                <label>
                  <input type="checkbox" name="section3[]" value="Board numbering" /> Board numbering 
                </label>
              </div>
              <div className="checkbox-container">
                <label>
                  <input type="checkbox" name="section3[]" value="Mark good quality sheet" /> Mark good quality sheet  
                </label>
              </div>
              <div className="checkbox-container">
                <label>
                  <input type="checkbox" name="section3[]" value="Board transfer quantity to other dept in entry " /> Board transfer quantity to other dept in entry 
                </label>
              </div>
              <div className="checkbox-container">
                <label>
                  <input type="checkbox" name="section3[]" value="Board transfer quantity to other dept in entry" /> Board transfer quantity to other dept in entry 
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

export default GravureChecklist;






import React, { Component } from "react"; 
import jsPDF from "jspdf";


class GraphicDesignChecklist extends Component {

    state = {
      section1Values: [],
      section2Values: [],
      section3Values: [],
      section1Checked: {}, // Track checked status for section 1 checkboxes
      section2Checked: {}, // Track checked status for section 2 checkboxes
      section3Checked: {}, // Track checked status for section 3 checkboxes
      editable: true, // State variable to track editability
    };
  
    handleCheckboxChange = (sectionName, checkboxValue) => {
      // Toggle the checked status of the checkbox
      this.setState((prevState) => ({
        [`${sectionName}Checked`]: {
          ...prevState[`${sectionName}Checked`],
          [checkboxValue]: !prevState[`${sectionName}Checked`][checkboxValue],
        },
      }));
    };
  
    handleSectionSave = (sectionName) => {
      const checkboxes = document.querySelectorAll(
        `input[name="${sectionName}[]"]:checked`
      );
      const values = Array.from(checkboxes).map((checkbox) => checkbox.value);
  
      this.setState({ [sectionName]: values, editable: false }); // Disable editing
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
    
      // Create a new jsPDF instance
      const doc = new jsPDF();
    
      // Retrieve the saved values and checked statuses
      const {
        section1Values,
        section2Values,
        section3Values,
        section1Checked,
        section2Checked,
        section3Checked,
      } = this.state;
    
      // Start adding content to the PDF
      doc.setFontSize(14);
      doc.text("Graphic Design Checklist", 10, 10);
    
      // Add content for Section 1
      doc.setFontSize(10);
      doc.text("Section 1: In Job", 10, 20);
      section1Values.forEach((value, index) => {
        const isChecked = section1Checked[value];
        doc.text(
          `${index + 1}. ${value} ${isChecked ? "(checked)" : ""}`,
          15,
          30 + index * 10
        );
      });
    
      // Add content for Section 2
      doc.text("Section 2: On Job", 10, 60);
      section2Values.forEach((value, index) => {
        const isChecked = section2Checked[value];
        doc.text(
          `${index + 1}. ${value} ${isChecked ? "(checked)" : ""}`,
          15,
          70 + index * 10
        );
      });
    
      // Add content for Section 3
      doc.text("Section 3: Exit Job", 10, 140);
      section3Values.forEach((value, index) => {
        const isChecked = section3Checked[value];
        doc.text(
          `${index + 1}. ${value} ${isChecked ? "(checked)" : ""}`,
          15,
          150 + index * 10
        );
      });
    
      // Save the PDF
      doc.save("graphic_design_checklist.pdf");
    };
  

    render() { 
        return (
          <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
            <title>Graphic Design Checklist</title>
            
          </head>
          <body>
          <form onSubmit={this.handleSubmit}>
          <div className="section">
              <h2>1: In Job</h2>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section1[]" value="Job Detail (Option Wise Job Details)" /> Job Detail (Option Wise Job Details)
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section1[]" value="Machine Type: GTO, Small Ryobi, Flatbed" /> Machine Type: GTO, Small Ryobi, Flatbed
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section1[]" value="Approved A/W Color Reference, Foil Reference, Defoil" /> Approved A/W Color Reference, Foil Reference, Defoil
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
                    <input type="checkbox" name="section2[]" value="Job No, Job, Name Date (DDMMYY), Operate Name, Gripper Mark, Susbtrate, Research Qty: To be written in the bottom of the set" /> Job No, Job, Name Date (DDMMYY), Operate Name, Gripper Mark, Susbtrate, Research Qty: To be written in the bottom of the set
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section2[]" value="No. of colors in each set (Max 10 colors including GHW in Gravure Printing)" /> No. of colors in each set (Max 10 colors including GHW in Gravure Printing)
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section2[]" value="Gravure colors should be marked with Prefix 'GR'" /> Gravure colors should be marked with Prefix 'GR'
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section2[]" value="Color Name, Color Sequence, Color Strip on the top" /> Color Name, Color Sequence, Color Strip on the top
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section2[]" value="Registeration Mark, Cutting Pin, Color Patch, Bleed in each option" /> Registeration Mark, Cutting Pin, Color Patch, Bleed in each option
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section2[]" value="Pressure Mark / Ink Water Balance mark in the job" /> Pressure Mark / Ink Water Balance mark in the job
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section2[]" value="Cutout (Max 2 colors), Overprint, Trapping given" /> Cutout (Max 2 colors), Overprint, Trapping given
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section2[]" value="PDF for Local Foil / Emboss Block" /> PDF for Local Foil / Emboss Block
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section2[]" value="AI & PDF for Outside Foil / Emboss Block" /> AI & PDF for Outside Foil / Emboss Block
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section2[]" value="Old Foil / Emboss Block (With reference to Old Job No.)" /> Old Foil / Emboss Block (With reference to Old Job No.)
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section2[]" value="Position Film for Foil Block" /> Position Film for Foil Block
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section2[]" value="White Underlay in color swatches for metallic board" /> White Underlay in color swatches for metallic board
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section2[]" value="Matt Varnish for cork PCT" /> Matt Varnish for cork PCT
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section2[]" value="Varnish / Soft Touch / UV / Foil / Emboss Color Patch in Darker Color" /> Varnish / Soft Touch / UV / Foil / Emboss Color Patch in Darker Color
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section2[]" value="Lines to be mentioned in the output" /> Lines to be mentioned in the output
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section2[]" value="Check Tac Value in Output PDF" /> Check Tac Value in Output PDF
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section2[]" value="Color Reference to machine department" /> Color Reference to machine department
                  </label>
                </div>
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" name="section2[]" value="Proof and Postpress operations mentioned in output composite outprint" /> Proof and Postpress operations mentioned in output composite outprint
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
                  <input type="checkbox" name="section3[]" value="Check Approved A/W with output" /> Check Approved A/W with output
                </label>
              </div>
              <div className="checkbox-container">
                <label>
                  <input type="checkbox" name="section3[]" value="AW & Separation print for plate/positive making" /> AW & Separation print for plate/positive making
                </label>
              </div>
              <div className="checkbox-container">
                <label>
                  <input type="checkbox" name="section3[]" value="Check separation (In terms of Cutout / Overprint / Trapping with AW Print)" /> Check separation (In terms of Cutout / Overprint / Trapping with AW Print)
                </label>
              </div>
              <div className="checkbox-container">
                <label>
                  <input type="checkbox" name="section3[]" value="Drop the file to navigator or mail to CTP" /> Drop the file to navigator or mail to CTP
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

export default GraphicDesignChecklist;






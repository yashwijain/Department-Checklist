import React, { Component } from "react"; // Make sure to import React in your component file
import { Link } from "react-router-dom" // Import Link here

class ChecklistManager extends Component { 
  render() {
    return (

      <html lang="en">

        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Checklist Manager</title>
        </head>
        
        <body>
        <div class="top-panel">
          <ul class="nav-menu">
            <li><a href="#">Contact</a></li>
            <li><a href="#">Dashboard</a></li>
            <Link to="/allopenjobs">
              <li><a href="#">Open Jobs</a></li>
            </Link> 
          </ul>
        </div>
       
          <div className="checklist-container">

            {/* First Row */}
            <div className="row">
              <div className="column-select">SELECT A CHECKLIST: </div>
            </div>

            {/* Second Row with 4 Columns */}
            <div className="row">
              <Link to="/graphicdesignform">
                <div className="column-box">Graphic Design</div>
              </Link>
            <Link to="/ctpform">
              <div className="column-box">CTP</div>
            </Link>
            <Link to="/offsetproofform">
              <div className="column-box">Offset Proof</div>
            </Link>
            <Link to="/gravureform">
              <div className="column-box">Gravure</div>
            </Link>
            </div>

            {/* Third Row with 4 Columns */}
            <div className="row">
              <Link to="/silkscreenform">
                <div className="column-box">Silkscreen</div>
              </Link>
              <Link to="/postpressform">
                <div className="column-box">Postpress</div>
              </Link>  
              <Link to="/finalform">
                <div className="column-box">Mockup & Final QC</div>
              </Link>
            </div>
            
          </div>
        </body>
        </html>

    )
  }
}

export default ChecklistManager;





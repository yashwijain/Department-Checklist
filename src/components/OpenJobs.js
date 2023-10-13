import React, { Component } from "react";
import { Link } from "react-router-dom";

class OpenJobs extends Component { 

    constructor(props) {
        super(props);
        const savedJobNumbers = localStorage.getItem('jobNumbers');
        const savedSelectedJobNumber = localStorage.getItem('selectedJobNumber');
    
        this.state = {
          newJobNumber: '',
          selectedJobNumber: savedSelectedJobNumber || '', // Initialize with the selected job number from localStorage
          jobNumbers: savedJobNumbers ? JSON.parse(savedJobNumbers) : [], // Initialize with job numbers from localStorage or an empty array
        };
      }
    
      handleInputChange = (e) => {
        this.setState({ newJobNumber: e.target.value });
      }
    
      handleSaveJobNumber = () => {
        const { newJobNumber, jobNumbers } = this.state;
        if (newJobNumber) {
          // Update the jobNumbers state and save it to localStorage
          const updatedJobNumbers = [...jobNumbers, newJobNumber];
          this.setState({ jobNumbers: updatedJobNumbers, newJobNumber: '' }, () => {
            localStorage.setItem('jobNumbers', JSON.stringify(updatedJobNumbers));
          });
        }
      }
    
      handleSelectChange = (e) => {
        const selectedJobNumber = e.target.value;
        this.setState({ selectedJobNumber }, () => {
          // Save the selectedJobNumber to localStorage whenever it changes
          localStorage.setItem('selectedJobNumber', selectedJobNumber);
        });
      }
    

    render() { 
        const { newJobNumber, selectedJobNumber, jobNumbers } = this.state;

        return (
            <html land="en">

                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
                    <title>All Open Jobs</title>
                </head>
                
                <body>

                <div class="top-panel">
                    <ul class="nav-menu">
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Dashboard</a></li>
                        <Link to="/checklistsmanager">
                            <li><a href="#">Checklists</a></li>
                        </Link>
                    </ul>
                </div>

                <div className="jobs-generation">
                    <h2 className="add">Add a Job Number</h2>
                    <input 
                    type="text" 
                    placeholder="Enter a Job Number" 
                    value={newJobNumber} 
                    onChange={this.handleInputChange} 
                    style={{ width: "200px", height: "30px" }}/>
                    <button onClick={this.handleSaveJobNumber} 
                    style={{ width: "50px", height: "35px", cursor: "pointer"}}>Save</button>
                    
                    <div className="dropdown-selection">
                        <h2 className="select">Select a Job Number</h2>
                        <select 
                        value={selectedJobNumber} 
                        onChange={this.handleSelectChange}
                        style={{ width: "100px", height: "30px" }}
                        >
                            <option value="" disabled></option>
                            {jobNumbers.map((jobNumber, index) => (
                            <option key={index} value={jobNumber}>{jobNumber}</option> ))}
                        </select>
                    </div>

                      <div><button 
                      style={{
                        width: "110px",
                        height: "30px",
                        fontWeight: "bold",
                        backgroundColor: "white",
                        color: "black",
                        borderRadius: "5px",
                        cursor: "pointer",
                        border: "1px solid black",
                        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                        marginTop: "30px"
                      }}>SUBMIT</button></div>

                    </div>


                


                </body>

            </html>
            
        )
    }
}

export default OpenJobs;
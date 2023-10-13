import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import OpenJobs from './components/OpenJobs';
import ChecklistManager from './components/ChecklistManager';
import GraphicDesignChecklist from './components/GraphicDesignChecklist';
import CTPChecklist from './components/CTPChecklist';
import OffsetProofChecklist from './components/OffsetProofChecklist';
import GravureChecklist from './components/GravureChecklist';
import SilkscreenChecklist from './components/SilkscreenChecklist';
import PostpressChecklist from './components/PostpressChecklist';
import FinalChecklist from './components/FinalChecklist';


class App extends Component {
  
  render() {
    return (
        <Router>
        <Routes>
          { /* Set up 3 routs: one for the home page, another for checklist manager page, 
          and the last for the graphic design checklist page */ }
          <Route path="/" exact element={<HomePage/>}/>
          <Route path="/allopenjobs" element={<OpenJobs/>}/>
          <Route path="/checklistsmanager" element={<ChecklistManager/>}/>
          <Route path="/graphicdesignform" element={<GraphicDesignChecklist/>}/>
          <Route path="/ctpform" element={<CTPChecklist/>}/>
          <Route path="/offsetproofform" element={<OffsetProofChecklist/>}/>
          <Route path="/gravureform" element={<GravureChecklist/>}/>
          <Route path="/silkscreenform" element={<SilkscreenChecklist/>}/>
          <Route path="/postpressform" element={<PostpressChecklist/>}/>
          <Route path="/finalform" element={<FinalChecklist/>}/>

        </Routes>
      </Router>
    );
  }
}

export default App;



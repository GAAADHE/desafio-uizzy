import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';
import { useState } from 'react';

import PatientTimeline from './PatientTimeline';
import PatientMedias from './PatientMedias';
import PatientAttachments from './PatientAttachments';
import PatientTreatments from './PatientTreatments';


export default function Tabs(){
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <div className="tabs-container">
      <div className="tabs-menu">

        <button
            className={toggleState === 1 ? "tab active-tab" : "tab"}
            onClick={() => toggleTab(1)}
          >
          Timeline
        </button>
        <button
          className={toggleState === 2 ? "tab active-tab" : "tab"}
          onClick={() => toggleTab(2)}
        >
          Treatments
        </button>
        <button
          className={toggleState === 3 ? "tab active-tab" : "tab"}
          onClick={() => toggleTab(3)}
        >
          Midias
        </button>
        <button
          className={toggleState === 4 ? "tab active-tab" : "tab"}
          onClick={() => toggleTab(4)}
        >
          Attachments
        </button>
      </div>

      <div className="content-tabs">
        <div
            className={toggleState === 1 ? "tab-content  active-tab-content" : "tab-content"}
          >
          <PatientTimeline/>
        </div>

        <div
          className={toggleState === 2 ? "tab-content  active-tab-content" : "tab-content"}
        >
          <PatientTreatments/>
        </div>

        <div
          className={toggleState === 3 ? "tab-content  active-tab-content" : "tab-content"}
        >
          <PatientMedias/>
        </div>

        <div
          className={toggleState === 4 ? "tab-content  active-tab-content" : "tab-content"}
        >
          <PatientAttachments/>
        </div>
      </div>
    </div>    
  );
}
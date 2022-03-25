import React from "react";
import "./style.css";
import MedicalTreatmentPanel from "./MedicalTreatmentPanel.js"
//The following line of code will call the Medical Treatment panel from the MedicalTreatmentPanel.js
export default function App() {
  return (
    <div>
      <a href='#'>
    <img class='resize_fit_center'
      src='https://www.gmmh.nhs.uk/base-install/images/main-logo/og-logo.png' />
    </a>
      <MedicalTreatmentPanel/>
    </div>
  );
}

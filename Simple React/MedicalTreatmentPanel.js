/*
The following code will import the react library.
*/
import React from "react";
import {useState} from 'react';
import "./style.css"
//The following code will take the data from the input and asssign the value in the attribute and record in the list.
const MedicalTreatmentPanel = () => {
  const [treatId, setTreatId] = React.useState('');
  const [treatCourseId, setTreatCourseId] = React.useState('');
  const [type, setType] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [name, setName] = React.useState('');
  const [startDate, setStartDate] = React.useState('');
  const [record, setRecord] = React.useState([]);
//The following code will add the input data in record list.
  const addRecord = (detail) => {
    var newRec = record;
    var recAsString = detail;
    var rec = {toDisplay:recAsString};
    newRec.push(rec);
    setRecord(newRec);
  }
  //The following code will pass the value to function and set the value of attribute null.
  const clickHandler = (event) => {
    addRecord("TreatID: " + treatId + "  Treat Course ID: " + treatCourseId +"  Type: " + type + "  Category: "+ category + "  Name: " + name +"  Start Date: " + startDate );
    var newRec = record;
    setRecord(newRec);
    event.preventDefault();
    setTreatId("");
    setTreatCourseId("");
    setType("");
    setCategory("");
    setName("");
    setStartDate("");

  }
  
//The following line of code will design the input box.
  // const fieldStyle = {
  //     marginBottom: "10px"
      
  //   };
  //This line of code will display all the data in the list.
  const listRecord = record.map((records) => <li>{records.toDisplay}</li> )
/*
The following line of code will display the input box and pass the value and
display the data when the Search button is clicked.
*/
  return(
    <div>
    <input class = "input" type = "text" placeholder = "TreatID" value = {treatId} onChange = {function (e){setTreatId(e.target.value)}}/><br/>
    <input class = "input" type = "text"  placeholder = "TreatCourseId" value = {treatCourseId} onChange = {function (e){setTreatCourseId(e.target.value)}}/><br/>
    <input class = "input" type = "text" placeholder = "Type" value = {type} onChange = {function (e){setType(e.target.value)}}/><br/>
    <input class = "input"type = "text"  placeholder = "Category" value = {category} onChange = {function (e){setCategory(e.target.value)}}/><br/>
    <input class = "input" type = "text" placeholder = "Name" value = {name} onChange = {function (e){setName(e.target.value)}}/><br/>
    <input class = "input" type = "text"  placeholder = "StartDate" value = {startDate} onChange = {function (e){setStartDate(e.target.value)}}/><br/>
    <hr/>
    <button class = "button" style = {{color:"blue"}} onClick = {clickHandler}>Search</button>
    <ul>{listRecord}</ul>
    </div>
    
  )
}
export default MedicalTreatmentPanel;
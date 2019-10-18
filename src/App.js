import React from 'react';
import {Employee, salary} from "./Employee";
import logo from './logo.svg';
import './App.css';

function App() {
  var myEventHandler = myEventHandler=(p1)=>{
    console.log("Data"+p1);
  }
  var obj = {
    EmpId: 10,
    EmpName: 'abc',
    salary: 999,
  }
  var imgUrl = "image.jpg";
  return (
    <React.Fragment>
      <h1>Welcome to Infobeans</h1>
      <Employee empData={obj} imgUrl={imgUrl} onRecievedData={myEventHandler}/>
      <p>Salary: {salary}</p>
    </React.Fragment>
   
  );
}

export default App;

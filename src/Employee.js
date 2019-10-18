import React from "react";
export var salary = 999;
export class Employee extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            salary:this.props.empData.salary
        }
        this.clickEventHandler = this.clickEventHandler.bind(this);
    }
    clickEventHandler=(newSalary)=>{
        console.log(this.refs.txtUpdatedSalary.value);
        //console.log(this.props.empData.salary)
        this.setState({
            salary: this.refs.txtUpdatedSalary.value
        })
        this.props.onRecievedData(this.refs.txtUpdatedSalary.value);
    }
    render(){
        
        var styleVar = {
            backgroundColor: "Red"
        }
        //return virtual DOM
        return (
            <div style={styleVar}>
                <h1 style={{color:"white"}}>Welcome to React training</h1>
                <img src={this.props.imgUrl}/>
                <p>Empolyee Id: {this.props.empData.EmpId}</p>
                <p>Empolyee Name: {this.props.empData.EmpName}</p>
                <p>Empolyee Salary: {this.state.salary}</p>
                <input type="text" id="salText" value={this.salary} ref="txtUpdatedSalary"></input>
                <input type="button" value="Change salary" onClick={this.clickEventHandler} />
            </div>
        )
    }
}
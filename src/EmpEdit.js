import React from "react";
import PropTypes from "prop-types";
class EmpEdit extends React.Component{
    static propTypes = {
        dataToSend : PropTypes.object.isRequired,
        testData: PropTypes.object
    }
    static defaultProps = {
        dataToSend : {empId: 101, empName: 'asha', salary:1001, deptId:'D1'}
    }
    static getDerivedStateFromProps(nextProps, prevState){
        console.log("nextProps", nextProps);
        console.log("prevState", prevState);
        if(prevState.empId !== nextProps.dataToSend.empId){
            const obj ={upEmpName: nextProps.dataToSend.empName,
                upSalary: nextProps.dataToSend.salary,
                empId: nextProps.dataToSend.empId};
                return obj;
        }else{
            return prevState;
        }
        
       
    }
    
    constructor(props){
        super(props);
        this.state = {
            upEmpName: this.props.dataToSend.empName,
            upSalary: this.props.dataToSend.salary,
            empId: this.props.dataToSend.empId
        }
    }
    saveEventHandler = () =>{
        var obj = {...this.props.dataToSend, empName: this.state.upEmpName, salary: this.state.upSalary};
        this.props.callParent(obj);
        //this.props.empUpdatedData(this.state.upEmpName, );
    }
    empNameChangeHandler = (event) =>{
        this.setState({
            upEmpName: event.target.value
        });
        //console.log(e.target.value);
    } 
    salaryChangeHandler = (event) =>{
        this.setState({
            upSalary: event.target.value
        });
    }
    
    render(){
        var dataReceived = {...this.props.dataToSend};
        return(
            <React.Fragment>
                <h1>Employee Details</h1>
                <table>
                    <tr>
                        <td>Employee Id</td>
                        <td>{dataReceived.empId}</td>
                    </tr>
                    <tr>
                        <td>Employee Name</td>
                        <td><input type="text" value={this.state.upEmpName} onChange={this.empNameChangeHandler}/></td>
                    </tr>
                    <tr>
                        <td>Salary</td>
                        <td><input type="text" value={this.state.upSalary} onChange={this.salaryChangeHandler}/></td>
                    </tr>
                    <tr>
                        <td>
                            <input type="button" value="Submit" onClick={this.saveEventHandler} />
                        </td>
                    </tr>
                </table>
            </React.Fragment>
        );
    }
}
export default EmpEdit;
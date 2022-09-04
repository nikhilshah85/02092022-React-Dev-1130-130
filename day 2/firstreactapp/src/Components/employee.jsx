import { Component } from "react";
export  class Employee extends Component
{
    empNo = 101;
    empName =  "Nikhil Shah";
    empDesigantion = "Trainer and Consultant";
    empSalary = 6000;
    empIsPermeant = true;
    getEmpDetails()
    {
        alert('Employee Name is  ' + this.empName);
    }
    //every class based component must have a render method
    //which will return a single HTML block 
    render()
    {
        return(<div>
            <h1> Developer  :  {this.empName }</h1>
            <h2> Employee Number  :  { this.empNo  }</h2>
            <h2> Employee Desigantion  : {this.empDesigantion } </h2>
            <h2> Monthly Salary  : {this.empSalary} </h2>
            <h2> Annual Salary : { this.empSalary * 12 } </h2>
            <h2> Is Permenant :  { this.empIsPermeant ? 'Yes':'No, employee is on Contract' } </h2>
            <button onClick={this.getEmpDetails}> Show Info </button>
        </div>)
    }
}

export default Employee;
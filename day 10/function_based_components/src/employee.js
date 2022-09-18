
import './App.css'
function Employee() {   
    
var empNo = 101
 var empName = "Nikhil"
var empDesignation = "Consultant"

var empSkills = ['.Net','Angular','React','Azure','etc...']    

let greetUser = () =>{
    console.log('Welcome to function in a function based component');
}

    return(   
      <div>
        <h1 className='h1EmpHeader'> Hello I am an Employee Component </h1>
        <h2> I am a first function based component from this training</h2>
        <p> Skills </p>

        <button onClick={greetUser}>Greet</button>
        <h5> Employee Number : { empNo } </h5>
        <h5> Employee Name : { empName } </h5>
        <h5> Employee Designation : { empDesignation } </h5>
        <h5> Employee Skills : </h5>
            <ul>
                {empSkills.map(e => <li> {e }</li>)}
           </ul>
    </div>)
}
export default Employee;
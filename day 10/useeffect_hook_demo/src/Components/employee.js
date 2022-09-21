
import { useState,useEffect} from 'react'


function Employee(){


const [empCount,addEmployee] = useState(100);

useEffect( ()=>{
    setTimeout(() => {
        addEmployee( newemp => newemp + 1 );
    }, 3000);
})

return (<div> 
    <h1>I am a Function based component for - UseEffect demo</h1>

    <h1> Total Employees : { empCount } </h1>
</div>)


}

export default Employee;
import  { useState, createContext} from 'react'
import Manager from './Manager';


const UserContext = createContext();

function Employee()
{

return(

<UserContext.Provider value={myName}>
<hr/>
    <h1> I am the Head Employee Component - level 1 -  {myName}</h1>
    <Manager></Manager>

    <hr/>
</UserContext.Provider>
)

}

export default Employee;
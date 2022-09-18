import logo from './logo.svg';
import './App.css';
import Employee from './employee';
import { useState } from 'react';
function App() {

  const [myName,changeMyName] = useState("Nikhil");
  const [myDesignation,changeDesignation] = useState("Trainer");
  const [clientDetail,changeClientDetails] = useState({
      clientId:101, clientName:'ABC Corp', clientLocation:'UK',clientPOC:'Evelyn'
  })

  // changeClientDetails(newName,newLocation){
   
  // }

  const changeClientName = () =>{
    changeClientDetails(oldvalues=>{
      return {...oldvalues,clientName:'Cognizant'}
    });
  }

  return (
    <div>

      <h1 className='h1appHeader'> Employee Management APP</h1>

      <button onClick={()=> changeMyName('Nikhil Shah')}>Change Name </button>
      <h1> My Name is : {myName } and I work as a  {myDesignation}</h1>
      {/* <Employee></Employee> */}

      <h3> Client details for  {myName}</h3>
      <h4> Client Id : {clientDetail.clientId }</h4>
      <h4> Client Name : {clientDetail.clientName }</h4>
      <h4> Client Location : {clientDetail.clientLocation }</h4>
      <h4> Client POC : {clientDetail.clientPOC }</h4>

      <button onClick={changeClientName}>Change Client</button>
      
    </div>
  );
}

export default App;

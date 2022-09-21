import { useContext } from "react";
import UserContext  from "./Employee";


function Developer()
{

const user = useContext(UserContext);
return(<div>

    <h1> I am the Developer Component - level 5 </h1>
    <h1> Value from Top Parent : { user } </h1>

</div>)

}

export default Developer;
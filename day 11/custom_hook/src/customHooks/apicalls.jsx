import { useState,useEffect } from 'react'


const useAPICallHook =(url) =>{

    const [apidata,updateData] = useState(null);  //we dont know the parameter

    useEffect( ()=>{
            fetch(url).then(response => response.json())
                      .then( apidata => updateData(apidata));

    },[url]);

    return [apidata];
}

export default useAPICallHook;
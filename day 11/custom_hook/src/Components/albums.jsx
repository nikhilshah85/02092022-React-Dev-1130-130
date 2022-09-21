import useAPICallHook from "../customHooks/apicalls";



function AlbumsData(){

    const [albumdata] = useAPICallHook('https://jsonplaceholder.typicode.com/photos');

    

    return(<table>
  {albumdata.map(a =>   <tr>
            <td> {a.albumId} </td>
            <td> {a.id} </td>
            <td> {a.title} </td>        

        </tr>)}


    </table>)
}
        
    
    

export default AlbumsData
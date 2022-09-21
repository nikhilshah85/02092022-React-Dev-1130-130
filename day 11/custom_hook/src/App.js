import logo from './logo.svg';
import './App.css';
import useAPICallHook from './customHooks/apicalls';
import CommentsData from './Components/comments';
import AlbumsData from './Components/albums';

function App() {

   const [data] = useAPICallHook('https://jsonplaceholder.typicode.com/posts');

  return (
    <AlbumsData></AlbumsData>
    // <CommentsData></CommentsData>

    // <table borser="1">
    //   { data && data.map(p =>{
    //   return   <tr>
    //     <td> { p.userId } </td>
    //     <td> { p.id } </td>
    //     <td> { p.title } </td>
    //     <td> { p.body } </td>
    //   </tr>
    //   }) }
    // </table>
  );
}

export default App;

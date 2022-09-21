import { renderIntoDocument } from "react-dom/test-utils";
import useAPICallHook from "../customHooks/apicalls";


function CommentsData()
{


    const [comments] = useAPICallHook('https://jsonplaceholder.typicode.com/comments');

    return(
        <div>
            {comments.map(c =>  <div className="commentsBlock">
                <h3> Post Id : { c.postId }</h3>
                <h3> Id : { c.id }</h3>
                <h3> Name : { c.name }</h3>
                <h3> Email : { c.email }</h3>
                <h3> Comment : { c.body }</h3>
                <hr/>
            </div>)}
        
        </div>
    )
}
export default CommentsData;
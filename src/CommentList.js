import './App.css';
import Comment from './Comment';

const CommentList=({comments, value})=> {
  return (
    <>
        {
        comments.map((user, i)=>{
            return(
                <>
                    <Comment key={i} content={comments[i]} value={value}/>
                </>  
            )
        }
        )}
    </>
  );
}

export default CommentList;

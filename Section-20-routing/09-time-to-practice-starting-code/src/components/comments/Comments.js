import {useEffect, useState} from 'react';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import {useParams} from "react-router-dom";
import useHttp from "../hooks/use-http";
import {getAllComments} from "../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "./CommentsList";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const {quoteId} = useParams();

  const {sendRequest, status, data: loadedComments} = useHttp(getAllComments);

  useEffect(() => {
      sendRequest(quoteId)
  }, [sendRequest, quoteId])


  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };



  function addedCommentHandler() {

  }

  let comments;
  if (status === 'pending') {
     comments = (
         <div className='centered'>
             <LoadingSpinner/>
         </div>
     )
  }

  if (status === 'completed' && loadedComments) {
        comments = <CommentsList comments={loadedComments} />
  }

  if (status === 'completed' && (!loadedComments || loadedComments.length === 0)) {
      comments = <p className='centered'> NO COMMENTS ADDED YET!!</p>
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm onAddedComment={addedCommentHandler} quoteId={quoteId}  />}
      {comments}


    </section>
  );
};

export default Comments;

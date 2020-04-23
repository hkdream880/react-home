import React, { useState } from 'react';
import CommentEditorComponent from '../components/CommentEditorComponent'
import CommentComponent from '../components/CommentComponent'

const dummyComment = [
  {
    comment:'comment 1',
    userInfo: {id: 'TestUserId',nick: 'TestUserNick'},
    reply:[
      {
        comment:'reply 1',
        userInfo: {id: 'reply1 user',nick: 'reply1 nick'}
      },
      {
        comment:'reply 2',
        userInfo: {id: 'TestUserId',nick: 'TestUserNick'}
      }
    ]
  },
  {
    comment:'comment 2',
    userInfo: {id: 'comment2 user',nick: 'comment2 nick'},
    reply:[
      {
        comment:'reply 1',
        userInfo: {id: 'TestUserId',nick: 'TestUserNick'}
      },
      {
        comment:'reply 2',
        userInfo: {id: 'reply2 user',nick: 'reply2 nick'}
      }
    ]
  }
]
  


const Comments = () => {
  
  const [comments, setComments] = useState(dummyComment);

  return (
    <>
      <CommentEditorComponent/>
      {comments.map((comments, i)=>{
        return <CommentComponent key={'comment'+i} commentObj={comments} />
      })}
    </>
  )
}

export default Comments;
import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import './coment.styles.scss';


export default function ComentComponent({coment}) {
  const {allUsers} = useContext(UserContext);
  const author = allUsers.find(user => user.id === coment.user_id);
  return (
    <>
    <div className='comment-container'>
      <p className="comment-header">{author.username} {coment.creation_date}</p>    
      <h3 className='comment-text'>{coment.coment_text}</h3>
    </div>
    </>    
  )
}

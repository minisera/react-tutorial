import React from 'react';
import LikeButton from './LikeButton';
const Article = (props)=> {
  return (
    <div>
      <h2>{props.title}</h2>
      <input type="checkbox" checked={props.isPublished} onClick={()=> props.toggle()}/>
      <LikeButton count={props.count}/>
    </div>
  )
};

export default Article
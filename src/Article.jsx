import React,{useState} from 'react';
import LikeButton from './LikeButton';


const Article = (props)=> {
  const [isPublished,togglePublished] = useState(false);
  return (
    <div>
      <h2>{props.title}</h2>
      <input type="checkbox" checked={isPublished} onClick={()=> togglePublished(!isPublished)}/>
      <LikeButton count={props.count}/>
    </div>
  )
};

export default Article
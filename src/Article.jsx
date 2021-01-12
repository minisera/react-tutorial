import React from 'react';

const Article = (props)=> {
  let publishState = "";
  if (props.isPublished) {
    publishState = "公開"
  }else {
    publishState = "非公開"
  }
  return (
    <div>
      <h2>{props.title}</h2>
      <h2>数字は{props.order}</h2>
      <p>{publishState}</p>
    </div>
  )
};

export default Article
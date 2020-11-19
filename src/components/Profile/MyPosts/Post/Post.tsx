import React from 'react';
import s from './Post.module.css';

type PropsType = {
    message: string
    likesCount: number
}

const Post: React.FC<PropsType> = (props) => {
  return (
    <div className={s.item}>
      <img src='https://image.flaticon.com/icons/png/128/2159/2159555.png' />
        { props.message }
          <div className={s.item}>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;

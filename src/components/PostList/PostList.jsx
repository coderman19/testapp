import React from 'react';
import Post from '../Post/Post';

export default function PostList({post, title}) {
  return (
    <div>
        <h1>{title}</h1>
      {post.map(post => 
          <Post post={post} key={post.id}/>
        )}
      
    </div>
  )
}

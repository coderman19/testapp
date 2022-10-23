import React, {useState} from 'react';
import Counter from './components/Counter/Counter';
import './App.css';
// import Post from './components/Post/Post';
import PostList from './components/PostList/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
  
 const [post, setPost] = useState([
  {id: 1, title: 'JavaScript', body: 'loremru'},
  {id: 2, title: 'Python', body: 'Description'},
  {id: 3, title: 'PHP', body: 'this is very good'},
  {id: 4, title: 'Cotlin', body: 'My first language'},
  {id: 5, title: 'Ruby', body: 'Tipycal lang for every site'},
 ])

const [title, setTitle] = useState('');
const [body, setBody] = useState('');

const addNewPost = (e) => {
  e.preventDefault()
  const newPost = {
    id: Date.now(),
    title,
    body
  }
  setPost([...post, newPost])
  setTitle('')
  setBody('')
} 
 

  return (

    <div className='App'>
      <form>
        {/* управляемый компонент */}
        <MyInput 
          value={title}
          onChange={e => setTitle(e.target.value)}
          type='text' 
          placeholder='название поста' 
        />
        <MyInput 
          value={body}
          onChange={e => setBody(e.target.value)}
          type='text' 
          placeholder='описание поста' 
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList post={post} title="Список постов №1" />
    </div>

  )
  

}

export default App;

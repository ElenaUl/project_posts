import React, { useState, useMemo, useEffect } from 'react';
import './App.css';
//import ClassCounter from './components/ClassCounter';
//import PostItem from './components/PostItem';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';
import axios from 'axios';
import PostService from './API/PostService';
import MyModal from './components/MyModal/MyModal';
import MyButton from './components/UI/button/Mybutton';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Aa', body: 'Aaaaaa' },
    { id: 2, title: 'Bb', body: 'Bbbbbbb' },
    { id: 3, title: 'Cc', body: 'Ccccccccc' },

  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [modal, setModal] = useState(false);
  //const sortedPosts = [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))


  useEffect(() => {
    fetchPosts()
  }, [])


  const sortedPosts = useMemo(() => {
    if(selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;

  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))

  }, [searchQuery, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    
  }


  async function fetchPosts(){
    const posts = await PostService.getAll();
    setPosts(posts)
  }

  return (
    <div className="App">
      <Header />
      <AboutUs/>
      <button onClick={fetchPosts}>GET POSTS</button>
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MyInput
          value={searchQuery}
          onChange = {e => setSearchQuery(e.target.value)}
          placeholder="Поиск..."
        />
        <MySelect
          defaultValue={selectedSort}
          onChange={sort => setSelectedSort(sort)}
          options={[
            {value: 'title', name:' По названию'},
            {value: 'body', name:' По описанию'}
          ]}
         />
      </div>
      {sortedAndSearchedPosts.length !== 0
        ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов 1" />
        : <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
      }
      <Footer/>
    </div>
  );
}

export default App;

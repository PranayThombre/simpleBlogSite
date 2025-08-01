import logo from './logo.svg';
import './App.css';
import Blog from './components/Blog';
import Header from './components/Header';
import Pageination from './components/Pageination';
import { AppContext } from './context/AppContext';
import { useContext, useEffect} from 'react';


function App() {

  const {fetchBlogPosts}=useContext(AppContext);

  useEffect(()=> {
      fetchBlogPosts();
  },[])

  return (
    <div className="App">

    <Header></Header>
    <Blog></Blog>
    <Pageination></Pageination>
    </div>
  );
}

export default App;

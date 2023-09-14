import './App.css';
import Post from "./components/Post"
import {Route, Routes} from "react-router-dom";
import Layout from './components/Layout';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import { UserContextProvider } from './UserContext';
import CreatePost from './components/CreatePost';
import IndexPage from './components/Indexpage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import PostPage from './components/PostPage';
import EditPost from './components/EditPost';

function App() {
  return (
    <UserContextProvider>
      <Routes>
      <Route path={"/"} element={<Layout/>}>
          <Route index element={<IndexPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path={'/register'} element={<RegisterPage/>}/>
          <Route path={'/create'} element={<CreatePost/>}/>
          <Route path={'/about'} element={<AboutPage/>}/>
          <Route path={'/contact'} element={<ContactPage/>}/>
          <Route path={'/post/:id'} element={<PostPage/>} />
          <Route path={'/edit/:id'} element={<EditPost />}/>
      </Route>
    </Routes>
    </UserContextProvider>
  );
}

export default App;

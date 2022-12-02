import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./containers/About/About";
import Add from "./containers/Add/Add";
import Contacts from "./containers/Contacts/Contacts";
import EditPost from "./containers/EditPost/EditPost";
import Home from "./containers/Home/Home";
import PostPage from "./containers/PostPage/PostPage";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/posts/' element={<Home/>}/>
          <Route path='/posts/:id' element={<PostPage/>}/>
          <Route path='/posts/:id/edit' element={<EditPost />}/>
          <Route path='/new-post' element={<Add/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path="*" element={<h4>Not found!</h4>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
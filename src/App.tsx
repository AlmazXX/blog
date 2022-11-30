import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./containers/About/About";
import Add from "./containers/Add/Add";
import Contacts from "./containers/Contacts/Contacts";
import Home from "./containers/Home/Home";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/new-post' element={<Add/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
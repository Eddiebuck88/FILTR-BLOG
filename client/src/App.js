import Landing from './pages/Landing';
import Button from './components/Button';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Header from './components/Header';
import AddBlog from './pages/AddBlog';
function App(props) {
  console.log(props.name)
  return (
    <div className="App">
      
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={ <Landing name={props.name}/>} />
          <Route path='/add-blog' element={<AddBlog />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;


import './App.css';
import Cabeca from './components/Head'
import Container from './components/container'
import Input from './components/input'
import InputEdit from './components/inputEdit'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'



function App() {

  return (
    <div className="App">
     <Cabeca/>
     <Router>
        <Routes>
            <Route path="/" Component={Container} />
            <Route path="/input" Component={Input} />
            <Route path="/inputEdit" Component={InputEdit} />
        </Routes>
        
          
        
      </Router>
   
    </div>
  );
}

export default App;

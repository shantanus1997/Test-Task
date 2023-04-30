import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Datashow from './components/Datashow';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/datashow' element={<Datashow/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

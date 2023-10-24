
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landingpage from './page/Landingpage';
import { Detail } from './page/Detail';
function App() {
  return (
    <div className="App">
     
        <Routes>
          <Route exact path='/' element={<Landingpage />} />
          <Route exact path='/detail/:id' element={<Detail />} />
        </Routes>
  
    </div>
  );
}

export default App;

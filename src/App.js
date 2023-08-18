import Menu from './Components/Menu';
import Home from './Pages/Home';
import './App.css';
import Recipe from './Pages/Recipe';

import {BrowserRouter,Route, Routes} from "react-router-dom"
import Recipedetails from './Components/Recipedetails';


function App() {
  return (
 
        <BrowserRouter> 
        <Menu/>
        <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/recipes' element={ <Recipe/>} />
        <Route path="/recipes/:recipeId" element={<Recipedetails/>} />

        </Routes>
        
      
     
    
        </BrowserRouter>

  );
}

export default App;

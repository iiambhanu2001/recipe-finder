import RecipeList from '../Components/RecipeList';
import Search from '../Components/Search';
import { getRecipes } from '../Services/api';
import { useState , useEffect  } from 'react';


const Recipe=()=> {
  const[searchquery,setsearchquery]=useState('pizza');
  const[recipes,setrecipes] =useState([]) //for recipes list
  

  useEffect(() => {
    getsearchedresult();
     // eslint-disable-next-line
}, [searchquery])
  
   
const getsearchedresult = async () => {
  let result = await getRecipes(searchquery);
  if (result && result.recipes) {
     setrecipes(result.recipes);
  }
}
   
 
  return (
    <>

       <Search setsearchquery={setsearchquery} />
       <RecipeList recipes={recipes} searchedQuery={searchquery} />
    </>
  )
}

export default Recipe;
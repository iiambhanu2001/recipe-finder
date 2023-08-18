import React from 'react'
import {Grid, GridColumn,Form,Input} from 'semantic-ui-react'
import { useState } from 'react';

function Search({setsearchquery}) {
    const[value,setvalue]=useState('');
    
   const onFormsubmit=()=>{
    setsearchquery(value);
   }
   function changehangle(e){
    setvalue(e.target.value)
   }

  return (
   <Grid columns={2} textAlign='center' className='search-box'>
    <GridColumn>
        <h2 className='search-heading' >Search Recipes with Our Recipes.</h2>
        <h4>Enter the recipe you want to search</h4>
        <Form onSubmit={onFormsubmit}>
           <Input 
             placeholder="tomato,potato,pizza"
             action={{icon:'search',color:'black'}}
             onChange={changehangle}
             value={value}
                 />            
 
        </Form>

    </GridColumn>
   </Grid>
  )
}

export default Search;
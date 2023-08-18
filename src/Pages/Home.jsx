import React from 'react'
import Header from '../Components/Header'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div >
      <Header  title="Our Recipies" bgimage='bg' >
      <Button 
         content="SEARCH RECIPES"
         color='black'
         as={Link}
         to='/recipes'
         size='bigger'
      />
      </Header>
    </div>
  )
}

export default Home
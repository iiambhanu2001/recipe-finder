import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Card, CardContent } from 'semantic-ui-react'

function RecipeListItem({recipe}) {
  return (
    <Card>
       <img src={recipe.image_url} alt='thumbnail' style={{ height: 170 }}/>
       <CardContent>
        <Card.Header content={recipe.title}/>
        <Card.Description>
            <h4>{recipe.publisher}</h4>
        </Card.Description>
       </CardContent>
       <CardContent>
        <Button
           as={Link} 
           to={`/recipes/${recipe.recipe_id}`}
           content="Details"
           size='tiny'
        />
        <Button
           href={recipe.source_url}
           target="blank"
           content="Description"
           size='tiny'
        />
       </CardContent>

    </Card>

  )
}

export default RecipeListItem;
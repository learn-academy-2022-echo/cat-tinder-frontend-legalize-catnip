import React from "react";
import { useParams } from 'react-router-dom'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap'

const CatShow = ({ cats }) => {
    const { id } = useParams()
    console.log(id)
  
    const cat = cats?.find(cat => cat.id === +id)

    return(

    <div id="show-profile">
    <Card className="my-2">
      <img
        alt="Card image cap"
        src={cat.image}
      />
      <CardBody>
        <CardTitle tag="h5">
          { cat.name }, { cat.age}
        </CardTitle>
        <CardText>
          {cat.enjoys}
        </CardText>

      </CardBody>
    </Card>
  </div>
)
}
export default CatShow
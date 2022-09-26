import React from "react";
import { useParams } from 'react-router-dom'
import { Card, CardBody, CardImg, CardText, CardTitle, Button } from 'reactstrap'

const CatShow = ({ cats }) => {
  const { id } = useParams()
  console.log(id)

  const cat = cats?.find(cat => cat.id === +id)

  return (

    <div id="show-profile">
      <Card className="card-header">
        <img
          alt="Card image cap"
          src={cat.image}
        />
        <CardBody>
          <CardTitle tag="h2">
            {cat.name}, {cat.age}
          </CardTitle>
          <CardText>
            {cat.enjoys}
          </CardText>
          <div>
            <Button color="info" outline href="CatEdit">
              Edit info</Button>
          </div>
          <div>
            <Button color="danger" outline href="CatIndex">
              Delete</Button>
          </div>

        </CardBody>
      </Card>
    </div>
  )
}
export default CatShow
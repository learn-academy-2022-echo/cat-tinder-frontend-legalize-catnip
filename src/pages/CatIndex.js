import React from "react";
import { Card, CardBody, CardTitle, Button, Row, Col } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";

const CatIndex = ({ cats, readCat }) => {

  return (

    <main className="display-flex">

      {cats?.map((cat, index) => {

        return (
          
            <Col>
              <Card
                body
                outline
                style={{ width: '18rem', margin: 80, display: "-ms-flexbox" }}
                key={index}
              >
                <img
                  alt="Sample"
                  src={cat.image}
                />
                <CardBody>
                  <CardTitle tag="h6">
                    {cat.name}<br /><br />
                    {cat.enjoys}
                  </CardTitle>
                  <NavLink to={`/catshow/${cat.id}`} className="nav-link">
                    <Button color="info">
                      See more details
                    </Button>
                  </NavLink>
                </CardBody>
              </Card>
            </Col>
          
        )
      })
      }

    </main>

  )
}

export default CatIndex


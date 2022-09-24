import React from "react";
import { Card, CardBody, CardTitle, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";

const CatIndex = ({ cats, readCat }) => {
    
    return (
        
      <main className="display-flex">

        { cats?.map((cat, index) => {

          return (
            
            <Card
              style={{
                width: '18rem'
              }}
              key={index}
            >
              <img
                alt="Sample"
                src={cat.image}
              />
              <CardBody>
                <CardTitle tag="h5">
                  {cat.name}
                </CardTitle>
                <NavLink to={`/catshow/${cat.id}`} className="nav-link">
                  <Button >
                    See more details
                  </Button>
                </NavLink>
              </CardBody>
            </Card>
          )
        })
        }
      </main>
      
    )
}

export default CatIndex


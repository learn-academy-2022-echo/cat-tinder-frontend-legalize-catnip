import React, {useState} from 'react'
import { Form, FormGroup, Label, Input, Button} from 'reactstrap'
import { useNavigate } from "react-router-dom"

const CatNew = ({ createCat }) => {

   const navigate = useNavigate();
  const [newCat, setNewCat] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: ""
  })

  const handleCats = (e) => {
    
    setNewCat({...newCat, [e.target.name]: e.target.value})
    console.log(newCat)
    
  }
  
  const handleSubmit = () => {
    createCat(newCat)
    navigate("/catindex")
  }

  console.log("newcat object", newCat)

  return (
    <>
      <h2> Add a cat </h2>
      <Form>
        <FormGroup>
          <Label for="name">
            Cat's Name
          </Label>
          <Input
            name="name"
            placeholder="Type in cat name"
            type="text"
            onChange={handleCats}
            value={newCat.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">
            Cat's Age
          </Label>
          <Input
            name="age"
            placeholder="Type in cat name"
            type="number"
            onChange={handleCats}
            value={newCat.age}
          />
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">
            Cat's Interests
          </Label>
          <Input
            name="enjoys"
            placeholder="There goes the cat"
            type="text"
            onChange={handleCats}
            value={newCat.enjoys}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">
            Cat's Profile
          </Label>
          <Input
            name="image"
            placeholder="Get in"
            type="url"
            onChange={handleCats}
            value={newCat.image}
          />
        </FormGroup>
        <Button
          onClick={handleSubmit}
          name="submit"
        >
          Submit
        </Button>
      </Form>
    </>
  )
}
export default CatNew
import React, { useState } from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'



const CatEdit = ({cat, updateCat}) => { 
    const { id } = useParams()
    let currentCat = cat?.find((cat) => cat.id === +id)

    const [editCat, setEditCat] = useState({
        name: currentCat.name,
        age: currentCat.age,
        enjoys: currentCat.hobbies, 
        image: currentCat.img, 
        
    })
    const handleChange = (e) => {
        setEditCat({...editCat, [e.target.name]: e.target.value})
    }
    const handleSubmit = () => {
        updateCat(editCat, currentCat.id)
    }}
    export default CatEdit
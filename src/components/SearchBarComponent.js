import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

function SearchBarComponent({setSearchResults}) {
  let [searchText, setSearchText] = useState("");

  const apiRead = async () => {
    console.log("read")
    try {
      await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(response => response.json())
        .then(d => {
          if (d.meals == null || d.meals.length == 0) {
            console.log("No Dish found for the entered food!")
            alert("No Dish found for the food name!")
          }
          else {
            console.log("data changed");
            setSearchResults(d)
          }
        })
    }
    catch (error) {
      console.log("Error:", error);
    }
  }

  return (
    <div className='mb-5'>
        <Form className='d-inline-block mx-auto'>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              style={{width: "50vw"}}
              onChange={(e) => {
                setSearchText(e.target.value)
              }}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" onClick={(e) => {
              e.preventDefault()
              if (searchText.length == 0) {
                alert("Please enter a food name (E.g: chicken) in search field")
              }
              else {
                apiRead()
              }
              }}>Submit</Button>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default SearchBarComponent
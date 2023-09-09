import React from 'react'
import CustomCard from './CardComponent'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CardHolderComponent({ meals }) {
    console.log("meals")
    console.log(meals)
    console.log("meals")
    return (
        <div>
            <Container>
                <Row>
                    { meals != null ?
                        meals.map((dish, index) => {
                            return <Col key={index}><CustomCard image={dish.strMealThumb} name={dish.strMeal} url={dish.strYoutube} /></Col>
                        }) :
                        null
                    }
                
                </Row>
            </Container>
        </div>
    )
}

export default CardHolderComponent
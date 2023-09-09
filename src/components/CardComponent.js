import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CustomCard({image, name, url}) {
  return (
    <Card style={{ width: '18rem', padding: "10px", margin: "10px" }} className='bg-body-tertiary mx-auto' >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Button variant="primary" href={url}>Watch Video</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
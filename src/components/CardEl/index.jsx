import Card from 'react-bootstrap/Card';

function CardEl(props) {
  return (
    <Card style={{ width: '20rem'}}>
      <Card.Img variant="top" src={props.imgUrl} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      
      </Card.Body>
    </Card>
  );
}

export default CardEl;
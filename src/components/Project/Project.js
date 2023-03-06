import React from "react";
import Card from "react-bootstrap/Card";

function Project(props) {
  return (
    
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <a href={props.link} />
        </Card.Footer>
      </Card>
    
  );
}

export default Project;
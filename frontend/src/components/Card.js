import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CardContent(props) {
  return (
    <Card className={props.cardClass}>
      <Card.Img variant="top" className={props.imgClass} src={props.image} />
      <Card.Body>
        <Card.Title className="cardTitle">{props.title}</Card.Title>
        <Card.Text className="cardBody">{props.text}</Card.Text>
        {props.showButton && (
          <div className="text-center">
            <Button variant="outline-primary" className="customButton">
              Apply Now
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default CardContent;

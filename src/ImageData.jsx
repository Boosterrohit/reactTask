import React from "react";
import Card from "react-bootstrap/Card";
import { cardItem } from "./data";
import "./index.css";

const ImageData = () => {
  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          {cardItem.map((item, index) => {
            return (
              <div className="col-sm-6 col-lg-4" key={index}>
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src={item.image}
                    className="img-fluid image-height p-4"
                  />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.job}</Card.Text>
                    <Card.Text>{item.experience}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageData;

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
// import Image from './images';

class Ui extends Component {
 render() {
  const { data, images } = this.props;

  const values = data.map((items, i) => {
   return (
    <div className="card m-3" key={i}>
     <div className="card-image">
      <img src={images[i]} alt="" key={i} />
     </div>
     <div className="card-body">
      <h4 className="card-title">Name: {items.name}</h4>
      <p className="card-text"> UserName: {items.username}</p>
      <p className="card-text"> Email: {items.email}</p>
      <p className="card-text">
       Address: {`${items.address.street}, ${items.address.city}`}
      </p>
      <p className="card-text"> Phone Number: {items.phone}</p>
     </div>
    </div>
   );
  });
  return <div className="card-columns container">{values}</div>;
 }
}

export default Ui;

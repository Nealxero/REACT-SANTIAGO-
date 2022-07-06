import React from "react";

const CardComponent = (props) =>
{return <div className="card col-3">
  <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="..."/>
	<div className="card-body">
    <h5 className="card-title">{props.cardTitle}</h5>
    <p className="card-text">{props.cardText}</p>
    <a href="#" className="btn btn-primary">{props.cardButton}</a>
  </div>
</div>
}


export default CardComponent;
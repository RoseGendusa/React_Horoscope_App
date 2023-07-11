import React from 'react';

const Card = ({sign}) => {
    const {title, desc, image, date} = sign;
  return (
    <div className="cards">
        <div className="title">
            <h1>{title}</h1>
            <p>{date}</p>
        </div>
        <img src={image}  />
        <div className="card-over">
            <p>{desc}</p>
        </div>

    </div>
  )
}

export default Card
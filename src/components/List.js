import React from "react";



const List = ({image,name,email,age}) => {
  return (
    <>
      <article className="person">
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{email}</p>
          <p>{age} years</p>
        </div>
      </article>
    </>
  );
};

export default List;

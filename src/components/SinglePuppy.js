import React from "react";

const SinglePuppy = (props) => {
    const puppy = props.puppy
    return (
        <div className="pupCards" onClick= {() => props.selectPuppy(puppy.id)}>
          <div>{puppy.name}</div>
          <div>{<img src={puppy.imageUrl}></img>}</div>
          <div>{puppy.breed}</div>
          <div>{puppy.status}</div>
          </div>)
}

export default SinglePuppy;
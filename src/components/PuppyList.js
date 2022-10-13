import React from "react";

const PuppyList = (props) => {
  const myPuppies = props.puppyData;
  console.log(myPuppies)
     return (
      <div className='box'>
       {myPuppies.length ? myPuppies.map((puppy) => {
        return (<div key={`player-${puppy.id}`}>
          <div>{<img src={puppy.imageUrl}></img>}</div>
          <div>{puppy.name}</div>
          <div>{puppy.breed}</div>
          <div>{puppy.status}</div>
          </div>)
       }):<div>Loading the Cutest Puppies</div>}
      
      </div>
     )
    
}

export default PuppyList;
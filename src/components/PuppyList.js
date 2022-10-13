import React from "react";

const PuppyList = (props) => {
  const myPuppies = props.puppyData;
  console.log(myPuppies)
     return (
      <div className='box'>
       {myPuppies.length ? myPuppies.map((puppy) => {
        return (<div className="pupCards" key={`player-${puppy.id}`}>
          <div>{puppy.name}</div>
          <div>{<img src={puppy.imageUrl}></img>}</div>
          <div>{puppy.breed}</div>
          <div>{puppy.status}</div>
          </div>)
       }):<div>Loading the Cutest Puppies</div>}
      
      </div>
     )
    
}

export default PuppyList;
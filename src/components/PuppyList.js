import React from "react";
import SinglePuppy from "./SinglePuppy";

const PuppyList = (props) => {
  const myPuppies = props.puppyData;
  console.log(myPuppies)
     return (
      
      <div className='box'>
       {myPuppies.length ? myPuppies.map((puppy) => {
        return (
          <SinglePuppy key={`player-${puppy.id}`} puppy={puppy}  onClick= {() => props.selectPuppy(puppy.id)}/>
          )
       }):<div>Loading the Cutest Puppies</div>}
      
    
       
      </div>
     )
    
}

export default PuppyList;
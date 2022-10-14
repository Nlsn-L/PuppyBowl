import React, { useState } from "react";

const Navbar = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const puppyData = props.puppyData
  
  console.log(puppyData)
  
  let mainData= puppyData


  const handleSearch = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    
    if(searchInput.length > 0) {
    console.log(puppyData)
    let searchPuppy = puppyData.filter((puppy) => {
      return puppy.name.match(searchInput);
    });
    
    props.setPuppyData(searchPuppy);
    
  }else {props.setPuppyData(mainData)}

  };

 
  
  return (
    <div id= "Navbar">
        <h2> Puppy Bowl || 2022</h2>
      <form>
        <label>
    Name:
    <input type="text" placeholder="Search Puppies" onChange={handleSearch} value={searchInput}  />
  </label>
  <input onChange={handleSearch} type="Submit" value="Clear" />
    </form>
 
  </div>

  );
};

export default Navbar;
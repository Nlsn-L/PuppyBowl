import React from "react";

const Navbar = () => {
  return (
    <div id= "Navbar">
        <h2> Puppybowl</h2>
      <form>
        <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
    </form>
 
 
  </div>

  );
};

export default Navbar;
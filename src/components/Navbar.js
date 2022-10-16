import React,{useState} from "react";


const Navbar = (props) => {
  const searchPuppy = props.puppyData
  const setPuppyData = props.setPuppyData
  const [inputText,setInputText] = useState("")
  let inputHandler = (e) => {
    e.preventDefault()
    setInputText(e.target.value)

    let filteredData = searchPuppy.map((el) => {
      if (props.input === ''){
      return el
      } else {
        return el.name.match(e.target.value)
      }
    })
    console.log(filteredData)
    return filteredData
  }
 
  return (
    <div id= "Navbar">
        <h2> Puppy Bowl || 2022</h2>
      <form>
        <label>
    Name:
    <input type="text" placeholder="Search Puppies" onChange={inputHandler} value={inputText}  />
  </label>
  {/* <input type="submit" value="Submit" /> */}
    </form>
 
  </div>

  );
};

export default Navbar;
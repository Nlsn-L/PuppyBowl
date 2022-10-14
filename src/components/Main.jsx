import React,{useState, useEffect} from "react";
import Navbar from "./Navbar";
import PuppyList from "./PuppyList";

const Main = () => {
    const [puppyData, setPuppyData] = useState([])
    
    async function getPuppyData() {
      let response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-Et-WEB-FT/players")
      let jsonData = await response.json()
      const puppies = jsonData.data.players
      setPuppyData(puppies)
  }

    useEffect(()=>{
        getPuppyData();
    },[])

    const [selectedPuppy, setSelectedPuppy] = useState([])
    const selectPuppy = async(puppyid) => { let response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-Et-WEB-FT/${puppyId}`
    ) 
    let jsonData = await response.json()
    setSelectedPuppy(jsonData)
  }


  return (
    <div id="main">
      <Navbar />
      <PuppyList puppyData={puppyData}/>
  </div>
  );
  }  

export default Main;

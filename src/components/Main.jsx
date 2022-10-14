import React,{useState, useEffect} from "react";
import Navbar from "./Navbar";
import PuppyList from "./PuppyList";
import PuppyDetails from "./PuppyDetails";

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
    const selectPuppy = async(puppyId) => { let response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-Et-WEB-FT/players/${puppyId}`
    ) 
    let jsonData = await response.json()
    const puppy = jsonData.data.player
    console.log(puppy)
    setSelectedPuppy(puppy)
  }


  return (
    <div id="main">
      <Navbar />{selectedPuppy.id ? <PuppyDetails selectedPuppy={selectedPuppy} setSelectedPuppy={setSelectedPuppy}/> : 
           <PuppyList puppyData={puppyData} selectPuppy={selectPuppy} />
      }
  </div>
  );
  }  

export default Main;

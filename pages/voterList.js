import React, { useEffect,useContext } from "react";
import VoterCard from "../components/voterCard/voterCard";
import Style from "../styles/voterList.module.css";
import { VotingContext } from "../context/Voter";
const voterList = () => {
  const { getAllVoter,voterArray } = useContext(VotingContext);
  useEffect(()=>{
    getAllVoter();
  },[]);
  return <div className={Style.voterList}>
      <VoterCard voterArray={voterArray} />
    
 
  </div>;
};

export default voterList;

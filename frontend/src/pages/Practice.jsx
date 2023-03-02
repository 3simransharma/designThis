import React,{useState} from "react";
import axios from 'axios';
import InsideLabelDetails from "../InsideLabelDetails.jsx";

import "../styles.css";
import { Helmet } from "react-helmet";

export default function Practice() {

  const[count,setCount] = useState(0);
  const[dede,setdede] = useState({
    "Name":"",
    "Overview":"",
    "Targer Audience": "",
    "Design Requirements":"",
    "Design Suggestions":"",
  }); //dede is a design description

  /////////////////////////////////////

  function getData(){
    axios.get(`https://designthisbackend.onrender.com/design`)
      .then(response => {
        const data = response.data;
        console.log(dede);
        console.log(data["Name"]);
        setdede(data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  

  /////////////////////////////////////

  const date = new Date();
  date.setDate(date.getDate()+1);

  return (
    <>

      <Helmet>
        <title>Practice | designthis</title>
      </Helmet>
      
      <p className="practice_c">
        
        <b className="what_type"><h3>Click on the Button "Generate" to get the Design Brief &ensp;&ensp;&ensp;</h3></b>
        <button className="get_st gen" onClick={getData}>Generate</button>
        <br /><br />
        
        <h3 className="lbl_t_t">Project Name</h3><label className="lbl_t">{dede["Name"]}</label><br />
        <h3 className="lbl_d_d">Project Description</h3>
          <div className = "lbl_d_ww">
            <div className="lbl_d">
              <InsideLabelDetails title = "Overview" data = {dede["Overview"]} />
              <InsideLabelDetails title = "Target Audience" data = {dede["Target Audience"]} />

              <h3>Design Requirements</h3>
              { dede["Design Requirements"]? (Object.keys(dede["Design Requirements"]).map((title, index) => (
                <div key={index}>
                  <h4 className="h4_container_lbl_l"><u>{title}</u></h4>
                  <ul><p>{dede["Design Requirements"][title]}</p>
                  <i><h5 className="h5_container_lbl_l">Design Suggestion: </h5></i>
                  <p className="p_container_lbl_l">{dede["Design Suggestions"][title]}</p></ul>
                </div>
              )) ): ""}

                <p className="small_line">*You don't have design everything. For example, if you want to practice only logo design then you can simply do Logo Design</p>
            </div>
          </div>
        </p>
    </>
  );
}

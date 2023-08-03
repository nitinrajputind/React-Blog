import React from 'react'
import Featured from '../Components/Featured'
import { useContext } from "react";
import data from "../Context/ContextData.jsx"
import TheLatest from '../Components/TheLatest';

const Home = () => {
  const Apidata = useContext(data);
  // console.log(Apidata)
  return (
    <div>
      <Featured/>

      {/* The Latest Section  */}
      <div className="TheLatest">
        <h2>The Latest
          <hr style={{width: "100px", height: "3px", background: "red", border: "none" , outline:"none" , borderRadius:"5px"}}/>
        </h2>
        <div className="Latest_contanier">
        {
          Apidata.filter((data)=>data.category === "mix").map((item,index)=>{
            // console.log(item)
            return(
              
              <TheLatest key={index}
              title = {item.title} 
              id = {item.id} 
              image = {item.img} 
              description ={item.description.slice(0,200)}/>
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default Home

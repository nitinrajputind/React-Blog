import React from 'react'
import Featured from '../Components/Featured'
import { useContext } from "react";
import data from "../Context/ContextData.jsx"
import TheLatest from '../Components/TheLatest';
import TopPost from '../Components/TopPost';
import LatestArticle from '../Components/LatestArticle';
import TextNews from '../Components/TextNews';

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
              Category = {item.category}
              description ={item.description.slice(0,200)}/>
            )
          })
        }
        </div>
      </div>

      {/* This is Parent Contanier  */}
      <div className="TheLatest Section_Contanier">

      {/* This is Latest Articles Contanier  */}
      
      {/* style={{width : "710px", border : "2px solid Blue"}} */}
        <div className="left_contanier" >
        <h2>
          Latest Articles
          <hr style={{width: "100px", height: "3px", background: "red", border: "none" , outline:"none" , borderRadius:"5px"}}/>
        </h2>
        {
         Apidata.filter((data)=>data.id % 2 ===  0 && data.id % 4 === 0).map((item, index)=>{
          return(
            <LatestArticle key={index}
            title = {item.title.slice(0,100)} 
            id = {item.id} 
            image = {item.img} 
            Category = {item.category}
            description ={item.description.slice(0,100)}/>
          )
         })
        }
        </div>


        {/* This is Top Post Container  */}
        {/* style={{width : "500px" , border : "2px solid red"}} */}
        <div className="rightContanier" >
        <h2>
          To Posts
          <hr style={{width: "100px", height: "3px", background: "red", border: "none" , outline:"none" , borderRadius:"5px"}}/>
        </h2>
        {
         Apidata.filter((data)=>data.id % 3 ===  0 && data.id % 6 === 0).map((item, index)=>{
          return(
            <TopPost key={index}
            title = {item.title.slice(0,50)} 
            id = {item.id} 
            image = {item.img} 
            Category = {item.category}
            description ={item.description.slice(0,80)}
            index ={index}/>
          )
         })
        }
        </div>
      </div>


      {/* Text News Only  */}

      <div className="TheLatest">
      <div className="Latest_contanier">
        {
          Apidata.filter((data)=>data.id % 3 === 0 && (data.category === "Hollywood")).map((item,index)=>{
            // console.log(item)
            return(
              
              <TextNews key={index}
              title = {item.title} 
              id = {item.id} 
              image = {item.img} 
              Category = {item.category}
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

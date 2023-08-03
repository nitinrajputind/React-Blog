import React, { useContext } from 'react'
import data from '../Context/ContextData'
import TheLatest from '../Components/TheLatest';


const Hollywood = () => {
  const Apidata = useContext(data);
  return (
    <>
    <div className="TheLatest">
        <h2>Hollywood
          <hr style={{width: "100px", height: "3px", background: "red", border: "none" , outline:"none" , borderRadius:"5px"}}/>
        </h2>
        <div className="Latest_contanier">
        {
          Apidata.filter((data)=>data.category === "Hollywood"  && (data.id >= 19 && data.id <= 24) ).map((item,index)=>{
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
    </>
  )
}

export default Hollywood

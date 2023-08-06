import React, { useContext } from 'react'
import data from '../Context/ContextData'
import TheLatest from '../Components/TheLatest';




const Bollywood = () => {
  const Apidata = useContext(data);
  return (
    <div>
            {/* The Latest Section  */}
            <div className="TheLatest">
        <h2>The BollyWood
          <hr style={{width: "100px", height: "3px", background: "red", border: "none" , outline:"none" , borderRadius:"5px"}}/>
        </h2>
        <div className="Latest_contanier">
        {
          Apidata.filter((data)=>data.category === "Bollywood").map((item,index)=>{
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
    </div>
  )
}

export default Bollywood

import React from "react";
import { useContext } from "react";
import data from "../Context/ContextData";
import TheLatest from "../Components/TheLatest";

const Technology = () => {
  const Apidata = useContext(data);
  return (
    <>

    
      {/* The Latest Section  */}
      <div className="TheLatest">
        <h2>
          The Technology
          <hr
            style={{
              width: "100px",
              height: "3px",
              background: "red",
              border: "none",
              outline: "none",
              borderRadius: "5px",
            }}
          />
        </h2>
        <div className="Latest_contanier">
          {Apidata.filter((data) => data.category === "Technology" && data.id % 2 ===0).map(
            (item, index) => {
              // console.log(item)
              return (
                <TheLatest
                  key={index}
                  title={item.title}
                  id={item.id}
                  image={item.img}
                  Category={item.category}
                  description={item.description.slice(0, 200)}
                />
              );
            }
          )}
        </div>
      </div>



    </>
  );
};

export default Technology;

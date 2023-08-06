import React from 'react'
import "./topPost.css"



const TopPost = () => {
  return (
    <>
      <div className='Post_Contanier'>
      <div className="PostImg">
        <img src="https://www.hindustantimes.com/ht-img/img/2023/08/01/550x309/aditi_1690888322185_1690888350608.jpg" alt="" />
      </div>
      <div className="Post_Content">
        <div className="Post_heading">
        <h2>accusantium culpa quasi neque, nihil illo!</h2>
        <p>Lquo dolor fuga voluptas ipsa facere accusamus esse dignissimos provident, beatae reprehenderit quos?</p>
        </div>
        <p>TRAVEL <span> / August 21 2017</span></p>
        <h1 className='num'>1</h1>
      </div>
    </div>
    </>
  )
}

export default TopPost

import React from 'react'
import { useLocation } from 'react-router-dom';

const BlogPage = () => {
  const location = useLocation();
  const {articleID} = location.state
  console.log(articleID)
  return (
    <div>
      Hello this is a My Blog page

      ID : {articleID}
    </div>
  )
}

export default BlogPage

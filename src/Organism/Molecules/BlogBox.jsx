import React from 'react'
import { Link } from 'react-router-dom'
import { StyledBlogBox } from '../../styledComponents/StyledBlogBox'

const BlogBox = ({ callback, text, title, id, url }) => {
  return (
    <StyledBlogBox>
      <div className="image-div">
        <img src={url} alt="" onLoad={callback} />
      </div>
      <div className="description-div">
        <h2>{title}</h2>
        <p>{text}</p>
        <Link to={`/blog/${id}`}>
          <button> READ MORE </button>
        </Link>
      </div>
    </StyledBlogBox>
  )
}

export default BlogBox

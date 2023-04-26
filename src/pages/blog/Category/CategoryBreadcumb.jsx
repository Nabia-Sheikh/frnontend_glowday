import React from "react"
import { Link } from "react-router-dom"

const CategoryBreadcumb = ({ category }) => {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <div className="row">
          <div className="column">
            <ul>
              <li className>
                <Link to="/">Home</Link>
              </li>
              <li className>
                <Link to="/blog">Blog</Link>
              </li>
              <li className="active">
                <a href="#">{category}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryBreadcumb

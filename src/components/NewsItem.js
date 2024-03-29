// import React, { Component } from 'react'
import React from 'react'



// export class NewsItem extends Component {
const NewsItem = (props) => {



  // render() {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;       //  this.props
  return (
    <div className='my-3'>

      <div className="card" >
        <div style={{ display: 'flex', justifyContent: " flex-end", position: "absolute", right: '0' }}>
          <span className=" badge rounded-pill bg-danger">
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
        </div>
        <img className="card-img-top" src={!imageUrl ? "https://minerescue.org/wp-content/uploads/2020/03/Marketplace-Lending-News.jpg" : imageUrl} alt="Card  cap" />
        <div className="card-body">
          <h5 className="card-title">{title}
          </h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {!author ? "unknown" : author} on {new Date(date).toGMTString()} </small></p>
          <a href={newsUrl} target='' className="btn btn-sm  btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )
  // }
}



export default NewsItem







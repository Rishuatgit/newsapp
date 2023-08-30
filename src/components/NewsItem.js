import React, { Component } from 'react'

export class NewsItem extends Component {

  
  
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div  className='my-3'>
        <div className="card" style={{ width: '18rem' }}>
          <img className="card-img-top" src={!imageUrl?"https://minerescue.org/wp-content/uploads/2020/03/Marketplace-Lending-News.jpg":imageUrl} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target='_blank' className="btn btn-sm  btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  } 
}

// let tishabh=())

export default NewsItem







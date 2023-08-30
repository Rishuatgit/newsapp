import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

 

  constructor() {
    super()
    
    this.state = {
      articles: [],
      loading: false

    }
  }
  async componentDidMount(){
    console.log("cdm");
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=d3e7400413f6462286533cedd9335edc"
    let data=await fetch(url)
    let parsedData=await data.json()
    this.setState({articles:parsedData.articles})
  }
   

  render() {
    console.log("render")
    return (
      
      <div className='container my-3 '>
        <h2>Daily News Monkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {

            return <div key={element.url} className="col-md-4">
              <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 100):""} newsUrl={element.url} imageUrl={element.urlToImage} />
            </div>

            // console.log(element)
          })}


        </div>
      </div>


    )
  }
}

export default News

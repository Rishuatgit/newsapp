// import React, { Component } from 'react'
import React, { useEffect, useState } from 'react'



import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


// export class News extends Component {
const News = (props) => {

  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
  // document.title = `Daily News Monkey  ${this.CapiFirstLetter(props.category)}`





  // static defaultProps = {
  //   country: 'in',
  //   pageSize: 8,
  //   category: 'general',



  // }
  // static propTypes = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string,
  // }



  const CapiFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // constructor(props) {
  //   super(props)
  //   console.log("construcoter")
  //   // this.state = {
  //   //   articles: [],
  //   //   loading: false,
  //   //   page: 1,
  //   //   totalResults: 0
  //   // }
  // }


  const updateNews = async () => {
    // props.setProgress(10)
    props.setProgress(10)

    console.log("this is update news")
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true })
    setloading(true)
    let data = await fetch(url)
    props.setProgress(40)
    let parsedData = await data.json()
    console.log(parsedData)
    props.setProgress(70)
    setarticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setloading(false)

    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false
    // })
    props.setProgress(100)

  }

  useEffect(() => {
    document.title = `Daily News Monkey - ${CapiFirstLetter(props.category)}`

    updateNews()


  }, [])


  // async componentDidMount() {
  //   // console.log("cdm");
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d3e7400413f6462286533cedd9335edc&page=1&pageSize=${props.pageSize}`;
  //   // this.setState({ loading: true })
  //   // let data = await fetch(url)
  //   // let parsedData = await data.json()
  //   // console.log("thi is whole data", parsedData)
  //   // this.setState({
  //   //   articles: parsedData.articles,
  //   //   totalResults: parsedData.totalResults,
  //   //   loading: false
  //   // })
  //   this.updateNews()
  // }
  const handlePreviousClick = async () => {

    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d3e7400413f6462286533cedd9335edc&page=${this.state.page - 1}&pageSize=${props.pageSize}`
    // // eslint-disable-next-line
    // { this.setState({ loading: true }) }

    // let data = await fetch(url)
    // let parsedData = await data.json()

    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false
    // })
    // this.setState({ page: this.state.page - 1 })
    setpage(page - 1)
    updateNews()

  }
  const handleNextClick = async () => {
    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize))) {


    //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d3e7400413f6462286533cedd9335edc&page=${this.state.page + 1}&pageSize=${props.pageSize}`
    //   this.setState({ loading: true })
    //   let data = await fetch(url)
    //   let parsedData = await data.json()
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading: false

    //   })

    // }
    // this.setState({ page: this.state.page + 1 })
    setpage(page + 1)

    updateNews()
  }

  const fetchMoreData = async () => {
    // this.setState({ page: this.state.page + 1 })


    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true })
    setpage(page + 1)
    let data = await fetch(url)
    let parsedData = await data.json()
    setarticles(articles.concat(parsedData.articles))
    settotalResults(parsedData.totalResults)
    // this.setState({
    //   articles: this.state.articles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults,
    //  delete after loading: false

    // })
  }

  // render() {
  console.log("render")
  return (
    <>

      <h1 className=' text-center ' style={{ margin: "35px 0px", marginTop: "90px" }}>Daily  Monkey - Top Headlines {CapiFirstLetter(props.category)}</h1>
      <div className='text-center my-4  '>  {loading && <Spinner />}</div>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults} loader={<span className=' text-center' > <Spinner /></span>}
      >
        <div className="container">
          <div className="row">
            {/* !this.state.loading && */}

            {articles.map((element) => {

              return <div key={element.url} className="col-md-4">
                <NewsItem author={element.author} date={element.publishedAt} title={element.title ? element.title.slice(0, 45) : ""}
                  description={element.description ? element.description.slice(0, 100) : ""} newsUrl={element.url} imageUrl={element.urlToImage}

                  source={element.source.name} />
              </div>
              // console.log(element)

            })}
          </div>
        </div>
      </InfiniteScroll>


      {/* <div className="container d-flex justify-content-between">

                <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePreviousClick}>&larr;Preview  </button>
                <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}> Next &rarr;</button>

                </div> */}

    </>


  )
  // }
}

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',



}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,


}

export default News

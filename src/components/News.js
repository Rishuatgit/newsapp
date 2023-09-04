import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',



  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,


  }

  CapiFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props)
    console.log("construcoter")
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0

    }
    document.title = `Daily News Monkey  ${this.CapiFirstLetter(this.props.category)}`
  }

  async updateNews() {
    this.props.setProgress(10)
    console.log("this is update news")
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url)
    this.props.setProgress(40)
    let parsedData = await data.json()
    console.log(parsedData)
    this.props.setProgress(70)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
    this.props.setProgress(100)

  }
  async componentDidMount() {
    // console.log("cdm");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d3e7400413f6462286533cedd9335edc&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true })
    // let data = await fetch(url)
    // let parsedData = await data.json()
    // console.log("thi is whole data", parsedData)
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false
    // })
    this.updateNews()
  }
  handlePreviousClick = async () => {

    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d3e7400413f6462286533cedd9335edc&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    // // eslint-disable-next-line
    // { this.setState({ loading: true }) }

    // let data = await fetch(url)
    // let parsedData = await data.json()

    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false
    // })
    this.setState({ page: this.state.page - 1 })
    this.updateNews()

  }
  handleNextClick = async () => {
    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {


    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d3e7400413f6462286533cedd9335edc&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    //   this.setState({ loading: true })
    //   let data = await fetch(url)
    //   let parsedData = await data.json()
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading: false

    //   })

    // }
    this.setState({ page: this.state.page + 1 })

    this.updateNews()
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true })
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false

    })
  }

  render() {
    console.log("render")
    return (
      <>

        <h1 className=' text-center ' style={{ margin: "35px 0px" }}>Daily  Monkey - Top Headlines {this.CapiFirstLetter(this.props.category)}</h1>
        <div className='text-center my-4  '>  {this.state.loading && <Spinner />}</div>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults} loader={"loading"}
        >
          <div className="container">
            <div className="row">
              {/* !this.state.loading && */}

              {this.state.articles.map((element, index) => {

                return <div key={index} className="col-md-4">
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
                <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}> Next &rarr;</button>

                </div> */}

      </>


    )
  }
}

export default News

import React, { Component } from 'react'
import Item from "./Item";
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';




export default class News extends Component {
  static defaultProps = {
    country: "us",
    category: "general"


  }
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,

  }

  constructor(category) {
    super(category);
    this.state = {

      articles: [],
      loading: true,
      page: 1,
      totalarticles: [],


    }
    document.title = `${this.props.category.toUpperCase()}-NEWS`
  }







  async updatenews() {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=13099ad0740146d38dc54fc7a86446ca&page=${this.state.page}`
    let data = await fetch(url);
    let parseddata = await data.json()
    this.setState({ articles: parseddata.articles, totalarticles: parseddata.totalResults, loading: false })


  }

  async componentDidMount() {
    this.updatenews()
  }




 

  fetchdata=async()=>{
    this.setState({page:this.state.page+1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=13099ad0740146d38dc54fc7a86446ca&page=${this.state.page}`
    let data = await fetch(url);
    let parseddata = await data.json()
    this.setState({ articles: this.state.articles.concat(parseddata.articles), totalarticles: parseddata.totalResults })


  }




  render() {


    return (
      <>

          <h1 className='my-4'>TOP NEWS-{this.props.category.toUpperCase()}</h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchdata}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
          <div className="row">
            {this.state.articles.map((item) => {
              return <div className="col-md-4 " key={item.url}>
                <Item newsurl={item.url} author={item.author} source={item.source.name} date={item.publishedAt} title={item.title ? item.title.slice(0, 45) : ""} desc={item.description ? item.description.slice(0, 100) : ""} imageurl={item.urlToImage ? item.urlToImage : 'https://tse4.mm.bing.net/th?id=OIP.28wBZ-48eoD9eGZ9foukpgHaFN&pid=Api&P=0&h=220'} />
              </div>
            })}

          </div>
          </div>
        </InfiniteScroll>



      

      </>
    )
  }
}

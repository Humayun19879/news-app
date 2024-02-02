import React, { Component } from 'react'
import Item from "./Item";
import Spinner from './Spinner';

export default class Search extends Component {
  render() {
    let {articles,loading} = this.props;
    return (
      <>
      
      <div className="container my-5 flex">
          <h1 className='my-4'>TOP NEWS ON YOUR SEARCH</h1>
          {loading&& <Spinner/>}

          <div className="row">

            {!loading && articles.map((item) => {
              return <div className="col-md-4 " key={item.url}>
                <Item newsurl={item.url} author={item.author} source={item.source.name} date={item.publishedAt} title={item.title ? item.title.slice(0, 45) : ""} desc={item.description ? item.description.slice(0, 100) : ""} imageurl={item.urlToImage ? item.urlToImage : 'https://tse4.mm.bing.net/th?id=OIP.28wBZ-48eoD9eGZ9foukpgHaFN&pid=Api&P=0&h=220'} />
              </div>
            })}


          </div>
         


        </div>
      </>
    )
  }
}

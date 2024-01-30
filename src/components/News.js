import React, { Component } from 'react'
import Item from "./Item";

export default class News extends Component {

  

  render() {
    let {totalarticles,articles,page,next,previous} = this.props;
    return (
      <>
        <div className="container my-5 flex">
          <h1 className='my-4'>TOP HEADLINES-</h1>
          <div className="row">
            {articles.map((item) => {
              return <div className="col-md-4 " key={item.url}>
                <Item newsurl={item.url} title={item.title ? item.title.slice(0, 45) : ""} desc={item.description ? item.description.slice(0, 100) : ""} imageurl={item.urlToImage} />
              </div>
            })}


          </div>
          <div className="container d-flex justify-content-between">
            <button disabled={page<=1} onClick={previous} type='button' className='btn btn-danger'>&larr; PREVIOUS</button>
            <button disabled={page + 1 > Math.ceil(totalarticles/20)} onClick={next} type='button' className='btn btn-danger'>NEXT &rarr;</button>
          </div>


        </div>

      </>
    )
  }
}

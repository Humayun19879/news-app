import React, { Component } from 'react'

export default class Item extends Component {
    
    render() {
        let {title,desc,imageurl,newsurl} = this.props;
        return (
            <>
                <div className="card mx-3 my-5" style={{width: '18rem'}}>
                    <img src={!imageurl?"https://img.welt.de/img/podcasts/machtwechsel/mobile244549614/1391350287-ci16x9-w1200/DWO-Podcast-Teaser-mit-2zu3.jpg":imageurl} style={{width: '17rem' , height:'13rem'}}   />
                    <div className="card-body">
                        <h5 className="card-title">{title}... </h5>
                        <p className="card-text">{desc}... </p>
                        <a href={newsurl} target='blank' className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </>
        )
    }
}

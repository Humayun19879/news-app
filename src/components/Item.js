import React, { Component } from 'react'

export default class Item extends Component {

    render() {
        let { title, desc, imageurl, newsurl, author , date ,source } = this.props;
        return (
            <>
                <div className=" mx-3 my-5" >
                    <div className="card mb-3" style={{height:"500px"}}>
                        <img src={imageurl} style={{width:"100%",height:"200px"}} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{title}  <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:'1'}}>{source}</span>span</h5>
                                <p className="card-text">{desc} </p>
                                <p className="card-text"><small className="text-body-secondary">By {author?author :"Unknown"} on <br /> {new Date(date).toGMTString()} </small></p>
                               <a  href={newsurl} target='_blank'><button type="button"  className="btn btn-dark ">READ MORE</button></a> 
                                
                            </div>
                    </div>

                </div>
            </>
        )
    }
}

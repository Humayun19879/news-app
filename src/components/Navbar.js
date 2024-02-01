

import React, { Component } from 'react'
import {
  Link

} from "react-router-dom";

export default class Navbar extends Component {



  render() {
    

    let {mode,color,enablemode,search} = this.props;
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme={mode} >
          <div className="container-fluid">
            <Link className="navbar-brand"to="#">MY NEWS APP</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                
                
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle"to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    CATEGORIES
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/buisness">BUISNESS</Link></li>
                    <li><Link className="dropdown-item" to="/entertainment">ENTERTAINMENT</Link></li>
                    <li><Link className="dropdown-item" to="/">GENERAL</Link></li>
                    <li><Link className="dropdown-item" to="/health">HEALTH</Link></li>
                    <li><Link className="dropdown-item" to="/science">SCIENCE</Link></li>
                    <li><Link className="dropdown-item" to="/sports">SPORTS</Link></li>
                    <li><Link className="dropdown-item" to="/technology">TECHNOLOGY</Link></li>
                  </ul>
                </li>
                
              </ul>
              <form className="d-flex" role="search" >
                <input className="form-control me-2" onKeyUp={search} id='search' type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success"  type="submit">Search</button>
              </form>
              <div className={`form-check form-switch text-${color} `}>
                <input className="form-check-input" onClick={enablemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DARK MODE</label>
              </div>
            </div>
          </div>
        </nav>

      </>
    )
  }
}



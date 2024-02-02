import Navbar from "./components/Navbar";
import './App.css';
import News from "./components/News";



import { BrowserRouter, Routes, Route } from "react-router-dom";


import React, { Component } from 'react'
import Search from "./components/Search";

export default class App extends Component {
  

  constructor() {
    super();
    this.state = {
    
    mode: "light",
    color: "black",




    articles: [],
      loading: false,
     


    }
  }



  enablemode = () => {

    if (this.state.mode === "light") {
      this.setState({ mode: "dark" });
      this.setState({ color: "white" });





    }
    else {
      this.setState({ mode: "light" });
      this.setState({ color: "black" });




    }
  }

   search=async()=>{
   this.setState({loading:true})
   let a=document.getElementById('search').value;
   let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=13099ad0740146d38dc54fc7a86446ca&q=${a}`
   let data = await fetch(url);
   let parseddata = await data.json()
   this.setState({articles:parseddata.articles,loading:false})
  }
























//as it is
  
  


// as it is





  render() {





    return (
      <>
        <BrowserRouter>

          <Navbar search={this.search} mode={this.state.mode} color={this.state.color} enablemode={this.enablemode}></Navbar>



          <Routes>

            

            <Route path="/" element={<News  key="general"          category="general" country="us" />} />
            <Route path="/sports" element={<News key="sports"                    category="sports" country="us" />} />
            <Route path="/health" element={<News key="health"            category="health" country="us" />} />
            <Route path="/science" element={<News key="science"           category="science" country="us" />} />
            <Route path="/technology" element={<News key="technology"         category="technology" country="us" />} />
            <Route path="/entertainment" element={<News key="entertainment"     articles={this.state.articles}           category="entertainment" country="us" />} />
            <Route path="/search" element={<Search articles={this.state.articles}  loading={this.state.loading} />} />
          </Routes>
        </BrowserRouter>

      </>
    )
  }
}



import Navbar from "./components/Navbar";
import './App.css';
import News from "./components/News";

import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1,
      totalarticles:[],
      mode: "light",
      color:"black",
      
      
    }
  }

  async componentDidMount() {
    let url = " https://newsapi.org/v2/top-headlines?country=us&apiKey=13099ad0740146d38dc54fc7a86446ca&page=1&pagesize=20"
    let data = await fetch(url);
    let parseddata = await data.json()
    this.setState({ articles: parseddata.articles, totalarticles:parseddata.totalResults })
  }
  previous = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=13099ad0740146d38dc54fc7a86446ca&page=${this.state.page-1}&pagesize=20 `
    let data = await fetch(url);
    let parseddata = await data.json()
    this.setState({ articles: parseddata.articles, page:this.state.page-1 })
    


  }

  next= async ()=>{
 
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=13099ad0740146d38dc54fc7a86446ca&page=${this.state.page+1}&pagesize=20 `
    let data = await fetch(url);
    let parseddata = await data.json()
    this.setState({ articles: parseddata.articles, page:this.state.page+1 })
    
  }
  



















  

 enablemode=()=> {
      
    if (this.state.mode==="light") {
      console.log("light")
      this.setState({mode:"dark"}); 
       this.setState({color:"white"});
     let  body=document.getElementById('flexSwitchCheckDefault').innerText;
     console.log(body)
      
   
     
      
    }
    else{
      this.setState({mode:"light"}); 
      this.setState({color:"black"});
      
   
     

    }
  }

  search=async()=>{
  let  a=document.getElementById('earch').innerText;
    console.log(a)
    
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=13099ad0740146d38dc54fc7a86446ca&page=${this.state.page+1}&pagesize=20 `
    let data = await fetch(url);
    let parseddata = await data.json()
    this.setState({ articles: parseddata.articles, page:this.state.page+1 })
    

  }
  
    

  


  render() {
   

   
    
    
    return (
      <>
     
        <Navbar search={this.search}   mode={this.state.mode} color={this.state.color} enablemode={this.enablemode}></Navbar>
      
        <News next={this.next} previous={this.previous} articles={this.state.articles} page={this.state.page} totalarticles={this.state.totalarticles}></News>

      </>
    )
  }
}



import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = 
    [
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Future of Play Direct, Future Games Show & More! | Summer of Gaming 2023 - IGN",
            "description": "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.",
            "url": "https://www.youtube.com/watch?v=XTpfp70xnKU",
            "urlToImage": null,
            "publishedAt": "2023-06-10T14:01:57Z",
            "content": null
        }
    ]
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }
//   14c7a8f493a141d99fb35294cfa759bb
 async componentDidMount(){
    console.log("cmd")
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=14c7a8f493a141d99fb35294cfa759bb"
    let data = await fetch(url)
    let parseData =  await data.json()
    console.log(parseData)
    this.setState({articles: parseData.articles})
  }

  handlePrevClick = async ()=>{

    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=14c7a8f493a141d99fb35294cfa759bb/a/&page-${this.state.page - 1}&pageSize-20`
    let data = await fetch(url)
    let parseData =  await data.json()
    console.log(parseData)
    

    this.setState({
        page: this.state.page - 1,
        articles: parseData.articles
    })


  }
  handleNextClick = async ()=>{


    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=14c7a8f493a141d99fb35294cfa759bb/a/&page-${this.state.page + 1}&pageSize-20`
    let data = await fetch(url)
    let parseData =  await data.json()
    console.log(parseData)

    this.setState({
        page: this.state.page + 1,
        articles: parseData.articles
    })

  }


  render() {
    return (
      <div className="countainer">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return(
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title}
                description={element.description?element.description.slice(0,88):""}
                imageUrl={element.urlToImage}
                url={element.url}
              />
            </div>
            )
          })}
          {/* <NewsItem  title={this.state.articles.title} description={this.state.articles.description} imageUrl={this.state.articles.urlToImage}/> */}
        </div>
        <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; previous</button>
            <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News;

import React, { Component } from "react";
import {
  BrowawerRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
export class NewsItem extends Component {




    render() {
      let {title, description, imageUrl, url} = this.props
    return (
      <div className="my-3">
        <div className="card" >
          <img src={imageUrl?imageUrl:"https://cdn.theathletic.com/app/uploads/2023/06/10085113/GettyImages-1258574438-scaled.jpeg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href={url} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

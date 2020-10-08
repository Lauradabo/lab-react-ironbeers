import React from 'react';
import Header from "../components/Header.jsx";
import beerAPI from "../api/beerApi.js";
import { Link } from "react-router-dom";

class Beers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          beers: [],
          selectedBeer: null,
        };
    }
        async componentDidMount() {
            beerAPI
              .getBeers()
              .then((apiResponse) => {
                  this.setState({ beers: apiResponse.data });
              })
              .catch((apiError) => {
                console.log(apiError);
              })
            }
    render() {
        return (
       <div>
               <Header/>
               <h1>Beers</h1>
               {this.state.beers.map((beer) => (
            <div>
            <img src={beer.image_url} alt=""/>
          <Link key={beer.name} to={`/beers/${beer._id}`}>
            <div>{beer.name}</div>
          </Link>
          <p>{beer.tagline}</p>
          <p>Created by: {beer.contributed_by.split("<")[0]}</p>
          </div>
          ))}
        </div>     
        )
    }
}

export default Beers;

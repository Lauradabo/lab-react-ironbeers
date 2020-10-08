import React from 'react';
import Header from "../components/Header.jsx";
import beerAPI from "../api/beerApi.js";
import { Link } from "react-router-dom";

export default class OneBeer extends React.Component {
    state = {
        beer: null,
    };

    componentDidMount() {
        beerAPI
          .getOne(this.props.match.params.id)
          .then((apiResponse) => {
            // console.log(apiResponse.data);
            this.setState({ beer: apiResponse.data });
          })
          .catch((apiError) => console.log(apiError));
        // console.log(this.props.match.params.id);
      }


    render() {
        return (
            <div>
                <Header/>
                {this.state.beer && 
                <div>
                <img src={this.state.beer.image_url} alt=""/>
                <p>{this.state.beer.name}</p>
                <p>{this.state.beer.tagline}</p>
                <p>{this.state.beer.first_brewed}</p>
                <p>{this.state.beer.attenuation_level}</p>
                <p>{this.state.beer.description}</p>
                <p>{this.state.beer.contributed_by}</p>
                </div>  
                  }
            </div>
        )
    }
}

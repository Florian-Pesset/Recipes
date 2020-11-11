import React, { Component } from "react";
import axios from "axios";

import RecipeCard from "./RecipeCard";

class RecipesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
    this.fetchData = this.fetchData.bind(this);
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios
      .get(
        "https://api.spoonacular.com/food/search?apiKey=7a861d6a549d46208f8cb4c1e7c34ff8&query=apple&number=2000"
      )
      .then(({ data }) => {
        const recipes = data.searchResults[0].results.map((result) => {
          console.log(data.searchResults[0].results);
          return {
            id: result.id,
            name: result.name,
            image: result.image,
            link: result.link,
          };
        });
        this.setState({ recipes });
      });
  }

  render() {
    const { recipes } = this.state;
    return (
      <div>
        <h1>Idées recettes</h1>
        <ul>
          {recipes.map((recipe) => {
            return <RecipeCard key={recipe.id} recipe={recipe} />;
          })}
        </ul>
      </div>
    );
  }
}

export default RecipesList;

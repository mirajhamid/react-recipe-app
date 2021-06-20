import "./App.css";
import React, { useEffect, useState } from "react";
import Recipe from "./Recipe.js";

const App = (props) => {
  let APP_ID = "";
  let APP_KEY = "";
  let QUERY = "Chicken";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(QUERY);

  useEffect(() => {
    getRecipes();
  }, [query]);

  //get recipes from API
  const getRecipes = async () => {
    let getRecipesURL = `https://nyt.edamam.com/api/recipes/v2?app_id=${APP_ID}&app_key=${APP_KEY}&q=${query}&type=public`;
    const response = await fetch(getRecipesURL, {
      method: "GET",
    });
    const body = await response.json();
    setRecipes(body.hits);
    console.log(recipes);

    //clean value
    setSearch("");
  };

  //update search value
  const updateSerach = (e) => {
    setSearch(e.target.value);
  };

  const updateQuery = (e) => {
    //prevent page refresh so only updates will happen
    e.preventDefault();
    //when user submit only we are sure about the final input
    console.log("looking for " + search);
    setQuery(search);
  };

  return (
    <div className="App">
      <form onSubmit={updateQuery} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSerach}
        ></input>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map((recipe, key) => (
        <Recipe data={recipe.recipe} key={key}></Recipe>
      ))}
    </div>
  );
};

export default App;

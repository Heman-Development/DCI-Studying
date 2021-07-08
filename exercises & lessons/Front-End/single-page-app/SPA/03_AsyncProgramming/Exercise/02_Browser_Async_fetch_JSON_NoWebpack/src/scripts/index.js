// The following line makes sure your styles are included in the project. Don't remove this.
// Import any additional modules you want to include below \/
import { recipes_str } from "./data.js";

//conver imported json object to normal JS object
let recipes = JSON.parse(recipes_str);
console.log(recipes);

//read categories from recipes object
for (let category in recipes) {
  console.log(category);
  //recipes[`${category}`]  = [recipes.cakes ,    recipes.biscuites ,      recipes.breads]
  recipes[category].forEach((recipe) => {
    document.getElementById(category).innerHTML += createRecipe(recipe);
  });
}

function createRecipe(rec) {
  let card = `<div class="card" style="width: 18rem;">
                    <img src="${rec.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${rec.title}</h5>
                        <span class="text-info">${rec.author}</span>
                        <hr>
                        <p class="card-text">Ingredients: ${rec.ingredients.join(
                          ", "
                        )}</p>
                        
                    </div>
                </div>`;

  return card;
}


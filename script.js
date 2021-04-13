// // const searchBtn = document.getElementById('search-btn');
// // const mealList = document.getElementById('meal');
// // const mealDetailsContent = document.querySelector('.meal-details-content');
// // const recipeCloseBtn = document.getElementById('recipe-close-btn');
// //
// // // event listeners
// // searchBtn.addEventListener('click', getMealList);
// // mealList.addEventListener('click', getMealRecipe);
// // recipeCloseBtn.addEventListener('click', () => {
// //     mealDetailsContent.parentElement.classList.remove('showRecipe');
// // });
// //
// //
// // // get meal list that matches with the ingredients
// // function getMealList(){
// //     let searchInputTxt = document.getElementById('search-input').value.trim();
// //     fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
// //     .then(response => response.json())
// //     .then(data => {
// //         let html = "";
// //         if(data.meals){
// //             data.meals.forEach(meal => {
// //                 html += `
// //                     <div class = "meal-item" data-id = "${meal.idMeal}">
// //                         <div class = "meal-img">
// //                             <img src = "${meal.strMealThumb}" alt = "food">
// //                         </div>
// //                         <div class = "meal-name">
// //                             <h3>${meal.strMeal}</h3>
// //                             <a href = "#" class = "recipe-btn">Get Recipe</a>
// //                         </div>
// //                     </div>
// //                 `;
// //             });
// //             mealList.classList.remove('notFound');
// //         } else{
// //             html = "Sorry, we didn't find any meal!";
// //             mealList.classList.add('notFound');
// //         }
// //
// //         mealList.innerHTML = html;
// //     });
// // }
// //
// //
// // // get recipe of the meal
// // function getMealRecipe(e){
// //     e.preventDefault();
// //     if(e.target.classList.contains('recipe-btn')){
// //         let mealItem = e.target.parentElement.parentElement;
// //         fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
// //         .then(response => response.json())
// //         .then(data => mealRecipeModal(data.meals));
// //     }
// // }
// //
// // // create a modal
// // function mealRecipeModal(meal){
// //     console.log(meal);
// //     meal = meal[0];
// //     let html = `
// //         <h2 class = "recipe-title">${meal.strMeal}</h2>
// //         <p class = "recipe-category">${meal.strCategory}</p>
// //         <div class = "recipe-instruct">
// //             <h3>Instructions:</h3>
// //             <p>${meal.strInstructions}</p>
// //         </div>
// //         <div class = "recipe-meal-img">
// //             <img src = "${meal.strMealThumb}" alt = "">
// //         </div>
// //         <div class = "recipe-link">
// //             <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
// //         </div>
// //     `;
// //     mealDetailsContent.innerHTML = html;
// //     mealDetailsContent.parentElement.classList.add('showRecipe');
// // }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// const searchedIngredient = document.getElementById('search');
// const submit = document.getElementById('submit');
// const random = document.getElementById('random-button');
// const mealsBox = document.getElementById('meals');
// const resultsBox = document.getElementById('result');
// const individualMeal = document.getElementById('individual-meal');
//
// const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
//
// function searchMeal(meal) {
//
//   let html = "";
//
//   console.log(meal);
//
//   resultsBox.innerHTML = '';
//
//   const newURL = URL + meal;
//   console.log(newURL);
//   fetch(newURL).then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//
//     if(data.meals === null) {
//       resultsBox.innerHTML = "<h2>Hmm. We couldn't find any recipes that had '"
//        + meal + "'. Please Try again." + "<br/><hr/><br/>" +
//        "Note: Try making your ingredient plural "
//        + "or singular. Sometimes that changes the results";
//     }
//     else {
//       resultsBox.innerHTML = "<h2>Recipes containing '" + meal + "':</h2>";
//       // mealsBox.innerHTML = data.meals.map((meal) =>
//       //   `<div class="response">
//       //       <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
//       //       <div class="meal-info" data-mealID="${meal.idMeal}">
//       //         <h3>${meal.strMeal}</h3>
//       //       </div>
//       //    </div>`
//       //   )
//       // .join("");
//     // data.meals.map((meal) =>
//     //   html += `<div class="response">
//     //     <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
//     //     <div class="meal-info" data-mealID="${meal.idMeal}">
//     //     <h3>"${meal.strMeal}"</h3>
//     //     </div>
//     //     </div>`;
//
//         data.meals.forEach(meal => {
//             html += `
//                 <div class = "meal-item" data-id = "${meal.idMeal}">
//                     <div class = "meal-img">
//                         <img src = "${meal.strMealThumb}" alt = "food">
//                     </div>
//                     <div class = "meal-name">
//                         <h3>${meal.strMeal}</h3>
//                         <a href = "#" class = "recipe-btn">Get Recipe</a>
//                     </div>
//                 </div>
//             `;
//     })
//   };
//   mealsBox.innerHTML = html;
// })
// }
//
// function checkIfSearchBoxIsEmpty() {
//   let ingredient = searchedIngredient.value;
//
//   if(ingredient.length == 0) {
//     document.getElementById('empty-box').style.display = 'block';
//     return false;
//   }
//   else {
//     document.getElementById('empty-box').style.display = 'none';
//     return true;
//   }
// }
//
// function triggerEvents(event) {
//   event.preventDefault();
//   if(checkIfSearchBoxIsEmpty()) {
//     const ingredient = searchedIngredient.value;
//     searchMeal(ingredient);
//   }
// }
//
// submit.addEventListener('submit', triggerEvents);




















// const search = document.getElementById("search");
// const  submit = document.getElementById("submit");
// const  random = document.getElementById("random");
// const  mealsEl = document.getElementById("meals");
// const  resultHeading = document.getElementById("result-heading");
// const  single_mealEl = document.getElementById("single-meal");

const searchedIngredient = document.getElementById('search');
const submit = document.getElementById('submit');
const random = document.getElementById('random-button');
const mealsBox = document.getElementById('meals');
const resultsBox = document.getElementById('result');
const individualMeal = document.getElementById('individual-meal');



function searchMeal(element) {
  element.preventDefault();

  let URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

  resultsBox.innerHTML = "";
  const ingredient = search.value;
  URL += ingredient;

  console.log(ingredient);

  const searchLength = searchedIngredient.value.length;
  console.log(searchLength);

  if (searchLength == 0) {
    document.getElementById('empty-box').style.display = 'block';
  }
  else {
    document.getElementById('empty-box').style.display = 'none';
    fetch(URL).then((response) => response.json()).then((data) => {
        console.log(data);
        resultsBox.innerHTML = `<h2>Search results for '${ingredient}':</h2>`;
        if (data.meals === null) {
          resultsBox.innerHTML = `<p>There are no search results. Try again!</p>`;
        } else {
          mealsBox.innerHTML = data.meals
            .map(
              (meal) => `
            <div class="meal">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
            <div class="meal-info" data-mealID="${meal.idMeal}">
            <h3>${meal.strMeal}</h3></div>
            </div>`
            )
            .join("");
        }
      });
    search.value = "";
  }
}
submit.addEventListener("submit", searchMeal);

function addMealToDOM(meal) {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]}-${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }


  individualMeal.innerHTML = `
  <div class="single-meal">
    <h1>${meal.strMeal}</h1>
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
    <div class="single-meal-info">
        ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ""}
        ${meal.strArea ? `<p>${meal.strArea}</p>` : ""}
    </div>

  </div>`;

  let instructions = [];
  let string = meal.strInstructions;
  let tempCounter = 0;
  let counter = 0;

  console.log(string);

  for(let i = 0; i < string.length; i++) {
    if(string[i] == '.') {
      instructions.push(string.substring(tempCounter, i));
      tempCounter = i + 1;
      counter++;
    }
  }

  for(let i = 0; i < counter; i++) {
    individualMeal.innerHTML += `<div class='instruction'>
    <ul>
    <li>${instructions[i]}</li>
    </ul>
    </div>`
  }

}

function getMealByID(mealID) {
  let URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  URL += mealID;

  fetch(URL)
  .then((res) => res.json())
    .then((data) => {
      const meal = data.meals[0];
      addMealToDOM(meal);
    });
}

mealsBox.addEventListener("click", e => {
  const mealInfo = e.path.find(item => {
    if(item.classList) {
      return item.classList.contains("meal-info");
    }
    else {
      return false;
    }
  });
  if(mealInfo) {
    const mealID = mealInfo.getAttribute("data-mealID");
    getMealByID(mealID);
  }
});

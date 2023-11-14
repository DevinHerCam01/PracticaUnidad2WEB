import {changeW,getoneElement} from './firebase.js';

window.addEventListener('DOMContentLoaded', () =>{
    console.log(localStorage.getItem('user'));
    // getoneElement()
})

const logOutBtn = document.getElementById('logOut');

logOutBtn.addEventListener('click', () =>{
    console.log('click');
    changeW('./login.html')
})
 
/*Buscador*/

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById('searchInput');
    const recipeList = document.getElementById('recipeList');

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const recipes = document.querySelectorAll('.recipe');

        recipes.forEach(recipe => {
            const recipeName = recipe.textContent.toLowerCase();
            if (recipeName.includes(searchTerm)) {
                recipe.style.display = 'block';
            } else {
                recipe.style.display = 'none';
            }
        });
    });
});

/* Enviar comentario */

document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("comment-form");
    const commentsContainer = document.getElementById("comments");
  
    commentForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const username = document.getElementById("username").value;
      const comment = document.getElementById("comment").value;
      const rating = document.getElementById("rating").value;
  
      const commentElement = document.createElement("div");
      commentElement.className = "comment";
      commentElement.innerHTML = `
        <strong>${username}</strong> - ${rating} estrellas
        <p>${comment}</p>
      `;
  
      commentsContainer.appendChild(commentElement);
  
      // Limpia el formulario
      document.getElementById("username").value = "";
      document.getElementById("comment").value = "";
    });
  });

  /*Calificar contenido */
  document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".rating input");
    const submitButton = document.getElementById("submit");
  
    stars.forEach(function (star) {
      star.addEventListener("click", function () {
        // Resaltar las estrellas seleccionadas y deseleccionar las demás
        stars.forEach(function (s) {
          s.checked = false;
        });
        star.checked = true;
      });
    });
  
    submitButton.addEventListener("click", function () {
      const selectedRating = document.querySelector(".rating input:checked");
  
      if (selectedRating) {
        alert("Has calificado con " + selectedRating.value + " estrellas.");
      } else {
        alert("Por favor, selecciona una calificación antes de enviar.");
      }
    });
  });
  

  


const postName = (new URLSearchParams(window.location.search)).get('id');
const nameHeroSingle = document.querySelector(".name_hero_single");
const shortDescription = document.querySelector(".short_description_single")
const description = document.querySelector(".description_single");
const imageSingle = document.querySelector(".image_single");
const buttonDelete = document.querySelector(".button_delete")

const single = fetch("https://character-database.becode.xyz/characters")
    .then((id) => id.json())
    .then((id) => {
        for (let elements of id ){
            const buttonUpdate = document.querySelector(".button_update")
            buttonUpdate.href = "../pages/update.html?id=" + elements.id;
            if (elements.id === postName){
                nameHeroSingle.innerText = elements.name
                shortDescription.innerText = elements.shortDescription
                description.innerText = elements.description
                imageSingle.src=  'data:image/gif;base64,' + elements.image;
                image.classList.add("image_single");
            }
        }
    })

buttonDelete.addEventListener("click", () => {
    fetch("https://character-database.becode.xyz/characters/" + postName, {
        method: "DELETE",
    })
    .then(response => {
        if (response.ok){
            console.log("bien supprimé");
        }
        else{
            console.log("pas supprimé error");
        }
    })
    .then(result => {
        console.log("Success:", result);
  
        // Redirection vers une autre page
        // TODO: la bonne page
        window.location.href = "../index.html";
  
      })
    .catch(error => {
        console.error("erreur :", error);
    });

});








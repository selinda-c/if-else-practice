window.onload = function(){
  let cats = document.getElementById("cats");
  cats.style.display = "none";
  let dogs = document.getElementById("dogs");
  dogs.style.display = "none";
  let rabbits = document.getElementById("rabbits");
  rabbits.style.display = "none";
  let please = document.getElementById("notOnList")
  please.style.display = "none"

  const form = document.querySelector("form");
  form.onsubmit = function(event){
    const animals = document.querySelector("input#animal").value;
    if (animals === "cats"){
      cats.removeAttribute("style");
      dogs.style.display ="none";
      rabbits.style.display = "none";
      please.style.display = "none"
    }
    else if (animals === "dogs") {
      dogs.removeAttribute("style")
      rabbits.style.display = "none"
      cats.style.display = "none"
      please.style.display = "none"
    }
    else if (animals === "rabbits"){
      rabbits.removeAttribute("style");
      dogs.style.display = "none"
      cats.style.display = "none"
      please.style.display = "none"
    }
    else {
      please.removeAttribute("style")
      dogs.style.display = "none"
      cats.style.display = "none"
      rabbits.style.display = "none"
    };
    event.preventDefault();
  };
};

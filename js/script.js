//Recupero l'elemento lista
const list = document.getElementById("numbers-list");
let items = "";

for (let i = 1; i <= 100; i++) {
  let content = i;

  if (i % 15 === 0) {
    content = "fizzbuzz";
  } else if (i % 5 === 0) {
    content = "buzz";
  } else if (i % 3 === 0) {
    content = "fizz";
  }
  items += `<li class="${content}">${content}</li>`;
}

//Inserisco i risultati nella lista
list.innerHTML = items;

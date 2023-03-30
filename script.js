var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li");
var btns = document.querySelectorAll(".btn");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  var btn = document.createElement("button");
  btn.innerHTML = "Delete";
  li.appendChild(document.createTextNode(input.value + " "));
  li.appendChild(btn);
  ul.appendChild(li);
  input.value = "";
  li.addEventListener("click", function (e) {
    console.log(e.target);
    if (e.target.tagName == "LI") {
      li.classList.toggle("done");
    } else {
      this.remove();
    }
    // ***********************************
    // APLICAR A FUNÇÃO ACIMA NOS NODES ORIGINAIS
  });
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

list.forEach((element) =>
  element.addEventListener("click", function () {
    element.classList.toggle("done");
  })
);

btns.forEach((element) =>
  element.addEventListener("click", function (e) {
    console.log(e.target);
    if (e.target.tagName == "LI") {
      li.classList.toggle("done");
    } else {
      this.parentNode.remove();
    }
  })
);

// APRIMORAR AQUI, NÃO REMOVE OS ORIGINAIS
// testar se a função está lendo o target do click (pode ser pq ela tá no LI e não no btn)
// ver se coloca um listener num nível superior e usa target pra proceder

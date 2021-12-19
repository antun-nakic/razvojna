import { Button } from "./node_modules/bootstrap/dist/js/bootstrap.esm.min.js";

var botun = new Button(document.getElementById("botun"));
botun._element.innerHTML = "sime";
console.log(botun);

var kontekst = { ime: "Antun", prezime: "Nakić" };
console.log(Handlebars.templates);
var cistiHTMLstringGotov = Handlebars.templates.lista(kontekst);

document.body.innerHTML += cistiHTMLstringGotov;
document.body.innerHTML += Handlebars.templates.slika({
  url: "https://i.stack.imgur.com/cc91P.png?s=64",
});

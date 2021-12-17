var kontekst = { ime: "Antun", prezime: "Nakić" };
console.log(Handlebars.templates);
var cistiHTMLstringGotov = Handlebars.templates.lista(kontekst);

document.body.innerHTML = cistiHTMLstringGotov;
document.body.innerHTML += Handlebars.templates.slika({
  url: "https://i.stack.imgur.com/cc91P.png?s=64",
});

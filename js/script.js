const upcommingDate = "24-02-2023";
const houseMembers = [
  "Peter Koole - Drum/zang",
  "Raynauld Minkema - Bass",
  "Allan Parisius - Gitaar/zang",
  "Jur de Boer - Gitaar/zang",
];
const spotifyLink =
  "https://open.spotify.com/playlist/1ECkLGLCfDN9bCplPU9L0R?si=igAuu1-xToS_tnh91eRQrQ";

const main = document.querySelector("main");

function clearMain() {
  main.textContent = "";
}

function handleClick(event) {
  let { id } = event.target;
  switch (id) {
    case "infoBtn":
      infoPage();
      break;
    case "submitBtn":
      sendPage();
      break;
    case "backBtn":
      frontPage();
      break;
    case "listBtn":
      listPage();
      break;
  }
}

function createOutput(element, elementId, text) {
  let output = document.createElement(element);
  output.className = "outputs";
  output.id = elementId;
  output.innerHTML = text;
  return output;
}

function createBtn(text, btnId) {
  let btn = document.createElement("button");
  btn.textContent = text;
  btn.id = btnId;
  btn.className = "btns";
  btn.addEventListener("click", handleClick);
  return btn;
}

function createContainer(containerId) {
  let container = document.createElement("div");
  container.id = containerId;
  container.className = "containers";
  return container;
}

function createBackBtn() {
  let btn = createBtn("Terug", "backBtn");
  return btn;
}

function infoPage() {
  clearMain();
  let container = createContainer("whoAndWhenContainer");

  let outputText = "";

  let output = createOutput("h3", "whoAndWhenOutput", outputText);
  output.innerHTML = `
<h2>De volgende jamsessie: ${upcommingDate} </h2>
<h3>De huisband bestaat uit: </h3>
<p>${houseMembers[0]} </p>
<p>${houseMembers[1]}</p>
<p>${houseMembers[2]}</p>
<p>${houseMembers[3]}</p>
</br>
<p>Zij begeleiden daar waar nodig 
en maken ruimte voor iedere gewillige muzikant.
<br /> 
<em>Wil je meespelen?</em>
<br />
Neem je instrument mee en spreek iemand van 
de huisband aan. 
Samen komen we er vaak wel uit wat er gespeeld 
kan worden en met wie.
De leden van de huisband kunnen hun instrumenten uitlenen
aan mensen die geen instrument bij zich hebben, 
maar zijn dit allerminst verplicht.
</p>
`;
  container.append(output);
  main.append(container);
  main.append(createBackBtn());
}

function sendPage() {
  clearMain();
  let formHtml = `
<p id='formExplain'>Mocht het ingestuurde nummer 
ons aanspreken kan het zijn dat het nummer op 
de jamband spotify lijst terecht komt. 
Dit is, zoals zoveel in het leven, 
echter geen zekerheid.</p>
<form name='contact' method='POST' data-netlify='true'>
<label for='songInput'>Naam lied: </label>
<input id='songInput' name='songInput'>
<br />
<label for='artistInput'>Naam artiest: </label>
<input id='artistInput' name='artistInput'>
<br />
<label for='userName'>Uw naam: </label>
<input id='userName' name='userName'>
<br />
<label for='userContact'>Contact: </label>
<input id='userContact' name='userContact' placeholder='tel, email of naar keuze'>
<br />
<input type="submit" value="submit">
</form>
`;
  let formContainer = createContainer("formContainer");
  formContainer.innerHTML = formHtml;
  main.append(formContainer);
  main.append(createBackBtn());
}

function listPage() {
  clearMain();
  let outputTxt = `   
<p><em>Dit is een steeds veranderende en groeiende lijst. 
Let op, niet ieder nummer zal gespeeld kunnen worden, 
afhangend van de opstelling van de huisband.</em></p>                                                         
<a href='https://open.spotify.com/playlist/1jgrRio6hMwL3MWXBhV1oJ?si=nlEliftHSg-HBz7IzEQRQw'>Lijst wordt geopend in Spotify</a>
`;
  let outputContainer = createContainer("listContainer");
  let output = createOutput("h3", "listOutput", outputTxt);
  outputContainer.append(output);
  main.append(outputContainer);
  main.append(createBackBtn());
}

function frontPage() {
  clearMain();
  let btnPlacementFront = createContainer("btnPlacementFront");
  let infoBtn = createBtn("Ik snap er niks van.", "infoBtn");
  let submitBtn = createBtn("Ik weet een leuk nummer!", "submitBtn");
  let listBtn = createBtn(
    "Welke nummers kunnen jullie bijvoorbeeld?",
    "listBtn"
  );

  btnPlacementFront.append(submitBtn);

  btnPlacementFront.append(listBtn);
  btnPlacementFront.append(infoBtn);
  main.append(btnPlacementFront);
}

frontPage();

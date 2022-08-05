var content = document.querySelector(".content");
var btnTranslate = document.querySelector("#btn-translate");
var btnClear = document.querySelector("#btn-clear");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/shakespeare.json";

function getTranslationURL(text){
    return serverURL + "?text=" + text;
}

function errorHandler(err){
    console.log("An error occured", err);
    alert("Something went wrong , please try after sometime");
}

function clickHandler(){
  var inputText = txtInput.value;
  if(inputText.trim()){
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => outputDiv.innerHTML = json.contents.translated)
    .catch(errorHandler)
  } else {
    alert("Please enter something in the textbox as an input.")
    outputDiv.innerHTML = "";
  }
}

btnTranslate.addEventListener("click",clickHandler);

btnClear.addEventListener("click",() => {
  outputDiv.innerHTML = "";
  txtInput.value = "";
})
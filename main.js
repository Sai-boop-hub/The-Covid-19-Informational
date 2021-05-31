
var language = "";

function set_to_e() {

document.getElementById("test_1").innerHTML = "Choose Your Language";
document.getElementById("next").innerHTML = "Continue";
document.getElementById("test_34").innerHTML = "Covid-19 Informational";
language = "English";

}

function set_to_f() {

document.getElementById("test_1").innerHTML = "Choisissez votre langue";
document.getElementById("next").innerHTML = "Continuer";
document.getElementById("test_34").innerHTML = "Covid-19 informationnel";
language = "French";
    
}

function set_to_s() {

document.getElementById("test_1").innerHTML = "Elige tu idioma";
document.getElementById("next").innerHTML = "Continuar";
document.getElementById("test_34").innerHTML = "Covid-19 Informativo";
language = "Spanish";
        
}

function move() {

if(language == "English")

window.location = ("english.html");

if(language == "Spanish")

window.location = ("spanish.html");

if(language == "French")

window.location = ("french.html");


}

function exit() {

window.location = ("index.html");


}

function enter() {

window.location = ("index.html");

}



import { projects } from "./projects.js";

const currentURL = window.location.href;
const url = new URL(currentURL);
const currentProjectID = url.searchParams.get("id");

const currentProject = projects.find(projects => projects.id === currentProjectID);

const iframe = document.getElementById('model-iframe');
iframe.src = currentProject.url


function verHerrA () {
    var estiloA = document.getElementById("btn1"); 
    estiloA.className = "btnherrpress";

    var mostrarbar2 = document.getElementById("toolbar2");
    mostrarbar2.className = "vflex";

    var mostrarTools1 = document.getElementById("btn1tools");
    mostrarTools1.className = "vsbl";

    var ocultarB = document.getElementById("btn2");
    ocultarB.className = "oclt";
}

function verHerrB () {
    var estiloB = document.getElementById("btn2"); 
    estiloB.className = "btnherrpress";

    var mostrarbar2 = document.getElementById("toolbar2");
    mostrarbar2.className = "vflex";

    var mostrarTools2 = document.getElementById("btn2tools");
    mostrarTools2.className = "vsbl";

    var ocultarA = document.getElementById("btn1");
    ocultarA.className = "oclt";
}

function verHerrR () {
    var estiloA = document.getElementById("btn1"); 
    estiloA.className = "btnherr";
    var estiloB = document.getElementById("btn2"); 
    estiloB.className = "btnherr";

    var mostrarbar2 = document.getElementById("toolbar2");
    mostrarbar2.className = "oclt";

    var mostrarTools1 = document.getElementById("btn1tools");
    mostrarTools1.className = "oclt";
    var mostrarTools2 = document.getElementById("btn2tools");
    mostrarTools2.className = "oclt";
}

document.getElementById("btn1").onclick = verHerrA;
document.getElementById("btn2").onclick = verHerrB;
document.getElementById("btnR1").onclick = verHerrR;
document.getElementById("btnR2").onclick = verHerrR;
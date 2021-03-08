let parentElement = document.getElementById("Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police");

let firstChild = parentElement.firstChild;

let newElement = document.createElement("canvas");

parentElement.insertBefore(newElement, firstChild.nextSibling);
let parentElement = document.getElementById("Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police");

let firstChild = parentElement.firstChild;

let chart1 = document.createElement("canvas");

parentElement.insertBefore(chart1, firstChild.nextSibling);

//============================================================================

/*chart1.getContext("2d");

let crimes = new Chart(chart1, {
    type: "bar", //bar, doughnut, pie, horizontalBar, line, radar, polarArea
    data: {
        labels: ["", "", "", "", ""],
        datasets: [{
            label: "",
            data: [

            ]
        }]
    },
    options: {}
});*/
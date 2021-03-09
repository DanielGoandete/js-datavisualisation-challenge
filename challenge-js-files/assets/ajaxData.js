Chart.defaults.global.defaultFontSize = 16;
Chart.defaults.global.defaultFontColor = "#000";

let graphiqueChart = () => {
    let canvas1 = document.createElement("canvas");
    canvas1.setAttribute("id", "canvas");
    canvas1.setAttribute("height", "300");
    canvas1.setAttribute("width", "600");
    document.getElementById("firstHeading").appendChild(canvas1);

    let canvas = document.getElementById("canvas").getContext("2d");
    let dataChart = [];
    let label = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let i = 9;
    let chart = new Chart(canvas, {
        type: 'line',//bar, horizontalBar, pie, line , doughnut , radar ,polarArea
        data: {
            labels: label,
            datasets: [{
                label: ["Crime Statistics' Chart"],
                data: dataChart,
                borderColor: "red",
            }]
        }
    })

    // Update graphique by time
    function graphiqueUpdateByTime() {
        i++;
        label.push(i);


        fetch('https://canvasjs.com/services/data/datapoints.php')
            .then(res => {
                return res.json()
            })
            .then(data => {
                dataChart.length + 1;
                data.forEach(ele => dataChart.push(parseInt(ele[1])));
                chart.update();
            })
    };
    setInterval(graphiqueUpdateByTime, 2500);
}
graphiqueChart();



function tableToJson(table) {
    let data = [];
    for (i = 1; i < table.rows.length; i++) {
        let tableRow = table.rows[i];
        let rowData = [];
        for (j = 1; j < tableRow.cells.length; j++) {
            rowData.push(tableRow.cells[j].innerHTML);;
        }
        data.push(rowData);
    }
    return data;
}


let labelTable  = document.getElementById("table1");
let data2 = [];
let data3 = [];
let table = Array.from(tableToJson(labelTable));

for (let j = 1; j < table.length; j++) { 
    let sum = []; 
    for (let i = 1; i < table[j].length; i++) {
         if (parseFloat(table[j][i])) {
              sum.push(parseFloat(table[j][i])); 
        } 
    } 
    data2[table[j][0]] = sum; 
    data3[table[j][0]] = sum;
}


console.log(Object.keys(data2)[1]);
console.log(Object.values(data2)[1]);




let graphique1 = () => {
    let canvas2 = document.createElement("canvas");
    canvas2.setAttribute("id", "canvas2");
    canvas2.setAttribute("height", "300");
    canvas2.setAttribute("width", "600");
    document.getElementById("firstHeading").appendChild(canvas2);

    let canvasC = document.getElementById("canvas2").getContext("2d");
    let dataChart = [];
    let label = [2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012]
    let i = 9;
    let chart = new Chart(canvasC, {
        type: 'bar',//bar, horizontalBar, pie, line , doughnut , radar ,polarArea
        data: {
            labels: label,
            datasets: [{
                label: Object.keys(data2)[1],
                data: Object.values(data2)[1],
                borderColor: "red",
            }]
        }
    })
}
graphique1();

let graphique2 = () => {
    let canvas3 = document.createElement("canvas");
    canvas3.setAttribute("id", "canvas3");
    canvas3.setAttribute("height", "300");
    canvas3.setAttribute("width", "600");
    document.getElementById("firstHeading").appendChild(canvas3);

    let canvasC = document.getElementById("canvas3").getContext("2d");
    let dataChart = [];
    let label = [2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012]
    let i = 9;
    let chart = new Chart(canvasC, {
        type: 'line',//bar, horizontalBar, pie, line , doughnut , radar ,polarArea
        data: {
            labels: label,
            datasets: [{
                label: Object.keys(data3)[4],
                data: Object.values(data3)[4],
                borderColor: "blue",
            },
            {
                label: Object.keys(data3)[2],
                data: Object.values(data3)[2],
                borderColor: "blue",
            }]
        }
    })
}
graphique2();

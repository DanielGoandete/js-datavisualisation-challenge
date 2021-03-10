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


let year = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012]
let labelTable = document.getElementById("table1");
let data2 = [];
let table = Array.from(tableToJson(labelTable));

for (let j = 1; j < table.length; j++) {
    let sum = [];
    for (let i = 1; i < table[j].length; i++) {
        if (parseFloat(table[j][i])) {
            sum.push(parseFloat(table[j][i]));
        }
    } data2[table[j][0]] = sum;
}

//=================================
let labelTable3 = document.getElementById("table2");
let data3 = [];
let table3 = Array.from(tableToJson(labelTable3));

for (let j = 1; j < table3.length; j++) {
    let sum3 = [];
    for (let i = 1; i < table3[j].length; i++) {
        if (parseFloat(table3[j][i])) {
            sum3.push(parseFloat(table3[j][i]));
        }
    } data3[table[j][0]] = sum3;
}


// console.log(Object.keys(data2)[1]);
// console.log(Object.values(data2)[1]);




let graphique2 = () => {
    let canvas2 = document.createElement("canvas");
    canvas2.setAttribute("id", "canvas2");
    canvas2.setAttribute("height", "300");
    canvas2.setAttribute("width", "600");
    document.querySelector("h3").appendChild(canvas2);

    let canvasC2 = document.getElementById("canvas2").getContext("2d");
    let label = ["2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012"]
    let chart2 = new Chart(canvasC2, {
        type: "line",//bar, horizontalBar, pie, line , doughnut , radar ,polarArea
        data: {
            labels: label,
            datasets: [{
                label: Object.keys(data2)[0],
                data: Object.values(data2)[0]
            },
            {
                label: Object.keys(data2)[1],
                data: Object.values(data2)[1]
            },
            {
                label: Object.keys(data2)[2],
                data: Object.values(data2)[2]
            },
            {
                label: Object.keys(data2)[3],
                data: Object.values(data2)[3]
            },
            {
                label: Object.keys(data2)[4],
                data: Object.values(data2)[4]
            },
            {
                label: Object.keys(data2)[5],
                data: Object.values(data2)[5]
            },
            {
                label: Object.keys(data2)[6],
                data: Object.values(data2)[6]
            },
            {
                label: Object.keys(data2)[7],
                data: Object.values(data2)[7]
            },
            {
                label: Object.keys(data2)[8],
                data: Object.values(data2)[8]
            },
            {
                label: Object.keys(data2)[9],
                data: Object.values(data2)[9]
            },
            {
                label: Object.keys(data2)[10],
                data: Object.values(data2)[10]
            },
            {
                label: Object.keys(data2)[11],
                data: Object.values(data2)[11]
            },
            {
                label: Object.keys(data2)[12],
                data: Object.values(data2)[12]
            },
            {
                label: Object.keys(data2)[13],
                data: Object.values(data2)[13]
            },
            {
                label: Object.keys(data2)[14],
                data: Object.values(data2)[14]
            },
            {
                label: Object.keys(data2)[15],
                data: Object.values(data2)[15]
            },
            {
                label: Object.keys(data2)[16],
                data: Object.values(data2)[16]
            },
            {
                label: Object.keys(data2)[17],
                data: Object.values(data2)[17]
            },
            {
                label: Object.keys(data2)[19],
                data: Object.values(data2)[19]
            },
            {
                label: Object.keys(data2)[20],
                data: Object.values(data2)[20]
            },
            {
                label: Object.keys(data2)[21],
                data: Object.values(data2)[21],
                borderColor: "red",
            },
            {
                label: Object.keys(data2)[22],
                data: Object.values(data2)[22],
                borderColor: "red",
            },
            {
                label: Object.keys(data2)[23],
                data: Object.values(data2)[23],
                borderColor: "red",
            },
            {
                label: Object.keys(data2)[24],
                data: Object.values(data2)[24],
                borderColor: "red",
            },
            {
                label: Object.keys(data2)[25],
                data: Object.values(data2)[25],
                borderColor: "red",
            },
            {
                label: Object.keys(data2)[26],
                data: Object.values(data2)[26],
                borderColor: "red",
            },
            {
                label: Object.keys(data2)[27],
                data: Object.values(data2)[27],
                borderColor: "red",
            },
            {
                label: Object.keys(data2)[28],
                data: Object.values(data2)[28],
                borderColor: "red",
            },
            {
                label: Object.keys(data2)[29],
                data: Object.values(data2)[29],
                borderColor: "red",
            },
            {
                label: Object.keys(data2)[30],
                data: Object.values(data2)[30],
                borderColor: "red",
            },
            {
                label: Object.keys(data2)[31],
                data: Object.values(data2)[31],
                borderColor: "red",
            },
            {
                label: Object.keys(data2)[32],
                data: Object.values(data2)[32],
                borderColor: "red",
            },
            {
                label: Object.keys(data2)[33],
                data: Object.values(data2)[33],
                borderColor: "red",
            },
            {
                label: Object.keys(data2)[34],
                data: Object.values(data2)[34],
                borderColor: "red",
            }
            ]
        }
    })
}
graphique2();


//Graphique n°3
let graphique3 = () => {
    let canvas3 = document.createElement("canvas");
    let div = document.createElement("div");
    div.setAttribute("id", "div");
    canvas3.setAttribute("id", "canvas3");
    canvas3.setAttribute("height", "300");
    canvas3.setAttribute("width", "600");
<<<<<<< Updated upstream
    document.querySelector("#Homicides").appendChild(canvas3);
=======
    document.getElementById("Homicides").appendChild(div);
    document.getElementById("div").appendChild(canvas3);
>>>>>>> Stashed changes

    let canvasC3 = document.getElementById("canvas3").getContext("2d");
    let label = ["2007-09", "2010-12"]
    let chart3 = new Chart(canvasC3, {
        type: 'bar',//bar, horizontalBar, pie, line , doughnut , radar ,polarArea
        data: {
            labels: label,
            datasets: [{
                label: Object.keys(data3)[0],
                data: Object.values(data3)[0],
                borderColor: "red",
            },
            {
                label: Object.keys(data3)[1],
                data: Object.values(data3)[1],
                borderColor: "red",
            },
            {
                label: Object.keys(data3)[2],
                data: Object.values(data3)[2],
                borderColor: "red",
            },
            {
                label: Object.keys(data3)[3],
                data: Object.values(data3)[3],
                borderColor: "red",
            },
            {
                label: Object.keys(data3)[4],
                data: Object.values(data3)[4],
                borderColor: "red",
            },
            {
                label: Object.keys(data3)[5],
                data: Object.values(data3)[5],
                borderColor: "red",
            },
            {
                label: Object.keys(data3)[6],
                data: Object.values(data3)[6],
                borderColor: "red",
            },
            {
                label: Object.keys(data3)[7],
                data: Object.values(data3)[7],
                borderColor: "red",
            },
            {
                label: Object.keys(data3)[8],
                data: Object.values(data3)[8],
                borderColor: "red",
            },
            {
                label: Object.keys(data3)[9],
                data: Object.values(data3)[9],
                borderColor: "red",
            },
            {
                label: Object.keys(data3)[10],
                data: Object.values(data3)[10],
                borderColor: "red",
            },
            {
                label: Object.keys(data3)[11],
                data: Object.values(data3)[11],
                borderColor: "red",
            },
            {
                label: Object.keys(data3)[12],
                data: Object.values(data3)[12],
                borderColor: "red",
            },
            {
                label: Object.keys(data3)[13],
                data: Object.values(data3)[13],
                borderColor: "red",
            },
            {
                label: Object.keys(data3)[14],
                data: Object.values(data3)[14],
                borderColor: "red",
            },
            {
                label: Object.keys(data3)[15],
                data: Object.values(data3)[15],
                borderColor: "red",
            },
            {
                label: Object.keys(data3)[16],
                data: Object.values(data3)[16],
                borderColor: "red",
            },
            {
                label: Object.keys(data3)[17],
                data: Object.values(data3)[17],
                borderColor: "red",
            },
            {
                label: Object.keys(data3)[18],
                data: Object.values(data3)[18],
                borderColor: "red",
            },
            {
                label: Object.keys(data3)[19],
                data: Object.values(data3)[19],
                borderColor: "red",
            },
            {
                label: Object.keys(data3)[20],
                data: Object.values(data3)[20],
                borderColor: "red",
            },
            {
                label: Object.keys(data3)[21],
                data: Object.values(data3)[21],
                borderColor: "red",
            },
            {
                label: Object.keys(data3)[22],
                data: Object.values(data3)[22],
                borderColor: "red",
            },
            {
                label: Object.keys(data3)[23],
                data: Object.values(data3)[23],
                borderColor: "red",
            },
            {
                label: Object.keys(data3)[24],
                data: Object.values(data3)[24],
                borderColor: "red",
            },
            {
                label: Object.keys(data3)[25],
                data: Object.values(data3)[25],
                borderColor: "red",
            },
            {
                label: Object.keys(data3)[26],
                data: Object.values(data3)[26],
                borderColor: "red",
            },
            {
                label: Object.keys(data3)[27],
                data: Object.values(data3)[27],
                borderColor: "red",
            },
            {
                label: Object.keys(data3)[28],
                data: Object.values(data3)[28],
                borderColor: "red",
            }]

        }
    })
}
graphique3();

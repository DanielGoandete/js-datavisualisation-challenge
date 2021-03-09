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
        type: 'bar',//bar, horizontalBar, pie, line , doughnut , radar ,polarArea
        data: {
            labels: label,
            datasets: [{
                label: ["Crime Statistics' Chart"],
                data: dataChart,
                //borderColor: "red",
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



// let table = document.getElementById("table1");
// var j = [].reduce.call(table.rows, function(res, row) {
//     res[row.cells[0].textContent.slice(0,-1)] = row.cells[1].textContent;
//     return res
// }, {});

// document.querySelector("pre").textContent = JSON.stringify(j, null, 2);


/*function tableToJSON(x) {
    let x;
    let obj = {};
    let row, rows = table.rows;
    for (let i = 0; i <  rows.length; i++) {
        row = rows[i];
        obj[row.cells[0].textContent] = row.cells[1].textContent;
    }
    document.querySelector("x").textContent = JSON.stringify(obj);
    return JSON.stringify(obj);
}

tableToJSON();
Table1
Table2*/

/*let table = document.getElementById("table1");
let trLength = table.getElementsByTagName("tr").length;
let jsonData = [];
let obj = {};

let htmlToJSON = function (index) {
    let tr = table.getElementsByTagName("tr")[index];
    let td = tr.getElementsByTagName("td");
    let arr = [].map.call(td, function (td) {
        return td.innerHTML;
    }).join(',');
    let data = arr.split(",");

    obj = {
        country: data[0],
        2002: data[1],
        2003: data[2],
        2004: data[3],
        2005: data[4],
        2006: data[5],
        2007: data[6],
        2008: data[7],
        2009: data[8],
        2010: data[9],
        2011: data[10],
        2012: data[11]
    };

    jsonData.push(obj);

};

for (let i = 1; i < trLength; i++) {
    htmlToJSON(i);
}
console.log("html to JSON", jsonData);*/


function tableToJson(table) {
    let data = [];
    for (i = 1; i < table.rows.length; i++) {
        let tableRow = table.rows[i];
        let rowData = [];
        for (j = 1; j < tableRow.cells.length; j++) {
            rowData.push(tableRow.cells[j].innerHTML);
        }
        data.push(rowData);
    }
    return data;
}
let table1D = [];
let table1 = document.getElementById("table1");
table = tableToJson(table1);

Array.from(table).forEach(element => {
    let sum = 0;
    for (let i = 1; i < element.length; i++) {
        if (parseFloat(element[i])) {
            sum += parseFloat(element[i]);
        }

    }
    table1D.push([element[0], sum]);
    console.log(element[0]);



})
const table2007_2009 = [];
const table2010_2012 = [];
let table2 = document.getElementById("table2");

table2 = tableToJson(table2);
Array.from(table2).forEach((element) => {
    table2007_2009.push([element[0], element[2]]);
    table2010_2012.push([element[0], element[1]]);

})
console.log(table2010_2012);
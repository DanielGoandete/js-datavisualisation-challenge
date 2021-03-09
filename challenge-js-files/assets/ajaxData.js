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

function tableToJson() {
    let table = document.getElementById("table1");
    var data = [];
    for (var i = 1; i < table.rows.length; i++) {
        var tableRow = table.rows[i];
        var rowData = [];
        for (var j = 0; j < tableRow.cells.length; j++) {
            rowData.push(tableRow.cells[j].innerHTML);;
        }
        data.push(rowData);
    }
    return data;
}
console.log(tableToJson());
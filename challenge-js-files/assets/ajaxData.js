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

let _table = document.getElementById("table1");
let _trLength = _table.getElementsByTagName("tr").length;
let _jsonData = [];
let _obj = {};

let _table1ToJSON = function (index) {
    let _tr = _table.getElementsByTagName("tr")[index];
    let _td = _tr.getElementsByTagName("td");
    let _arr = [].map.call(_td, function (td) {
        return td.innerHTML;
    }).join(',');
    let _data = _arr.split(",");

    _obj = {
        country: _data[0]
        , 2002: _data[1]
        , 2003: _data[2]
        , 2004: _data[3]
        , 2005: _data[4]
        , 2006: _data[5]
        , 2007: _data[6]
        , 2008: _data[7]
        , 2009: _data[8]
        , 2010: _data[9]
        , 2011: _data[10]
        , 2012: _data[11]
    };

    _jsonData.push(_obj);

};

let _table2 = document.getElementById("table2");
let _trLength2 = _table2.getElementsByTagName("tr").length;
let _jsonData2 = [];
let _obj2 = {};
let _table2ToJSON = function (index) {
    
    let _tr2 = _table2.getElementsByTagName("tr")[index];
    let _td2 = _tr2.getElementsByTagName("td");
    let _arr2 = [].map.call(_td2, function (td) {
        return td.innerHTML;
    }).join(',');
    let _data2 = _arr2.split(",");

    _obj2 = {
        country: _data2[0]
        , 2002: _data2[1]
        , 2003: _data2[2]
        , 2004: _data2[3]
        , 2005: _data2[4]
        , 2006: _data2[5]
        , 2007: _data2[6]
        , 2008: _data2[7]
        , 2009: _data2[8]
        , 2010: _data2[9]
        , 2011: _data2[10]
        , 2012: _data2[11]
    };

    _jsonData2.push(_obj2);

};

for (let i = 1; i < _trLength; i++) {
    _table1ToJSON(i);
   
}
for (let i = 1; i < _trLength2; i++) {
    
    _table2ToJSON(i);
}
//document.getElementById("table1").textContent = JSON.stringify(_jsonData);
//document.getElementById("table2").textContent = JSON.stringify(_jsonData2);
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


let year = [2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012]
let dataTable = {};
let labelTable  = document.getElementById("table1");
let country = [];
let valueCountry = [],[];
let table = Array.from(tableToJson(labelTable));
for(let i =1;i < table.length; i++){
    for(let g=1; g < table[i].length; g++){

        valueCountry[g].push(table[g][1]);
    }

    country.push(table[i][0]);
}

console.log(country);
console.log(valueCountry);

console.log(table);





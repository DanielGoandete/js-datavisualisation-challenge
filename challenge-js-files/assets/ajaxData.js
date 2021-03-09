
Chart.defaults.global.defaultFontFamily ='lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = 'black';
let graphOne = () => {
    let canv = document.createElement("canvas");
    canv.setAttribute('id', 'canvas');
    canv.setAttribute("height", "300");
    canv.setAttribute("width", "600");
    document.getElementById("container").appendChild(canv);
    
    let canvas = document.getElementById('canvas').getContext('2d');
    let dataPoints = [];
    let label =[1,2,3,4,5,6,7,8,9]
    let i=9;
    let chart = new Chart(canvas,{
        type: 'bar',//bar, horizontalBar, pie, line , doughnut , radar ,polarArea
        data : {
            labels : label,
            datasets: [{
                label : ["Crime Statistics"],
                borderColor : "blue",
                data : dataPoints,
            }],
            backgroundColor:[
                'red','blue','green','yellow'
            ],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
            
        }
    })
    // Update and ajax
    function updateGraph() {
        i++;
        label.push(i);
            fetch('https://canvasjs.com/services/data/datapoints.php')
            .then(function (response){
            return response.json()
        })
            .then(function (data){
            dataPoints.length + 1;
            data.forEach(element => dataPoints.push(parseInt(element[1])));
            chart.update();
        })
        };
            setInterval(updateGraph,1000);
    }
    
    graphOne();
    







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
                borderColor: "yellow",
            }]
        }
    })
}
graphique2();

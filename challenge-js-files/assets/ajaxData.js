Chart.defaults.global.defaultFontFamily = 'lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = 'black';
let graphOne = () => {
    let canv = document.createElement("canvas");
    canv.setAttribute('id', 'canvas');
    canv.setAttribute("height", "300");
    canv.setAttribute("width", "600");
    document.getElementById("firstHeading").appendChild(canv);

    let canvas = document.getElementById('canvas').getContext('2d');
    let dataPoints = [];
    let label = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let i = 9;
    let chart = new Chart(canvas, {
        type: 'line',//bar, horizontalBar, pie, line , doughnut , radar ,polarArea
        data: {
            labels: label,
            datasets: [{
                label: ["Crime Statistics"],
                borderColor: "red",
                data: dataPoints,
            }],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'

        }
    })
    // Update and ajax
    function updateGraph() {
        i++;
        label.push(i);
        fetch('https://canvasjs.com/services/data/datapoints.php')
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                dataPoints.length + 1;
                data.forEach(element => dataPoints.push(parseInt(element[1])));
                chart.update();
            })
    };
    setInterval(updateGraph, 1000);
}

graphOne();
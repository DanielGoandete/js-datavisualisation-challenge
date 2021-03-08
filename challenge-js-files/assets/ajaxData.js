Chart.defaults.global.defaultFontSize = 16;
Chart.defaults.global.defaultFontColor = "#000";

let chart1 = () => {
    let canvas1 = document.createElement("canvas");
    canvas1.setAttribute("id", "canvas");
    canvas1.setAttribute("height", "300");
    canvas1.setAttribute("width", "600");
    document.getElementById("firstHeading").appendChild(canvas1);

    let canvas = document.getElementById("canvas").getContext("2d");
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
            .then(response => {
                return response.json()
            })
            .then(data => {
                dataPoints.length + 1;
                data.forEach(element => dataPoints.push(parseInt(element[1])));
                chart.update();
            })
    };
    setInterval(updateGraph, 1000);
}

chart1();
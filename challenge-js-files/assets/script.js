
    let canv = document.createElement("canvas");
    canv.setAttribute('id', 'canvas');
    canv.setAttribute("height", "300");
    canv.setAttribute("width", "600");
    document.getElementById("container").appendChild(canv);

    let canvas = document.getElementById('canvas').getContext('2d');

    Chart.defaults.global.defaultFontFamily ='lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = 'black';

    let  ChartText =  new Chart(canvas, {
        type:'bar', //bar, horizontalBar, pie, line , doughnut , radar ,polarArea
        data:{
            labels:['d','dd','ddd','dddd'],
            datasets:[{
                label:'teste',
                data:[
                    '111111','22222','333333','112121'
                ],
                backgroundColor:[
                    'red','blue','green','yellow'
                ],
                borderWidth:1,
                borderColor:'#777',
                hoverBorderWidth:3,
                hoverBorderColor:'#000'

            }]
        },
        options:{
            title:{
                display:true,
                text:'this is a text',
                fontSize:25
            }
        }
    });
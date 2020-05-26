/*global $, document, LINECHARTEXMPLE*/
$(document).ready(function () {

    'use strict';

    var brandPrimary = 'rgba(51, 179, 90, 1)';

    var LINECHARTEXMPLE   = $('#lineChartExample'),
        PIECHARTEXMPLE    = $('#pieChartExample'),
        BARCHARTEXMPLE    = $('#barChartExample'),
        RADARCHARTEXMPLE  = $('#radarChartExample'),
        POLARCHARTEXMPLE  = $('#polarChartExample');

generateCharts(LINECHARTEXMPLE, ["Fashion","Handphone"]);
function generateCharts(lineChartName, segment){
    $.ajax({
        url: "/dashboard/history-title",
        async: true,
        type: "GET",
        dataType: "json",
        data: { "segment": ["Handphone","Accessories"] },	
        contentType: "application/json"               
    }).done(function (data) {
        var dataset = data.message;
        generateChartDiagram(lineChartName,dataset);
        console.log("data "+data.message);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log("fail");
    });
}

function generateChartDiagram(LINECHARTEXMPLE,dataset){

   var lineChartExample = new Chart(LINECHARTEXMPLE, {
        type: 'line',
        data: {
            labels: dataset[0][1],
            datasets: [
                {
                    label: dataset[0][0],
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(51, 179, 90, 0.38)",
                    borderColor: brandPrimary,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1,
                    pointBorderColor: brandPrimary,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data:  dataset[0][2],
                    spanGaps: false
                },
                {
                    label: dataset[1][0],
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1,
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: dataset[1][2],
                    spanGaps: false
                }
            ]
        }
    });
}
  

});

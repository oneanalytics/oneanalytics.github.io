'use strict';

var brandPrimary = 'rgba(51, 179, 90, 1)';

var LINECHARTEXMPLE   = $('#lineChartExample');
var DEVICECHART = $("#deviceChart");
var GENDERCHART = $("#genderChart");
var OSRCHART = $("#osChart");

function generateLineChart(LINECHARTEXMPLE){
    var lineChartExample = new Chart(LINECHARTEXMPLE, {
        type: 'line',
        data: {
            labels: ["14 May","13 May","12 May", "11 May","10 May","9 May"],
            datasets: [
                {
                    label: "Total Pageview",
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
                    data: [50, 20, 40, 31, 32, 22],
                    spanGaps: false
                }
                
            ]
        }
    });

}

function generatePieChart(PIECHARTEXMPLE, dataset){
    var pieChartExample = new Chart(PIECHARTEXMPLE, {
        type: 'doughnut',
        data: {
            labels: dataset[0],
            datasets: [
                {
                    data: dataset[1],
                    borderWidth: [1, 1, 1],
                    backgroundColor: [
                        brandPrimary,
                        "rgba(75,192,192,1)",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        brandPrimary,
                        "rgba(75,192,192,1)",
                        "#FFCE56"
                    ]
                }]
            }
    });
    

}

var pieChartExample = {
    responsive: true
};

function generateBarChart(BARCHARTEXMPLE){
    var barChartExample = new Chart(BARCHARTEXMPLE, {
    type: 'bar',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Data Set 1",
                backgroundColor: [
                    'rgba(51, 179, 90, 0.6)',
                    'rgba(51, 179, 90, 0.6)',
                    'rgba(51, 179, 90, 0.6)',
                    'rgba(51, 179, 90, 0.6)',
                    'rgba(51, 179, 90, 0.6)',
                    'rgba(51, 179, 90, 0.6)',
                    'rgba(51, 179, 90, 0.6)'
                ],
                borderColor: [
                    'rgba(51, 179, 90, 1)',
                    'rgba(51, 179, 90, 1)',
                    'rgba(51, 179, 90, 1)',
                    'rgba(51, 179, 90, 1)',
                    'rgba(51, 179, 90, 1)',
                    'rgba(51, 179, 90, 1)',
                    'rgba(51, 179, 90, 1)'
                ],
                borderWidth: 1,
                data: [65, 59, 80, 81, 56, 55, 40],
            },
            {
                label: "Data Set 2",
                backgroundColor: [
                    'rgba(203, 203, 203, 0.6)',
                    'rgba(203, 203, 203, 0.6)',
                    'rgba(203, 203, 203, 0.6)',
                    'rgba(203, 203, 203, 0.6)',
                    'rgba(203, 203, 203, 0.6)',
                    'rgba(203, 203, 203, 0.6)',
                    'rgba(203, 203, 203, 0.6)'
                ],
                borderColor: [
                    'rgba(203, 203, 203, 1)',
                    'rgba(203, 203, 203, 1)',
                    'rgba(203, 203, 203, 1)',
                    'rgba(203, 203, 203, 1)',
                    'rgba(203, 203, 203, 1)',
                    'rgba(203, 203, 203, 1)',
                    'rgba(203, 203, 203, 1)'
                ],
                borderWidth: 1,
                data: [35, 40, 60, 47, 88, 27, 30],
            }
        ]
    }
});
}


function generatePolarChart(POLARCHARTEXMPLE){

var polarChartExample = new Chart(POLARCHARTEXMPLE, {
    type: 'polarArea',
    data: {
        datasets: [{
            data: [
                11,
                16,
                7
            ],
            backgroundColor: [
                "rgba(51, 179, 90, 1)",
                "#FF6384",
                "#FFCE56"
            ],
            label: 'My dataset' // for legend
        }],
        labels: [
            "First",
            "Second",
            "Third"
        ]
    }
});
var polarChartExample = {
    responsive: true
};
}



function generatePolarChart(RADARCHARTEXMPLE){

var radarChartExample = new Chart(RADARCHARTEXMPLE, {
    type: 'radar',
    data: {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling"],
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: "rgba(179,181,198,0.2)",
                borderWidth: 2,
                borderColor: "rgba(179,181,198,1)",
                pointBackgroundColor: "rgba(179,181,198,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(179,181,198,1)",
                data: [65, 59, 90, 81, 56, 55]
            },
            {
                label: "My Second dataset",
                backgroundColor: "rgba(51, 179, 90, 0.2)",
                borderWidth: 2,
                borderColor: "rgba(51, 179, 90, 1)",
                pointBackgroundColor: "rgba(51, 179, 90, 1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(51, 179, 90, 1)",
                data: [28, 48, 40, 19, 96, 27]
            }
        ]
    }
});
var radarChartExample = {
    responsive: true
};
}

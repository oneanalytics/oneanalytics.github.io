function getLineChart(element, data, key, label ){
	Morris.Line({
		element: element,
		data: data,
		xkey: 'y',
		ykeys: key,
		labels: label,
		lineColors:['#0aa699'],
	});

}

function donut(element, data){
	Morris.Donut({
	  element: element,
	  data: data,
	  colors:['#60bfb6','#91cdec','#eceff1']
	});
}

function areaChart(element, data, key, label ){
	Morris.Area({
		element: element,
		data: data,
		xkey: 'y',
		ykeys: key,
		labels: label,
		lineColors:['#0090d9'],
		lineWidth:'0',
		 grid:'false',
		fillOpacity:'0.5'
	  });
}


function generateSparkline(element, data){
	var element = "#"+element
	$(element).sparkline([4,3,3,4,5,4,3,2,4,5,6,4,3,5,2,4,6], {
		type: 'line',
		width: '100%',
		height: '200',
		lineColor: '#0aa699',
		fillColor: '#e6f6f5',
		minSpotColor: '#0c948a',
		maxSpotColor: '#78cec7',
		highlightSpotColor: '#78cec7',
		highlightLineColor: '#78cec7',
		spotRadius: 5
	});

}


    var queryString = window.location.search;

    var urlParams = new URLSearchParams(queryString);

    var dashboardId = urlParams.get('dashboardId')
    generateDashboard(dashboardId)

// Geo Chart
google.charts.load('current', {
	'packages':['geochart'],
	'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawGeoChart);

function drawGeoChart() {
	var headerRow = ['Country', 'Search Trend'];
	var dataRows = [["Japan",16], ["Singapore",31], ["Hongkong",89], ["Thailand",8], ["Malaysia",10], ["Japan",14], ["Singapore",27], ["Hongkong",81], ["Thailand",9], ["Malaysia",11], ["Japan",14], ["Singapore",27], ["Hongkong",90], ["Thailand",10], ["Malaysia",10], ["Japan",17], ["Singapore",29], ["Hongkong",97], ["Thailand",9], ["Malaysia",11], ["Japan",16], ["Singapore",25], ["Hongkong",90], ["Thailand",9], ["Malaysia",10], ["Japan",17], ["Singapore",27], ["Hongkong",87], ["Thailand",9], ["Malaysia",11], ["Japan",16], ["Singapore",28], ["Hongkong",95], ["Thailand",9], ["Malaysia",9], ["Japan",11], ["Singapore",25], ["Hongkong",89], ["Thailand",7], ["Malaysia",10], ["Japan",13], ["Singapore",25], ["Hongkong",87], ["Thailand",9], ["Malaysia",10], ["Japan",14], ["Singapore",25], ["Hongkong",88], ["Thailand",9], ["Malaysia",10], ["Japan",15], ["Singapore",33], ["Hongkong",91], ["Thailand",9], ["Malaysia",9], ["Japan",21], ["Singapore",36], ["Hongkong",100], ["Thailand",12], ["Malaysia",13], ["Japan",17], ["Singapore",32], ["Hongkong",85], ["Thailand",12], ["Malaysia",11], ["Japan",15], ["Singapore",31], ["Hongkong",91], ["Thailand",10], ["Malaysia",11], ["Japan",16], ["Singapore",29], ["Hongkong",89], ["Thailand",18], ["Malaysia",15], ["Japan",14], ["Singapore",28], ["Hongkong",84], ["Thailand",13], ["Malaysia",11], ["Japan",18], ["Singapore",25], ["Hongkong",84], ["Thailand",10], ["Malaysia",10], ["Japan",16], ["Singapore",23], ["Hongkong",83], ["Thailand",10], ["Malaysia",10], ["Japan",14], ["Singapore",26], ["Hongkong",83], ["Thailand",11], ["Malaysia",11], ["Japan",15], ["Singapore",27], ["Hongkong",80], ["Thailand",18], ["Malaysia",18], ["Japan",14], ["Singapore",28], ["Hongkong",88], ["Thailand",23], ["Malaysia",22], ["Japan",18], ["Singapore",26], ["Hongkong",83], ["Thailand",10], ["Malaysia",10], ["Japan",15], ["Singapore",29], ["Hongkong",79], ["Thailand",12], ["Malaysia",11], ["Japan",16], ["Singapore",30], ["Hongkong",84], ["Thailand",15], ["Malaysia",14], ["Japan",14], ["Singapore",26], ["Hongkong",82], ["Thailand",10], ["Malaysia",10], ["Japan",14], ["Singapore",26], ["Hongkong",87], ["Thailand",11], ["Malaysia",10], ["Japan",15], ["Singapore",23], ["Hongkong",84], ["Thailand",11], ["Malaysia",10], ["Japan",15], ["Singapore",26], ["Hongkong",81], ["Thailand",11], ["Malaysia",10], ["Japan",15], ["Singapore",26], ["Hongkong",87], ["Thailand",9], ["Malaysia",11], ["Japan",15], ["Singapore",26], ["Hongkong",82], ["Thailand",10], ["Malaysia",9], ["Japan",16], ["Singapore",29], ["Hongkong",82], ["Thailand",10], ["Malaysia",11], ["Japan",15], ["Singapore",30], ["Hongkong",80], ["Thailand",12], ["Malaysia",13], ["Japan",17], ["Singapore",27], ["Hongkong",78], ["Thailand",10], ["Malaysia",10], ["Japan",19], ["Singapore",31], ["Hongkong",85], ["Thailand",11], ["Malaysia",12], ["Japan",19], ["Singapore",30], ["Hongkong",75], ["Thailand",10], ["Malaysia",11], ["Japan",19], ["Singapore",28], ["Hongkong",78], ["Thailand",11], ["Malaysia",12], ["Japan",17], ["Singapore",30], ["Hongkong",84], ["Thailand",11], ["Malaysia",12], ["Japan",18], ["Singapore",30], ["Hongkong",84], ["Thailand",12], ["Malaysia",13], ["Japan",17], ["Singapore",34], ["Hongkong",80], ["Thailand",14], ["Malaysia",10], ["Japan",17], ["Singapore",29], ["Hongkong",74], ["Thailand",13], ["Malaysia",10], ["Japan",19], ["Singapore",33], ["Hongkong",78], ["Thailand",12], ["Malaysia",11], ["Japan",18], ["Singapore",27], ["Hongkong",74], ["Thailand",14], ["Malaysia",11], ["Japan",14], ["Singapore",27], ["Hongkong",76], ["Thailand",12], ["Malaysia",11], ["Japan",16], ["Singapore",30], ["Hongkong",79], ["Thailand",10], ["Malaysia",11], ["Japan",15], ["Singapore",26], ["Hongkong",76], ["Thailand",11], ["Malaysia",11], ["Japan",18], ["Singapore",28], ["Hongkong",76], ["Thailand",12], ["Malaysia",9], ["Japan",18], ["Singapore",31], ["Hongkong",78], ["Thailand",13], ["Malaysia",9], ["Japan",17], ["Singapore",27], ["Hongkong",75], ["Thailand",11], ["Malaysia",10], ["Japan",18], ["Singapore",30], ["Hongkong",76], ["Thailand",12], ["Malaysia",12], ["Japan",17], ["Singapore",28], ["Hongkong",77], ["Thailand",10], ["Malaysia",11], ["Japan",17], ["Singapore",26], ["Hongkong",79], ["Thailand",13], ["Malaysia",11], ["Japan",18], ["Singapore",27], ["Hongkong",83], ["Thailand",13], ["Malaysia",11]];
	
	var data = [];
	var rowIdx = 0;
	for (var i = 0; i < 52; i++) {
		var rowData = [];
		rowData.push(headerRow);
		for (var j = 0; j < 5; j++) {
			rowData.push(dataRows[rowIdx]);
			rowIdx++;
		}
		data[i] = google.visualization.arrayToDataTable(rowData);
	}

	var current = 0;
	var chart = new google.visualization.GeoChart(document.getElementById('geo-chart'));
	var options = {
		region: '142',
		displayMode: 'markers',
		animation: {
			duration: 1000,
			easing: 'out',
		}
	};
	var dateSlider = document.getElementById('idxSlider');
	chart.draw(data[current], options);
    
    dateSlider.oninput = function() {
		current = this.value;
		chart.draw(data[current], options);
	}
}


// Line Chart
google.charts.load('current', {'packages':['corechart', 'line']});
google.charts.setOnLoadCallback(drawOverallLineChartHK);

google.charts.load('current', {'packages':['corechart', 'line']});
google.charts.setOnLoadCallback(drawLineChartHK);

$(window).load(function () {
	$('select[name=selector]').change(function(){
		if ($(this).val() == 'HK') {
			google.charts.setOnLoadCallback(drawLineChartHK);
			google.charts.setOnLoadCallback(drawOverallLineChartHK);
	    } else if ($(this).val() == 'JP') {
	    	google.charts.setOnLoadCallback(drawLineChartJP);
	    	google.charts.setOnLoadCallback(drawOverallLineChartJP);
	    } else if ($(this).val() == 'MY') {
	    	google.charts.setOnLoadCallback(drawLineChartMY);
	    	google.charts.setOnLoadCallback(drawOverallLineChartMY);
	    } else if ($(this).val() == 'SG') {
	    	google.charts.setOnLoadCallback(drawLineChartSG);
	    	google.charts.setOnLoadCallback(drawOverallLineChartSG);
	    } else if ($(this).val() == 'TH') {
	    	google.charts.setOnLoadCallback(drawLineChartTH);
	    	google.charts.setOnLoadCallback(drawOverallLineChartTH);
	    }
	});
});

function drawOverallLineChartTH() {
	var query = new google.visualization.Query(
		'https://docs.google.com/spreadsheets/d/1YG9R5KGA4CBqGI7Uv69fqjiGO1t_VtYNMOG6naZNUsM/gviz/tq?sheet=AllThailand&headers=1&tq?range=A:F');

	query.send(function(response) {
		if (response.isError()) {
			alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
			return;
		}

		var data = response.getDataTable();
		var chart = new google.visualization.LineChart(document.getElementById('overall-linechart'));
		var options = {
			legend: {
				position: 'top',
				alignment: 'center'
			},
			hAxis: {
				title: 'Week'
			},
			vAxis: {
				title: 'Search Trend'
			}

			// lineWidth: 10
		};

		chart.draw(data, options);
	});
}

function drawOverallLineChartHK() {
	var query = new google.visualization.Query(
		// Hong Kong
		'https://docs.google.com/spreadsheets/d/19CBoYr-TuikOVTLTM9TpIR0-UMI04cs5ggZJwpf7DG4/gviz/tq?sheet=AllHongkong&headers=1&tq?range=A:F');

	query.send(function(response) {
		if (response.isError()) {
			alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
			return;
		}

		var data = response.getDataTable();
		var chart = new google.visualization.LineChart(document.getElementById('overall-linechart'));
		var options = {
			legend: {
				position: 'top',
				alignment: 'center'
			},
			hAxis: {
				title: 'Week'
			},
			vAxis: {
				title: 'Search Trend'
			},
			focusTarget: 'category'

			// lineWidth: 10
		};

		chart.draw(data, options);
	});
}

function drawOverallLineChartJP() {
	var query = new google.visualization.Query(
		// Japan
		'https://docs.google.com/spreadsheets/d/1soezodPX4_EUsa3yg9wW5EoP090io53a2W7_p6OPBwo/gviz/tq?sheet=AllJapan&headers=1&tq?range=A:F');

	query.send(function(response) {
		if (response.isError()) {
			alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
			return;
		}

		var data = response.getDataTable();
		var chart = new google.visualization.LineChart(document.getElementById('overall-linechart'));
		var options = {
			legend: {
				position: 'top',
				alignment: 'center'
			},
			hAxis: {
				title: 'Week'
			},
			vAxis: {
				title: 'Search Trend'
			}

			// lineWidth: 10
		};

		chart.draw(data, options);
	});
}

function drawOverallLineChartMY() {
	var query = new google.visualization.Query(
		// Malaysia
		'https://docs.google.com/spreadsheets/d/1RYinAHvRbd4UWn2RjUHpIMootzs_0qf3SGMJoY-CEdo/gviz/tq?sheet=AllMalaysia&headers=1&tq?range=A:F');

	query.send(function(response) {
		if (response.isError()) {
			alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
			return;
		}

		var data = response.getDataTable();
		var chart = new google.visualization.LineChart(document.getElementById('overall-linechart'));
		var options = {
			legend: {
				position: 'top',
				alignment: 'center'
			},
			hAxis: {
				title: 'Week'
			},
			vAxis: {
				title: 'Search Trend'
			}

			// lineWidth: 10
		};

		chart.draw(data, options);
	});
}

function drawOverallLineChartSG() {
	var query = new google.visualization.Query(
		// Singapore
		'https://docs.google.com/spreadsheets/d/1V1zA9Lti89c2hAQsHiLWRZ_IyoxqWQ9pSan86-Ej9Nw/gviz/tq?sheet=AllSingapore&headers=1&tq?range=A:F');

	query.send(function(response) {
		if (response.isError()) {
			alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
			return;
		}

		var data = response.getDataTable();
		var chart = new google.visualization.LineChart(document.getElementById('overall-linechart'));
		var options = {
			legend: {
				position: 'top',
				alignment: 'center'
			},
			hAxis: {
				title: 'Week'
			},
			vAxis: {
				title: 'Search Trend'
			}

			// lineWidth: 10
		};

		chart.draw(data, options);
	});
}

function drawLineChartHK() {
	// console.log('hongkong');
	var queryString = encodeURIComponent('SELECT A, B');
	
	var hk_places = ['hongkong-disneyland', 'madame-tussauds', 'lantau-island', 'ocean-park', 'tsim-sha-tsui'];
	
	for (var idx = 0; idx < 5; idx++) {
		var queryHK = new google.visualization.Query(
			'https://docs.google.com/spreadsheets/d/1ABMC_UdmPd-mKMRAU3TaroXuEG0L5532Y3ZNGVYX1Qw/gviz/tq?sheet=' + hk_places[idx] + '&headers=1&tq=' +
			queryString);
	
		sendQuery(queryHK, hk_places[idx]);
	}
}

function drawLineChartJP() {

	// console.log('jap');
	var queryString = encodeURIComponent('SELECT A, B');
	
	var jp_places = ['arashiyama', 'mount-fuji', 'odaiba', 'tokyo-disneyland', 'universal-studios-jp'];
	
	for (var idx = 0; idx < 5; idx++) {
		var queryJP = new google.visualization.Query(
			'https://docs.google.com/spreadsheets/d/1aym-PxZelUmjotpCmEkE37bf5JQ8sXqj5WRtqbyqvpU/gviz/tq?sheet=' + jp_places[idx] + '&headers=1&tq=' +
			queryString);

		sendQuery(queryJP, jp_places[idx]);
	}
}

function drawLineChartMY() {

	// console.log('may');
	var queryString = encodeURIComponent('SELECT A, B');
	
	var my_places = ['batu-caves', 'legoland', 'petronas', 'penang-hill', 'sunway-lagoon'];
	
	for (var idx = 0; idx < 5; idx++) {
		var queryMY = new google.visualization.Query(
			'https://docs.google.com/spreadsheets/d/1nrYRMNXzjougp19mJVQldJHL5IwvMIaS3YzcojzLT_o/gviz/tq?sheet=' + my_places[idx] + '&headers=1&tq=' +
			queryString);

		sendQuery(queryMY, my_places[idx]);
	}
}

function drawLineChartSG() {

	// console.log('sig');
	var queryString = encodeURIComponent('SELECT A, B');
	
	var sg_places = ['universal-studios-sg', 'merlion', 'bugis', 'gardens-by-the-bay', 'marina-bay-sands'];
	
	for (var idx = 0; idx < 5; idx++) {
		var querySG = new google.visualization.Query(
			'https://docs.google.com/spreadsheets/d/1nJ1_wqbHih5lEEsWz_fQv6xla937ECoSmerisSQuBe4/gviz/tq?sheet=' + sg_places[idx] + '&headers=1&tq=' +
			queryString);
		
		sendQuery(querySG, sg_places[idx]);
	}
}

function drawLineChartTH() {

	// console.log('thai');
	var queryString = encodeURIComponent('SELECT A, B');
	
	var th_places = ['grand-palace', 'khaosan', 'khao-yai', 'mbk-center', 'phi-phi'];
	
	for (var idx = 0; idx < 5; idx++) {
		var queryTH = new google.visualization.Query(
			'https://docs.google.com/spreadsheets/d/10GzDsBs59YP0ZKZXQYimAr3b43sPh9dpqg6S-kJnd3c/gviz/tq?sheet=' + th_places[idx] + '&headers=1&tq=' +
			queryString);
		
		sendQuery(queryTH, th_places[idx]);
	}
}







function sendQuery(query, place) {
	query.send(function(response) {
		if (response.isError()) {
			alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
			return;
		}

		var id = place + '-chart';
		var data = response.getDataTable();
		var chart = new google.visualization.LineChart(document.getElementById(id));
		var options = {
			// 'width':1100,
			// 'height':140,
			legend: {
				position :'none'
			},
			hAxis: {
				title: 'Week'
			},
			vAxis: {
				title: 'Search Trend'
			}
		};

		chart.draw(data, options);
	});
}
google.charts.load('current', {'packages':['corechart', 'line']});
google.charts.setOnLoadCallback(drawOverallLineChart);

function drawOverallLineChart() {
	var query = new google.visualization.Query(
		// Hong Kong
//		'https://docs.google.com/spreadsheets/d/19CBoYr-TuikOVTLTM9TpIR0-UMI04cs5ggZJwpf7DG4/gviz/tq?sheet=AllHongkong&headers=1&tq?range=A:F');
		// Japan
//		'https://docs.google.com/spreadsheets/d/1soezodPX4_EUsa3yg9wW5EoP090io53a2W7_p6OPBwo/gviz/tq?sheet=AllJapan&headers=1&tq?range=A:F');
		// Malaysia
//		'https://docs.google.com/spreadsheets/d/1RYinAHvRbd4UWn2RjUHpIMootzs_0qf3SGMJoY-CEdo/gviz/tq?sheet=AllMalaysia&headers=1&tq?range=A:F');
		// Singapore
//		'https://docs.google.com/spreadsheets/d/1V1zA9Lti89c2hAQsHiLWRZ_IyoxqWQ9pSan86-Ej9Nw/gviz/tq?sheet=AllSingapore&headers=1&tq?range=A:F');
		// Thailand
		'https://docs.google.com/spreadsheets/d/1YG9R5KGA4CBqGI7Uv69fqjiGO1t_VtYNMOG6naZNUsM/gviz/tq?sheet=AllThailand&headers=1&tq?range=A:F');

	query.send(function(response) {
		if (response.isError()) {
			alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
			return;
		}

		var data = response.getDataTable();
		var chart = new google.visualization.LineChart(document.getElementById('linechart_material'));
		var options = {
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


google.charts.load('current', {'packages':['corechart', 'line']});
google.charts.setOnLoadCallback(drawLineChartHK);

$(window).load(function () {
	$('select[name=selector]').change(function(){
		if ($(this).val() == 'HK') {
			google.charts.setOnLoadCallback(drawLineChartHK);
	    } else if ($(this).val() == 'JP') {
	    	google.charts.setOnLoadCallback(drawLineChartJP);
	    } else if ($(this).val() == 'MY') {
	    	google.charts.setOnLoadCallback(drawLineChartMY);
	    } else if ($(this).val() == 'SG') {
	    	google.charts.setOnLoadCallback(drawLineChartSG);
	    } else if ($(this).val() == 'TH') {
	    	google.charts.setOnLoadCallback(drawLineChartTH);
	    }
	});
});

function drawLineChartHK() {
	console.log('hongkong');
	var queryString = encodeURIComponent('SELECT A, B');
	
	var hk_places = ['hongkong-disneyland', 'madame-tussauds', 'lantau-island', 'ocean-park', 'tsim-sha-tsui'];
	
	for (idx = 0; idx < 5; idx++) {
		var queryHK = new google.visualization.Query(
			'https://docs.google.com/spreadsheets/d/1ABMC_UdmPd-mKMRAU3TaroXuEG0L5532Y3ZNGVYX1Qw/gviz/tq?sheet=' + hk_places[idx] + '&headers=1&tq=' +
			queryString);
	
		sendQuery(queryHK, hk_places[idx]);
	}
}

function drawLineChartJP() {

	console.log('jap');
	var queryString = encodeURIComponent('SELECT A, B');
	
	var jp_places = ['arashiyama', 'mount-fuji', 'odaiba', 'tokyo-disneyland', 'universal-studios-jp'];
	
	for (idx = 0; idx < 5; idx++) {
		var queryJP = new google.visualization.Query(
			'https://docs.google.com/spreadsheets/d/1aym-PxZelUmjotpCmEkE37bf5JQ8sXqj5WRtqbyqvpU/gviz/tq?sheet=' + jp_places[idx] + '&headers=1&tq=' +
			queryString);

		sendQuery(queryJP, jp_places[idx]);
	}
}

function drawLineChartMY() {

	console.log('may');
	var queryString = encodeURIComponent('SELECT A, B');
	
	var my_places = ['batu-caves', 'legoland', 'petronas', 'penang-hill', 'sunway-lagoon'];
	
	for (idx = 0; idx < 5; idx++) {
		var queryMY = new google.visualization.Query(
			'https://docs.google.com/spreadsheets/d/1nrYRMNXzjougp19mJVQldJHL5IwvMIaS3YzcojzLT_o/gviz/tq?sheet=' + my_places[idx] + '&headers=1&tq=' +
			queryString);

		sendQuery(queryMY, my_places[idx]);
	}
}

function drawLineChartSG() {

	console.log('sig');
	var queryString = encodeURIComponent('SELECT A, B');
	
	var sg_places = ['universal-studios-sg', 'merlion', 'bugis', 'gardens-by-the-bay', 'marina-bay-sands'];
	
	for (idx = 0; idx < 5; idx++) {
		var querySG = new google.visualization.Query(
			'https://docs.google.com/spreadsheets/d/1nJ1_wqbHih5lEEsWz_fQv6xla937ECoSmerisSQuBe4/gviz/tq?sheet=' + sg_places[idx] + '&headers=1&tq=' +
			queryString);
		
		sendQuery(querySG, sg_places[idx]);
	}
}

function drawLineChartTH() {

	console.log('thai');
	var queryString = encodeURIComponent('SELECT A, B');
	
	var th_places = ['grand-palace', 'khaosan', 'khao-yai', 'mbk-center', 'phi-phi'];
	
	for (idx = 0; idx < 5; idx++) {
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
google.charts.load('current', {'packages':['corechart', 'line']});
google.charts.setOnLoadCallback(drawLineChart);

function drawLineChart() {
	var queryString = encodeURIComponent('SELECT A, B');
	
	var japan_places = ['arashiyama', 'mount-fuji', 'odaiba', 'tokyo-disneyland', 'universal-studio'];
	var hongkong_places = ['hongkong-disneyland', 'madame-tussauds', 'lantau-island', 'ocean-park', 'tsim-sha-tsui'];
	var malaysia_places = ['batu-caves', 'legoland', 'petronas', 'penang-hill', 'sunway-lagoon'];
	var thailand_places = ['grand-palace', 'khaosan', 'khao-yai', 'mbk-center', 'phi-phi'];
	
	for (idx = 0; idx < 5; idx++) {
		console.log(japan_places[idx]);
		var query = new google.visualization.Query(
//			'https://docs.google.com/spreadsheets/d/1BdO-HgRlPt8T7G9MyI45GBi1OVW9WwZJu4ACcbFRqqU/gviz/tq?sheet=' + hongkong_places[idx] + '&headers=1&tq=' +
//			'https://docs.google.com/spreadsheets/d/1zvysmjhqI8NEAOpPKx1aUYSNskLC5XLY6DNgx2KoOzo/gviz/tq?sheet=' + japan_places[idx] + '&headers=1&tq=' +
//			'https://docs.google.com/spreadsheets/d/1ESwKaPjXZTmlZwr16IYknCWlvaGeOWDdCpvb0FQYXGI/gviz/tq?sheet=' + malaysia_places[idx] + '&headers=1&tq=' +
			'https://docs.google.com/spreadsheets/d/1hLFuFP8QU5YsB1MiqcIDcd6SGbW-Of4fznbJSiuNAWQ/gviz/tq?sheet=' + thailand_places[idx] + '&headers=1&tq=' +
			queryString);
//		sendQuery(query, hongkong_places[idx]);
//		sendQuery(query, japan_places[idx]);
//		sendQuery(query, malaysia_places[idx]);
		sendQuery(query, thailand_places[idx]);
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
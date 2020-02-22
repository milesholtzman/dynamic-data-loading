// from data.js
var tableData = data;

console.log(data);

var table = d3.select('tbody');

function buildTable(data) {
	table.html('')
	data.forEach((tableRow) => {
		var row = table.append('tr');
		Object.values(tableRow).forEach((val) => {
			var cell = row.append('td');
			cell.text(val);
		});

	});
};

function handleClick(){
	d3.eventpreventDefault();
	var date = d3.select('#datatime').property('value');
	var filterData = tableData
	if (date) {
		filterData = filterData.filter((row) => row.datetime === date);
	}
	buildTable(filterData);
};

d3.selectAll('#filter-btn').on('click', handleClick);
buildTable(tableData);
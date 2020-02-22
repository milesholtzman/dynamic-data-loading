// from data.js
var tableData = data;

console.log(data);

var table = d3.select('tbody');

var button = d3.select('filter-btn')

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
	d3.event.preventDefault();
	var input = d3.select("#datetime").property("value");
    if (input) {
    filterData = tableData.filter((row) => row.date === input);
    }
    BuildTable(filterData);
    console.log(input);
};

button.on('click', handleClick);
buildTable(tableData);
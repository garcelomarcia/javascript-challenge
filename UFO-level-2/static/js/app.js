// from data.js
var tableData = data;

// YOUR CODE HERE!

// Select the filter form

var filter = datetime;
filter = d3.selectAll("li").on("click",selectFilter)



function selectFilter(){
    filter = d3.select(this).text();
    d3.selectAll(".panel-heading").text(`Filter Search by: ${filter}`)
    d3.selectAll(".panel-heading").attr("id", filter);
    console.log(filter)
  };



// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select(".filter list-group-item");
// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);
d3_event.stopPropagation();
// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    
    filter = d3.selectAll(".panel-heading").attr("id");
  
    console.log(inputValue);
    console.log(tableData);
    console.log(filter);

  if (filter = datetime) {var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);}
  else if (filter = city) {var filteredData = tableData.filter(ufo => ufo.city === inputValue);}
  else if (filter = state) {var filteredData = tableData.filter(ufo => ufo.state === inputValue);}
  else if (filter = shape) {var filteredData = tableData.filter(ufo => ufo.shape === inputValue);}
  else {var filteredData = tableData.filter(ufo => ufo.duration === inputValue);}

  
    console.log(filteredData);

    var tbody = d3.select("tbody");

    tbody.html("");

    filteredData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });

  };
selectFilter();
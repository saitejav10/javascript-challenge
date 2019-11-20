// YOUR CODE HERE!
// Define all variables
var tbody = d3.select("tbody");
var inputElement1 = d3.select("#datetime");
var button = d3.select("#filter-btn");

var ufoData = (data) => {
    
    data.forEach((ufo_sightings) =>{
        var row = tbody.append("tr");

        Object.entries(ufo_sightings).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    })
}

// Display or print the table on the site
ufoData(data);

// Complete the click handler for the form
button.on("click", () => {
  // Prevent the page from refreshing  
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputDate = inputElement1.property("value").trim();

  // Filter the data by date
  var filteredDate = data.filter(data => data.datetime === inputDate);
  console.log(filteredDate)

  // Add filtered sighting to table
    tbody.html("");

    let response = {
    filteredDate
    }
        if (response.filteredDate.length !== 0) {
            ufoData(filteredDate);
        }
        else {
        tbody.append("tr").append("td").text("No Information!"); 
        }
})

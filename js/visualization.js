// Immediately Invoked Function Expression to limit access to our 

// variables and prevent race conditions
((() => {

  // Load the data from a json file (you can make these using
  // JSON.stringify(YOUR_OBJECT), just remove the surrounding "")
  d3.json("data/GermanyLander.json", (data) => {

    // General event type for selections, used by d3-dispatch
    // https://github.com/d3/d3-dispatch
    const dispatchString = "selectionUpdated";

    // Create a line chart given x and y attributes, labels, offsets; 
    // a dispatcher (d3-dispatch) for selection events; 
    // a div id selector to put our svg in; and the data to use.
    let lcYearPoverty = linechart()
      .x(d => d.States)
      .xLabel("States")
      .y(d => d.Population)
      .yLabel("Population")
      .yLabelOffset(40)
      .selectionDispatcher(d3.dispatch(dispatchString))
      ("#linechart", data);

    // Create a scatterplot given x and y attributes, labels, offsets; 
    // a dispatcher (d3-dispatch) for selection events; 
    // a div id selector to put our svg in; and the data to use.

    updateScatterPlot(1);

    // Create a table given the following: 
    // a dispatcher (d3-dispatch) for selection events; 
    // a div id selector to put our table in; and the data to use.
    let tableData = table()
      .selectionDispatcher(d3.dispatch(dispatchString))
      ("#table", data);


    // When the line chart selection is updated via brushing, 
    // tell the scatterplot to update it's selection (linking)
    lcYearPoverty.selectionDispatcher().on(dispatchString, function(selectedData) {
      spUnemployMurder.updateSelection(selectedData);
      tableData.updateSelection(selectedData);
      // ADD CODE TO HAVE TABLE UPDATE ITS SELECTION AS WELL
    });

    // When the scatterplot selection is updated via brushing, 
    // tell the line chart to update it's selection (linking)
    spUnemployMurder.selectionDispatcher().on(dispatchString, function(selectedData) {
      lcYearPoverty.updateSelection(selectedData);
      tableData.updateSelection(selectedData);
      // ADD CODE TO HAVE TABLE UPDATE ITS SELECTION AS WELL
    });

    tableData.selectionDispatcher().on(dispatchString, function(selectedData) {
      lcYearPoverty.updateSelection(selectedData);
      spUnemployMurder.updateSelection(selectedData);
    });

    // Disable text selection for the entire table and its elements
    document.querySelectorAll("table, th, td").forEach(function(element) {
      element.addEventListener("selectstart", function(e) {
        e.preventDefault();
        return false;
      });
    });

    function updateScatterPlot(a) {
      // Remove the old scatterplot
      d3.select("#scatterplot").selectAll("*").remove();
    
      // Define the x and y accessors based on the input
      let xAccessor, xLabel;
      if (a === 1) {
        xAccessor = d => d.PatientInHospital;
        xLabel = "Patients In Hospital";
      } else if (a === 2) {
        xAccessor = d => d.States;
        xLabel = "States";
      }
      let yAccessor = d => d.Population;
      let yLabel = "Population";
    
      // Create the new scatterplot
      spUnemployMurder = scatterplot()
        .x(xAccessor)
        .xLabel(xLabel)
        .y(yAccessor)
        .yLabel(yLabel)
        .yLabelOffset(150)
        .selectionDispatcher(d3.dispatch(dispatchString))
        ("#scatterplot", data);
    }

    // Select all buttons with the common class
d3.selectAll(".dataset-button").on("click", function() {
  // Get the ID of the clicked button
  let buttonId = d3.select(this).attr("id");

  // Determine the dataset to load based on the button ID
  let dataset;
  if (buttonId === "button1") {
    updateScatterPlot(1);
  } else if (buttonId === "button2") {
    updateScatterPlot(2);
  } 
});

    
    // When the table is updated via brushing, tell the line chart and scatterplot
    // YOUR CODE HERE
  });


var detailsBox = document.getElementById('details-box');


document.addEventListener('mouseover', function (e) {
  if (e.target.tagName == 'path') {
    var content = e.target.dataset.name;
    detailsBox.innerHTML = content;
    detailsBox.style.opacity = "100%";
  }
  else {
    detailsBox.style.opacity = "0%";
  }
});

window.onmousemove = function (e) {
  var x = e.clientX,
      y = e.clientY;
  detailsBox.style.top = (y + 20) + 'px';
  detailsBox.style.left = (x) + 'px';
};

}))();
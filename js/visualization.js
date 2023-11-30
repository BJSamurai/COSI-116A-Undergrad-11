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
    let spUnemployMurder = scatterplot()
      .x(d => d.PatientInHospital)
      .xLabel("Patients In Hospital")
      .y(d => d.Population)
      .yLabel("Population")
      .yLabelOffset(150)
      .selectionDispatcher(d3.dispatch(dispatchString))
      ("#scatterplot", data);

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

    function update(a){
      if(a == 1){
        d3.select("#scatterplot").remove();
        let spUnemployMurder = scatterplot().x(d => d.PatientInHospital)
        .xLabel("Patients In Hospital")
        .y(d => d.Population)
        .yLabel("Population")
        .yLabelOffset(150);
      }
      else if(a == 2){
        d3.select("#scatterplot").remove();
        let spUnemployMurder = scatterplot().x(d => d.States)
        .xLabel("States")
        .y(d => d.Population)
        .yLabel("Population")
        .yLabelOffset(150);
      }
      
    }

    
    // When the table is updated via brushing, tell the line chart and scatterplot
    // YOUR CODE HERE
  });


})());
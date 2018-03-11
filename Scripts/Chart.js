google.charts.load('current', {
       'packages': ['geochart'],
       // Note: you will need to get a mapsApiKey for your project.
       // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
       'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
     });
     google.charts.setOnLoadCallback(drawMarkersMap);
//
//function drawMarkersMap() {
//      var data = google.visualization.arrayToDataTable([
//        ['Region',   'Average of Final Assessment', 'Number of Students'],
//        ['East Anglian',   48,   3000],
//        ['East Midlands',  47,    2095],
//        ['Ireland',    54,  1072],
//        ['London Region',45,2845],
//        ['North Region' ,55,1588],
//        ['North Western Region',44,2548],
//        ['Scotland',53,2934],
//        ['South East Region',50,1875],
//        ['South Region',50, 2737],
//        ['South West Region',48,2154],
//        ['Wales Region',49,1876],
//        ['West Midlands Region', 48,2154],
//        ['Yorkshire Region', 46,1792]  
//        
//      
//      ]);
//
//      var options = {
//        region: 'GB',
//        displayMode: 'markers',
//        colorAxis: {colors: ['red', 'green']}
//      };
//
//      var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
//      chart.draw(data, options);
//    };

//function drawMarkersMap() {
//   $.get("Data/PopulationVSRegion.csv", function(csvString) {
//      // transform the CSV string into a 2-dimensional array
//      var arrayData = $.csv2Array(csvString, {
//      onParseValue: $.csv.hooks.castToScalar
//    });
//      // this new DataTable object holds all the data
//      var data = new google.visualization.arrayToDataTable(arrayData);
//      // CAPACITY - En-route ATFM delay - YY - CHART
//       
//        var options = {
//        region: 'GB',
//        displayMode: 'markers',
//        colorAxis: {colors: ['green', 'blue']}
//      };
//      var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
//      chart.draw(data, options);
//   });
//};
//

  function drawMarkersMap() {
      //var queryString = encodeURIComponent('SELECT A, H, O, Q, R, U LIMIT 5 OFFSET 8');

      var query = new google.visualization.Query(
          'https://docs.google.com/spreadsheets/d/1DGAcRPzHjTM7JVsK0d5qtWwdkPSLl1-pkur4WAmpuvk/gviz/tq?range=A1:C14');
      query.send(handleSampleDataQueryResponse);
    }

    function handleSampleDataQueryResponse(response) {
      if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }
          var options = {
        region: 'GB',
        displayMode: 'markers',
        colorAxis: {colors: ['green', 'blue']}
      };

      var data = response.getDataTable();
      var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
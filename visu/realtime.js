var chartData = [];
var wsUri = "ws://10.11.12.130:8888";
var websocket = null;
var interval = null;

var startDate = 0;
var endDate = 0;

var chart = AmCharts.makeChart( "chartdiv", {
                               "type": "stock",
                               "dataDateFormat": "YYYY-MM-DD JJ:NN:SS:QQQ",
                               "addClassNames": true,
                               "glueToTheEnd": true,
                               "categoryAxesSettings": {
                                    "minPeriod": "ss",
                                    "parseDates": true,
                                    "minorGridEnabled": true
                               },
                               "dataSets": [ {
                                            "color": "#C5FFCB",
                                            "fieldMappings": [ {
                                                              "fromField": "AIRMS",
                                                              "toField": "AIRMS"
                                                              }, {
                                                              "fromField": "BIRMS",
                                                              "toField": "BIRMS"
                                                              }, {
                                                              "fromField": "CIRMS",
                                                              "toField": "CIRMS"
                                                              }, {
                                                              "fromField": "AVRMS",
                                                              "toField": "AVRMS"
                                                              }, {
                                                              "fromField": "BVRMS",
                                                              "toField": "BVRMS"
                                                              }, {
                                                              "fromField": "CVRMS",
                                                              "toField": "CVRMS"
                                                              }, {
                                                              "fromField": "AWATT",
                                                              "toField": "AWATT"
                                                              }, {
                                                              "fromField": "BWATT",
                                                              "toField": "BWATT"
                                                              }, {
                                                              "fromField": "CWATT",
                                                              "toField": "CWATT"
                                                              } ],
                                            "dataProvider": chartData,
                                            "categoryField": "Timestamp",
                                            } ],
                               
                               "panels": [ {
                                          "showCategoryAxis": false,
                                          "fontFamily": "Helvetica Neue",
                                          "fontSize": 10,
                                          "color": "#999",
                                          "title": "Strom RMS",
                                          "percentHeight": 40,
                                          "stockGraphs": [ {
                                                          "id": "g2",
                                                          "lineColor": "#60C21E",
                                                          "title": "L1",
                                                          "valueField": "AIRMS",
                                                          "type": "smoothedLine",
                                                          "lineThickness": 1,
                                                          "useDataSetColors": false,
                                                          "connect": false
                                                          }, {
                                                          "id": "g3",
                                                          "lineColor": "#159E31",
                                                          "title": "L2",
                                                          "valueField": "BIRMS",
                                                          "type": "smoothedLine",
                                                          "lineThickness": 1,
                                                          "useDataSetColors": false,
                                                          "connect": false
                                                          }, {
                                                          "id": "g4",
                                                          "lineColor": "#53DB50",
                                                          "title": "L3",
                                                          "valueField": "CIRMS",
                                                          "type": "smoothedLine",
                                                          "lineThickness": 1,
                                                          "useDataSetColors": false,
                                                          "connect": false
                                                          } ],
                                          "stockLegend": {
                                              //"valueTextRegular": " ",
                                              //"markerType": "none"
                                            },
                                          "valueAxes": [ {
                                                        "title": "Ampere",
                                                        "unit": "A"
                                                        } ],
                                          }, {
                                          "showCategoryAxis": false,
                                          "fontFamily": "Helvetica Neue",
                                          "fontSize": 10,
                                          "color": "#999",
                                          "title": "Spannung RMS",
                                          "percentHeight": 30,
                                          "stockGraphs": [ {
                                                          "id": "g5",
                                                          "lineColor": "#60C21E",
                                                          "title": "L1",
                                                          "valueField": "AVRMS",
                                                          "type": "smoothedLine",
                                                          "lineThickness": 1,
                                                          "useDataSetColors": false,
                                                          "connect": false
                                                          }, {
                                                          "id": "g6",
                                                          "lineColor": "#159E31",
                                                          "title": "L2",
                                                          "valueField": "BVRMS",
                                                          "type": "smoothedLine",
                                                          "lineThickness": 1,
                                                          "useDataSetColors": false,
                                                          "connect": false
                                                          }, {
                                                          "id": "g7",
                                                          "lineColor": "#53DB50",
                                                          "title": "L3",
                                                          "valueField": "CVRMS",
                                                          "type": "smoothedLine",
                                                          "lineThickness": 1,
                                                          "useDataSetColors": false,
                                                          "connect": false
                                                          } ],
                                          "stockLegend": {
                                          //"valueTextRegular": " ",
                                          //"markerType": "none"
                                          },
                                          "valueAxes": [ {
                                                        "title": "Volt",
                                                        "unit": "V"
                                                        } ],
                                          }, {
                                          "fontFamily": "Helvetica Neue",
                                          "fontSize": 10,
                                          "color": "#999",
                                          "title": "Watt",
                                          "percentHeight": 30,
                                          "stockGraphs": [ {
                                                          "valueField": "AWATT",
                                                          "title": "L1",
                                                          "id": "g8",
                                                          "type": "column",
                                                          "cornerRadiusTop": 0,
                                                          "lineColor": "#60C21E",
                                                          "useDataSetColors": false,
                                                          "fillAlphas": 0.2
                                                          }, {
                                                          "valueField": "BWATT",
                                                          "type": "column",
                                                          "title": "L2",
                                                          "id": "g9",
                                                          "cornerRadiusTop": 0,
                                                          "lineColor": "#159E31",
                                                          "useDataSetColors": false,
                                                          "fillAlphas": 0.2
                                                          }, {
                                                          "valueField": "CWATT",
                                                          "title": "L3",
                                                          "id": "g10",
                                                          "type": "column",
                                                          "cornerRadiusTop": 0,
                                                          "lineColor": "#53DB50",
                                                          "useDataSetColors": false,
                                                          "fillAlphas": 0.2
                                                          } ],
                                          
                                          "stockLegend": {
                                              //"valueTextRegular": " ",
                                              //"markerType": "none"
                                          },
                                          "valueAxes": [ {
                                                        "title": "Watt",
                                                        "unit": "W",
                                                        "stackType": "regular"
                                                        } ],
                                          } ],
                               
                               "chartScrollbarSettings": {
                               "fontFamily": "Helvetica Neue",
                               "fontSize": 8,
                               "color": "#424242",
                               "backgroundColor": "#FFFFFF",
                               "graphFillColor": "#A4A4A4",
                               "graphLineColor": "#000000",
                               "selectedBackgroundColor": "#FFFFFF",
                               "selectedGraphFillColor": "#A4A4A4",
                               "graph": "g2",
                               "usePeriod": "hh",
                               "position": "top"                            
			                         },
                               
                               "chartCursorSettings": {
                               "valueBalloonsEnabled": true
                               },
                               "periodSelector": {
                               "fontFamily": "Helvetica Neue",
                               "fontSize": 10,
                               "color": "#999",
                               "position": "top",
                               "dateFormat": "YYYY-MM-DD JJ:NN:SS",
                               "inputFieldWidth": 150,
                               "periods": [ {
                                           "period": "mm",
                                           "count": 1,
                                           "selected": true,
                                           "label": "1 Minute"
                                           }, {
                                           "period": "mm",
                                           "count": 5,
                                           "label": "5 Minuten"
                                           }, {
                                           "period": "mm",
                                           "count": 10,
                                           "label": "10 Minuten"
                                           }
			       		  ]
                               },
                               "panelsSettings": {
                               "usePrefixes": true
                               },
			       "listeners": [{
				       "event": "zoomed",
				       "method": function(e) {
					       startDate= e.chart.startDate;
					       startDate.setSeconds(startDate.getSeconds() + 1);
					       endDate = e.chart.endDate;
				       }
			       }]
} );

initWebSocket();
function initWebSocket() {
    try {
        if (typeof MozWebSocket == 'function')
            WebSocket = MozWebSocket;
        if ( websocket && websocket.readyState == 1 )
            websocket.close();
        websocket = new WebSocket( wsUri );
        websocket.onopen = function (evt) {
            websocket.send( "start" );
            interval = setInterval(refresh , 1000);
        };
        websocket.onclose = function (evt) {
        };
        websocket.onmessage = function (evt) {
            // console.log( "Message received :", evt.data );
            var newData = JSON.parse(evt.data);
	          chartData.push.apply(chartData, newData);
            if (chartData.length > 600) {
                chartData.splice(0, chartData.length - 600);
            }
            chart.validateData(); //call to redraw the chart with new data
	          chart.zoom(startDate, endDate);
        };
        websocket.onerror = function (evt) {
        };
    } catch (exception) {

    }
}
function refresh() {
    	websocket.send( "start" );
}

function stopWebSocket() {
    clearInterval(interval);
    if (websocket)
        websocket.close();
}

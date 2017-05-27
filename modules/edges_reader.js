'use strict'

function edgesReader(allText){

  var edges = [];

  var allTextLines = allText.split(/\r\n|\n/);

  var headers = allTextLines[0].split(',');

  var lines = [];

  var whole_edge_count = allTextLines.length-1;

  for( var i = 0 ; i < whole_edge_count ; i++ ){

    var data = allTextLines[ i + 1 ].split(',');

    if( data.length == headers.length ){

      var edge = {};

      for(var j = 0 ; j < headers.length ; j++){

        if( headers[j] == 'Sender' ){

          edge['id'] = i;
          project.nodes.forEach(function(n){
            if( n['label'] == data[j] ) edge['from'] = n['id'];
          });

        }
        if( headers[j] == 'Receiver' ){
          project.nodes.forEach(function(n){
            if( n['label'] == data[j] ) edge['to'] = n['id'];
          });
        }
      }
      edges.push(edge);
    }
  }
  return edges;
}

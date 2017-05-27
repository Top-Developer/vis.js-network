'use strict'

var typeToColor  = {
  'SR' : '#90d4f7',
  'PR' : '#c497f2',
  'SP' : '#71e096',
  'FP' : '#668de5'
};

var nodeToIndex = {};

function nodesReader(allText){

  var nodes = [];

  var allTextLines = allText.split(/\r\n|\n/);

  var headers = allTextLines[0].split(',');

  var lines = [];

  var whole_node_count = allTextLines.length-1;

  for( var i = 0 ; i < whole_node_count ; i++ ){

    var data = allTextLines[ i + 1 ].split(',');

    if( data.length == headers.length ){

      var node = {};

      for(var j = 0 ; j < headers.length ; j++){

        if( headers[j] == 'Node' ){

          node['id'] = i;
          node['label'] = data[j];
        }
      
      }
      nodeToIndex[ node['id'] ] = i;
      nodes.push(node);
    }
  }
  return nodes;
}

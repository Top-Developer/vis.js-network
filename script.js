'use strict'

var project = {

	nodes : [],
	edges : [],
	layers : [],
	layer_count : -1,
	searchedNodeId : ''
};

$(document).ready(function(){

	$.ajax({
		type : "GET",
		url : "data/Nodes.csv",
		dataType : "text",
		success : function(data){

			project.nodes = nodesReader(data);console.log(project.nodes);

			$.ajax({
				type : "GET",
				url : "data/Edges.csv",
				dataType : "text",
				success : function(data){

					project.edges = edgesReader(data);console.log(project.edges);

          var container = document.getElementById('mynetwork');
          var data = {
            nodes: new vis.DataSet(project.nodes),
            edges: new vis.DataSet(project.edges)
          };
          var options = {

          };

          var network = new vis.Network(container, data, options);
				}
			});
		}
	});
});

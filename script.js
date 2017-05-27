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
					project.layer_count++;
					project.layers.push({
						'nodes': project.nodes,
						'edges': project.edges,
						'inout': -1,
						'theCenterNode': null
					});console.log(project.layers);

					displayNetwork(d3.select('svg#main-svg'), project.nodes, project.edges);
					})
				}
			});
		}
	});
});


// create an array with nodes
var nodes = new vis.DataSet([
  {id: 1, label: 'Node 1'},
  {id: 2, label: 'Node 2'},
  {id: 3, label: 'Node 3'},
  {id: 4, label: 'Node 4'},
  {id: 5, label: 'Node 5'}
]);

// create an array with edges
var edges = new vis.DataSet([
  {from: 1, to: 3},
  {from: 1, to: 2},
  {from: 2, to: 4},
  {from: 2, to: 5},
  {from: 3, to: 3}
]);

// create a network
var container = document.getElementById('mynetwork');
var data = {
  nodes: nodes,
  edges: edges
};
var options = {};
var network = new vis.Network(container, data, options);

(function(){
	'use strict'

	angular.module('Controles').factory('Variables',function() {

	    var Variables = {};
	    var tableName = "";
	    var setVariable = function(value){
	    	Variables.var = value;
	    }

	    var getVariable = function(){
	    	return Variables.var;
	    }

	    var setTableSelected = function(table){
	    	tableName = table
	    }

	    var getTableSelected = function(){
	    	return tableName;
	    }

	    return {
	    	setVariable: setVariable,
	    	getVariable: getVariable,
	    	setTableSelected:setTableSelected,
	    	getTableSelected:getTableSelected
	    };
	});
})();
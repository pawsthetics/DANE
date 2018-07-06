
var math = {

	sum: function(array2) {
		var num = 0;
		for (var i = 0, l = array.length; i < l; i++) num += array[i];
		return num;

//-------------------------------------------------------------

var arr1 = {
 

	mean: function(array) {
		return arr1.sum(array) / array.length;
	},



	variance: function(array) {
		var mean = arr1.mean(array);
		return arr1.mean(array.map(function(num) {
			return Math.pow(num - mean, 2);
		}));
	},



	standardDeviation: function(array) {
		return Math.sqrt(arr1.variance(array));
	}};

//---------------------------------------------------------------

var arr2 = {
 

	mean: function(array) {
		return arr2.sum(array) / array.length;
	},



	variance: function(array) {
		var mean = arr2.mean(array);
		return arr2.mean(array.map(function(num) {
			return Math.pow(num - mean, 2);
		}));
	},



	standardDeviation: function(array) {
		return Math.sqrt(arr2.variance(array));
	}};

//------------------------------------------------------------------

//T-Stat Equation

var tstat = {

	numerator: function(array){
		return meandif = Math.abs(arr1.mean(array) - arr2.mean(array));
	},


	denominator: function(array){
		var sd1 = Math.pow((arr1.standardDeviation(array), 2) / array.length;
		var sd2 = Math.pow((arr2.standardDeviation(array), 2) / array.length;
			return Math.sqrt(sd1 + sd2);
	},


	fraction: function(array){
		return numerator / denominator;
	}};

}}
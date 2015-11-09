var init= function(){
	console.log("init_test");
};
var data="1,2,3,4";
var results_data=[];
Papa.parse(data, {
		complete: function(results) {
			console.log("Finished:", results.data);
			results_data=results.data;
		}
	});

console.log("test");

var lineData2 = [ { "x": 1,   "y": 5},  { "x": 20,  "y": 20},
	                 { "x": 40,  "y": 10}, { "x": 60,  "y": 40},
	                 { "x": 80,  "y": 5},  { "x": 100, "y": 60},
	                 { "x": 120, "y":22},  { "x": 200, "y": 60},
	                 { "x": 250, "y":60},  { "x": 300, "y": 22},
					{ "x": 350, "y":60},  { "x": 400, "y": 0}
	                 ];
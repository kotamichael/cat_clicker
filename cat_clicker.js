$(document).ready(function() {

function catCreate() {


	var catList = [
	{id: "cat1", capture: "#cat1", name: "Harold", src: "/udacity/cat_clicker/pictures/1.jpg", countid: "count1", clicker: "#count1"},
	{id: "cat2", capture: "#cat2", name: "Jerry", src: "/udacity/cat_clicker/pictures/2.jpg", countid: "count2", clicker: "#count2"},
	{id: "cat3", capture: "#cat3", name: "Geribaldi", src: "/udacity/cat_clicker/pictures/3.jpg", countid: "count3", clicker: "#count3"},
	{id: "cat4", capture: "#cat4", name: "Hector", src: "/udacity/cat_clicker/pictures/4.jpg", countid: "count4", clicker: "#count4"},
	{id: "cat5", capture: "#cat5", name: "Fransisco", src: "/udacity/cat_clicker/pictures/5.jpg", countid: "count5", clicker: "#count5"},
	{id: "cat6", capture: "#cat6", name: "Lolipop", src: "/udacity/cat_clicker/pictures/6.jpg", countid: "count6", clicker: "#count6"}
	];

	//function catCreate() {
		for (var i = 0; i < catList.length; i++) {
			$("ol").append('<li style="cursor:pointer" id =' + catList[i].id + '><h3>' +
				catList[i].name + '</h3></li>');

			$('#flex-container').append('<div id=' + catList[i].id + '> \
			\n<h1>' + catList[i].name + '</h1>                   \
			\n<img src=' + catList[i].src + '>                   \
			\n<h3>Current votes:</h3>                            \
			\n<h1 id ="' + catList[i].countid + '">0</h1>        \
			\n</div>\n<hr>');

			$(catList[i].capture).on('click', (function(iCopy) {
				return function() {
					var counter = parseInt($("#count" + (iCopy + 1)).text());
					++counter;
					$("#count" + (iCopy + 1)).text(counter);
				}
			})(i));
		};
};

	catCreate();
});

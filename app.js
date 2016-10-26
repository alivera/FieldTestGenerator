var buildings = [
	"Building 3", "Building 4","Building 5","Building 6","Building 7","Building 8","Building 9",
	"Building 10","Building 11","Building 12","Building 13","Building 14","Building 15","Building 20",
	"Building 21","Building 23","Building 24","Building 25","Building 26","Building 27","Building 28",
	"Building 29","Building 31","Building 32","Building 33","Building 34","Building 35","Building 36",
	"Building 39","Building 41","Building 42","Building 43","Building 44","Building 45","Building 46",
	"Building 47","Building 48","Building 51","Building 54","Building 56","Building 71","Building 75",
	"Building 79","Building 82","Building 83","Building 84","Building 85","Building 9A","Building PS",
	"Building PS1","Building PS2","Building PSA","Building PSB","Building T1","Building T3","Building T4",
	"Building T5","Building T6","Building T7","Building T9"
];

var pickupList = ["pickup1","pickup2","pickup3","pickup4","pickup5","pickup6","pickup7","pickup8","pickup9","pickup10"];
var dropoffList = ["dropoff1","dropoff2","dropoff3","dropoff4","dropoff5","dropoff6","dropoff7","dropoff8","dropoff9","dropoff10"];

function generateTests() {
	//random
	var randomPickup = Math.floor(Math.random() * buildings.length);
	var randomDropoff = Math.floor(Math.random() * buildings.length);
	var randomPickupList = [];
	var randomDropoffList = [];

	//First Row
	randomPickupList[0] = document.getElementById("pickup1").innerHTML= buildings[randomPickup];
	randomDropoffList[0] = document.getElementById("dropoff1").innerHTML= buildings[randomDropoff];

	
	for(var i = 1; i < 10; i++) {
		randomDropoff = Math.floor(Math.random() * buildings.length);
		randomPickupList[i] = document.getElementById(pickupList[i]).innerHTML= randomDropoffList[i-1];
		randomDropoffList[i] = document.getElementById(dropoffList[i]).innerHTML= buildings[randomDropoff];
	}


}
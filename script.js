var outerDiv = document.createElement("div");
outerDiv.id = "outDiv";
outerDiv.style.width = "80%";
outerDiv.style.height = "80%";
document.body.appendChild(outerDiv);

for (var i = 0; i < 2006; i++) {
	var square = document.createElement("div");
    square.className = "inDiv";
    square.style.display = "block";
    square.style.float = "left";
	square.style.width = "15px";
    square.style.height = "15px";
    square.style.border = "1px solid grey";
	square.style.backgroundColor = "white";	
    document.getElementById('outDiv').appendChild(square);
} 

var colors = ["FFF", "#E0D5CA", "#000", "#5C2E00",
"#E0A366", "#FFFFDB", "#FFFF91",  "#FFCC99", "#FF9900", 
"#FF9999", "#FF1919",  "#FF3399", 
"#FF33CC", "#990099", "#B591FF", "#7A00A3", "#7519D1", 
 "#24248F","#6600FF", "#00A3CC", "#00CCFF", 
"#00FFFF", "#00FFCC", "#00CC99", "#246B47"];
var squares = document.querySelectorAll("div.inDiv");
for(var j = 0; j < 32; j++) {
    squares[j].className = "palette";
    squares[j].style.backgroundColor = colors[j];
}

var colPick = document.getElementsByClassName("palette");
for(var k = 0; k < colPick.length; k++) {
	colPick[k].addEventListener("mousedown", function() {
    	var paintbrush = this.style.backgroundColor;
    	var paint = document.getElementsByClassName("inDiv");
		for(var l = 0; l < paint.length; l++) {
			paint[l].addEventListener("mousedown", function() {
    			this.style.backgroundColor = paintbrush;
			});
		}

	});
} 






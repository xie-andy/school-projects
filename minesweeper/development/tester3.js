var height;
var width;
var tablecreated = "false";

function tablecreateform() {
	if(tablecreated == "false") {
		tablecreated = "true";
		var form = document.getElementById("tablecreate");
		var width = form.elements[0].value;
		var height = form.elements[1].value;
		var tablecount = 0;
		var x = document.createElement("TABLE");
		x.setAttribute("id", "myTable");
		document.body.appendChild(x);
		for (i = 0; i < height; i++) {
			var row = document.createElement("TR");
			row.setAttribute("id", "row" + i);
			document.getElementById("myTable").appendChild(row);
			for (b = 0; b < width; b++) {
				console.log(tablecount);
				var z = document.createElement("TD");
				var t = document.createTextNode(i + " " + b);
				z.appendChild(t);
				z.setAttribute("id", "entry" + tablecount);
				z.setAttribute("value", "notbomb")
				document.getElementById("row" + i).appendChild(z);
				document.getElementById("entry" + tablecount).addEventListener("click", function(){ normalClick(this)});
				tablecount = tablecount + 1;
			}
		}
		var bombs = Math.round(tablecount/6);
		console.log("bombs " + bombs);
		bomblocs = [];
		console.log(tablecount);

		for (bombset = 0; bombset < bombs; bombset++) {

			var xy = Math.floor(Math.random() * tablecount);
			console.log(xy);
			var currententry = ("entry" + xy);
			console.log(currententry);
			while (bomblocs.indexOf(xy) != -1){
				var xy = Math.floor((Math.random() * tablecount) + 1);
				var currententry = ("entry" + xy);
				console.log("number repeated");
			}
			console.log("bombset is " + bombset);
			document.getElementById(currententry).className = "bomb";
			document.getElementById(currententry).innerHTML = "bomb";
			console.log("done");
			bomblocs.push(xy);
			for (var notbomb = 0; notbomb <= (tablecount - bomblocs.length); notbomb++) {
				currententry = document.getElementById("entry" + notbomb).className;
				console.log("second part " + currententry);
				if (currententry != "bomb") {
					console.log("Not a bomb");
					document.getElementById("entry" + notbomb).className = "number";
				}
				else {
					console.log("Is a bomb");
				}
				console.log("Finished 1 time");
			}
		}
		console.log("bombloc " + bomblocs);
	}
	else {
		console.log("FALSE")
	}
}

function createtable(width, height){
	console.log(width + " by " + height);
}

function normalClick(a){
	var tdid = a.id;
	var typecheck = document.getElementById(tdid).className;
	if (typecheck == "bomb") {
		bomb();
	}
	else if (typecheck == "number") {
		alert(tdid);
	}
	else {
		alert("Not meant to get here you broke it");
	}
}

function bomb(){
	alert("You clicked on a bomb and you lost!");
	location.reload();
}
function bombcheck() {
	
}





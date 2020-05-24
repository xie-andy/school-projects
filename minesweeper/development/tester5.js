var width;
var height;
var tablecreated = "false";
var gameover = "false";
var typecheck;
var bombnumber = 0;

function normalClick(a){
	var tdid = a.id;
	var typecheck = document.getElementById(tdid).className;
	if (gameover != "true") {
		if (typecheck.indexOf("bomB") != -1) {
			bomb();
		}
		else if (typecheck.indexOf(" notbomb") != -1) {
			bombcheck(tdid);
		}
	}
}

function bomb(){
	document.getElementById("coolguybutton").src = "sadface.png";
	alert("You clicked on a bomb and you lost!");
	gameover = "true";
}

function tablecreateform() {
	if (tablecreated == "false") {
		tablecreated = "true";
		var form = document.getElementById("tablecreate");
		width = form.elements[0].value;
		height = form.elements[1].value;
		var tablecount = 0;
		var x = document.createElement("TABLE");
		x.setAttribute("id", "myTable");
		document.body.appendChild(x);
		//creating rows and tds
		for (i = 0; i < height; i++) {
			var row = document.createElement("TR");
			row.setAttribute("id", "row" + i);
			document.getElementById("myTable").appendChild(row);
			for (b = 0; b < width; b++) {
				var z = document.createElement("TD");
				z.setAttribute("id", "entry" + tablecount);
				z.setAttribute("class", "x:" + b + " y:" + i + " " + b + " " + i);
				document.getElementById("row" + i).appendChild(z);
				document.getElementById("entry" + tablecount).addEventListener("click", function(){ normalClick(this)});
				tablecount = tablecount + 1;
			}
		}
		var bombs = Math.round(tablecount/6);
		var notbombs = tablecount - bombs;
		bomblocs = [];
		//setting bombs
		for (bombset = 0; bombset < bombs; bombset++) {

			var xy = Math.floor(Math.random() * tablecount);
			var currententry = ("entry" + xy);
			while (bomblocs.indexOf(xy) != -1){
				var xy = Math.floor((Math.random() * tablecount) + 1);
				var currententry = ("entry" + xy);
			}
			document.getElementById(currententry).className += " bomB";
			bomblocs.push(xy);

		}
		console.log("tablecount is " + tablecount);
		for (var notbomb = 0; notbomb < tablecount; notbomb++) {
			currententry = document.getElementById("entry" + notbomb).className;
			if (currententry.indexOf("bomb") == -1) {
				document.getElementById("entry" + notbomb).className += " notbomb";
				console.log("Added once");
			}
		}
		var topleft = width-1;
		var botLeft = (width * height) - width;
		var botRight = (width * height) - 1;
		document.getElementById("entry" + 0).className += " topLeft";
		document.getElementById("entry" + topleft).className += " topRight";
		document.getElementById("entry" + botLeft).className += " botLeft";
		document.getElementById("entry" + botRight).className += " botRight";
		for (var topset = 0; topset < (width - 2); topset++) {
			currententry = topset + 1;
			document.getElementById("entry" + currententry).className += " top";
		}
		console.log("botleft is " + botLeft);
		for (var botset = botLeft; botset < (botRight - 1); botset++) {
			currententry = botset + 1;
			document.getElementById("entry" + currententry).className += " bot";
		}
		console.log("botsetted");
		var left = document.getElementsByClassName("x:0");
		console.log(left);
		for (var leftset = 0; leftset < (height -2); leftset++) {
			currententry = leftset + 1;
			left[currententry].className += " left";
		}
		var right = document.getElementsByClassName("x:" + (width - 1));
		console.log(right);
		for (var rightset = 0; rightset < (height - 2); rightset++) {
			currententry = rightset + 1;
			right[currententry].className += " right";
		}
	}
}

var yeet = document.getElementsByClassName("x:-1 y:-1");
console.log(yeet.className);

function bombcheck(tdid) {
	typecheck = document.getElementById(tdid).className;
	bombnumber = 0;
	var getcoord = typecheck.split(" ");
	var y = parseInt(getcoord[3]);
	var x = parseInt(getcoord[2]);
	var x1 = x + 1;
	var y1 = y + 1;
	var xminus1 = x - 1;
	var yminus1 = y - 1;
	var bothminus = document.getElementsByClassName("x:" + xminus1 + " y:" + yminus1);
	var yminus = document.getElementsByClassName("x:" + x + " y:" + yminus1);
	var xplusyminus = document.getElementsByClassName("x:" + x1 + " y:" + yminus1);
	var xminus = document.getElementsByClassName("x:" + xminus1 + " y:" + y);
	var xplus = document.getElementsByClassName("x:" + x1 + " y:" + y);
	var yplusxminus = document.getElementsByClassName("x:" + xminus1 + " y:" + y1);
	var yplus = document.getElementsByClassName("x:" + x + " y:" + y1);
	var bothplus = document.getElementsByClassName("x:" + x1 + " y:" + y1);
	//console.log("bothminus: " + bothminus[0].className + " yminus: " + yminus[0].className + " xplusyminus: " + xplusyminus[0].className + " xminus: " + xminus[0].className + " xplus: " + xplus[0].className + " yplusxminus: " + yplusxminus[0].className + " yplus: " + yplus[0].className + " bothplus: " + bothplus[0].className);
	if (bothminus[0] != undefined) {
		if (bothminus[0].className.indexOf(" bomB") != -1) {
			bombnumber++;
			console.log("yeet");
		}
	}
	if (yminus[0] != undefined) {
		if (yminus[0].className.indexOf(" bomB") != -1) {
			bombnumber++;
			console.log("yeet");
		}
	}
	if (xplusyminus[0] != undefined) {
		if (xplusyminus[0].className.indexOf(" bomB") != -1) {
			bombnumber++;
			console.log("yeet");
		}
	}
	if (xminus[0] != undefined) {
		if (xminus[0].className.indexOf(" bomB") != -1) {
			bombnumber++;
			console.log("yeet");
		}
	}
	if (xplus[0] != undefined) {
		if (xplus[0].className.indexOf(" bomB") != -1) {
			bombnumber++;
			console.log("yeet");
		}
	}
	if (yplusxminus[0] != undefined) {
		if (yplusxminus[0].className.indexOf(" bomB") != -1) {
			bombnumber++;
			console.log("yeet");
		}
	}
	if (yplus[0] != undefined) {
		if (yplus[0].className.indexOf(" bomB") != -1) {
			bombnumber++;
			console.log("yeet");
		}
	}
	if (bothplus[0] != undefined) {
		if (bothplus[0].className.indexOf(" bomB") != -1) {
			bombnumber++;
			console.log("yeet");
		}
	}
	document.getElementById(tdid).innerHTML = bombnumber;
}

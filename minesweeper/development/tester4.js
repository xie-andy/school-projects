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
				var t = document.createTextNode(b + " " + i);
				z.appendChild(t);
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
			document.getElementById(currententry).innerHTML = "bomb";
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

function bombcheck(tdid) {
	typecheck = document.getElementById(tdid).className;
	bombnumber = 0;
	if (typecheck.indexOf(" topLeft") != -1) {
		console.log("topLeft");
		console.log(tdid);
		console.log(typecheck);
		var getcoord = typecheck.split(" ");
		console.log(getcoord[0] + " " + getcoord[1]);
		var y1 = parseInt(getcoord[3])+1;
		var x1 = parseInt(getcoord[2])+1;
		var yplus1 = document.getElementsByClassName("x:0 y:" + y1);
		var xplus1 = document.getElementsByClassName("x:" + x1 + " y:0");
		var plusboth = document.getElementsByClassName("x:" + x1 + " y:" + y1);
		console.log(yplus1[0] + " " + xplus1 + " " + plusboth);
		console.log(yplus1[0].className);
		if (yplus1[0].className.indexOf(" bomB") != -1) {
			bombnumber++;
		}
		if (xplus1[0].className.indexOf(" bomB") != -1) {
			bombnumber++;
		}
		if (plusboth[0].className.indexOf(" bomB") != -1) {
			bombnumber++;
		}
		document.getElementById(tdid).innerHTML = bombnumber;
		console.log("done");
	}
	else if (typecheck.indexOf(" topRight") != -1) {
		getcoord = typecheck.split(" ");
		y1 = parseInt(getcoord[3])+1;
		console.log(y1);
		x1 = parseInt(getcoord[2])-1;
		var xotherone = parseInt(getcoord[2]);
		console.log("x1: " + x1);
		console.log("x1: " + x1);
		console.log(width);
		console.log(y1);
		console.log("x1: " + x1);
		var yplus1 = document.getElementsByClassName("x:" + xotherone + " y:" + y1);
		console.log(yplus1);
		var xminus1 = document.getElementsByClassName("x:" + x1 + " y:0");
		console.log("xminus1: " + xminus1[0]);
		var plus1other = document.getElementsByClassName("x:" + x1 + " y:" + y1);
		if (yplus1[0].className.indexOf(" bomB") != -1) {
			bombnumber++;
		}
		if (xminus1[0].className.indexOf(" bomB") != -1) {
			bombnumber++;
		}
		if (plus1other[0].className.indexOf(" bomB") != -1) {
			bombnumber++;
		}
		document.getElementById(tdid).innerHTML = bombnumber;
	}
	else if (typecheck.indexOf(" botLeft") != -1) {
		getcoord = typecheck.split(" ");
		y1 = parseInt(getcoord[3]);
		x1 = parseInt(getcoord[2]);
		var y1minus = y1 - 1;
		x1 = x1 + 1;
		console.log(y1);
		console.log(x1);
		console.log(y1minus);
		var yplus1 = document.getElementsByClassName("x:0 y:" + y1minus);
		var xminus1 = document.getElementsByClassName("x:" + x1 + " y:" + y1);
		var plus1other = document.getElementsByClassName("x:" + x1 + " y:" + y1minus);
		console.log("xminus1: " + xminus1[0]);
		if (yplus1[0].className.indexOf(" bomB") != -1) {
			bombnumber++;
		}
		if (xminus1[0].className.indexOf(" bomB") != -1) {
			bombnumber++;
		}
		if (plus1other[0].className.indexOf(" bomB") != -1) {
			bombnumber++;
		}
		document.getElementById(tdid).innerHTML = bombnumber;
	}
	else if (typecheck.indexOf(" botRight") != -1) {
		getcoord = typecheck.split(" ");
		y1 = parseInt(getcoord[3]);
		x1 = parseInt(getcoord[2]) - 1;
		y1minus = y1 - 1;
		console.log("y1: " + y1);
		console.log("x1: " + x1);
		console.log("y1minus: " + y1minus);
		var yplus1 = document.getElementsByClassName("x:0 y:" + y1);
		var xminus1 = document.getElementsByClassName("x:" + x1 + " y:" + y1minus);
		var plus1other = document.getElementsByClassName("x:" + x1 + " y:" + y1);
		console.log("xminus1: " + xminus1[0]);
		if (yplus1[0].className.indexOf(" bomB") != -1) {
			bombnumber++;
		}
		if (xminus1[0].className.indexOf(" bomB") != -1) {
			bombnumber++;
		}
		if (plus1other[0].className.indexOf(" bomB") != -1) {
			bombnumber++;
		}
		document.getElementById(tdid).innerHTML = bombnumber;
	}
	else if (typecheck.indexOf(" top") != -1) {
		console.log("top");
	}
	else if (typecheck.indexOf(" left") != -1) {
		console.log("left");
	}
	else if (typecheck.indexOf(" right") != -1) {
		console.log("right");
	}
	else if (typecheck.indexOf(" bot") != -1) {
		console.log("bot");
	}
	else {
		console.log("yeet")
	}
}

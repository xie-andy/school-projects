var width;
var height;
var tablecreated = "false";
var gameover = "false";
var typecheck;
var bombnumber = 0;
var bombs;
var notbombs;
var unveiled = 0;
var win = "false";

//document.oncontextmenu = function() {
//	return false;
//}

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

function startTimer() {
	var timer
}

function wingame() {
	alert("you win");
	var name = document.getElementById("name").value;
	alert(name);
}

function rightClick(event, id) {
	event.preventDefault();
	var rightclick;
	console.log("here3");
	console.log(id);
	var currententry = document.getElementById(id.id)
	if (currententry.className.indexOf(" flagged") == -1) {
		currententry.innerHTML = "<img src='flag.png' class='flag'>"
		currententry.className += " flagged"
	}
	else if (currententry.className.indexOf(" flagged") != -1) {
		currententry.innerHTML = "";
		currententry.classList.remove("flagged");
	}
}

function bomb(){
	document.getElementById("coolguybutton").src = "sadface.png";
	alert("You clicked on a bomb and you lost!");
	gameover = "true";
	var bombshow = document.getElementsByClassName("bomB");
	console.log("bombshow is: " + bombshow);
	console.log(bombs);
	for (var showcounter = 0; showcounter < bombs; showcounter++) {
		bombshow[showcounter].innerHTML = "bomb";
	}
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
				document.getElementById("entry" + tablecount).addEventListener("contextmenu", function oncontextmenu(event){ rightClick(event, this); return false;}, false);
				//document.getElementById("entry" + tablecount).addEventListener("mousedown", function(){ rightClick(this)});
				//document.getElementById("demo").addEventListener("mousedown", mouseDown);
				tablecount = tablecount + 1;
			}
		}
		bombs = Math.round(tablecount/6);
		notbombs = tablecount - bombs;
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
		startTimer();
	}
	else {
		document.getElementById("myTable").remove();
		tablecreated = "false";
		tablecreateform();
		document.getElementById("coolguybutton").src = "smileyfaceblack.png"
		gameover = "false";
		unveiled = 0;
		win = "false";
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
		if (bothminus[0].className.indexOf(" bomB") != -1 && bothminus[0].className.indexOf(" unveiled") == -1) {
			bombnumber++;
		}
	}
	if (yminus[0] != undefined) {
		if (yminus[0].className.indexOf(" bomB") != -1 && yminus[0].className.indexOf(" unveiled") == -1) {
			bombnumber++;
		}
	}
	if (xplusyminus[0] != undefined) {
		if (xplusyminus[0].className.indexOf(" bomB") != -1 && xplusyminus[0].className.indexOf(" unveiled") == -1) {
			bombnumber++;
		}
	}
	if (xminus[0] != undefined) {
		if (xminus[0].className.indexOf(" bomB") != -1 && xminus[0].className.indexOf(" unveiled") == -1) {
			bombnumber++;
		}
	}
	if (xplus[0] != undefined) {
		if (xplus[0].className.indexOf(" bomB") != -1 && xplus[0].className.indexOf(" unveiled") == -1) {
			bombnumber++;
		}
	}
	if (yplusxminus[0] != undefined) {
		if (yplusxminus[0].className.indexOf(" bomB") != -1 && yplusxminus[0].className.indexOf(" unveiled") == -1) {
			bombnumber++;
		}
	}
	if (yplus[0] != undefined) {
		if (yplus[0].className.indexOf(" bomB") != -1 && yplus[0].className.indexOf(" unveiled") == -1) {
			bombnumber++;
		}
	}
	if (bothplus[0] != undefined) {
		if (bothplus[0].className.indexOf(" bomB") != -1 && bothplus[0].className.indexOf(" unveiled") == -1) {
			bombnumber++;
		}
	}
	document.getElementById(tdid).innerHTML = bombnumber;
	if (document.getElementById(tdid).className.indexOf(" unveiled") == -1) {
		document.getElementById(tdid).className += " unveiled";
		unveiled++;
	}
	if (bombnumber == 0) {
		if (bothminus[0] != undefined && bothminus[0].className.indexOf(" unveiled") == -1) {
			bombcheck(bothminus[0].id);
		}
		if (yminus[0] != undefined && yminus[0].className.indexOf(" unveiled") == -1) {
			bombcheck(yminus[0].id);
		}
		if (xplusyminus[0] != undefined && xplusyminus[0].className.indexOf(" unveiled") == -1) {
			bombcheck(xplusyminus[0].id);
		}
		if (xminus[0] != undefined && xminus[0].className.indexOf(" unveiled") == -1) {
			bombcheck(xminus[0].id);
		}
		if (xplus[0] != undefined && xplus[0].className.indexOf(" unveiled") == -1) {
			bombcheck(xplus[0].id);
		}
		if (yplusxminus[0] != undefined && yplusxminus[0].className.indexOf(" unveiled") == -1) {
			bombcheck(yplusxminus[0].id);
		}
		if (yplus[0] != undefined && yplus[0].className.indexOf(" unveiled") == -1) {
			bombcheck(yplus[0].id);
		}
		if (bothplus[0] != undefined && bothplus[0].className.indexOf(" unveiled") == -1) {
			bombcheck(bothplus[0].id);
		}
	}
	if (unveiled == notbombs && win == "false") {
		wingame();
		console.log("gamewon");
		win = "true";
		gameover = "true";
	}
}

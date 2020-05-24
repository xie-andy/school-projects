var width = prompt("Enter the width of the table:");
var height = prompt("Enter the height of the table:");

//createtable(width, height);

//function highscores
/*
var request = new XMLHttpRequest();
request.open('GET', 'highscores.json', true);
request.onload = function () {
	var data = JSON.parse(this.response);
	console.log(this);
	document.write(this);
}

request.send();
*/

/*function tdclick(){
	alert("td clicked");
}*/

function createtable(width, height){
	console.log(width + " by " + height);
}

//const body = document.getElementById('body');
//const table = document.createElement('table');
//body.appendChild(table);

function normalClick(a){
	console.log("a is " + a);
	alert("You clicked on " + a.class)
}

function bomb(){
	alert("You clicked on a bomb!");
}

var tablecount = 0;
var x = document.createElement("TABLE");
x.setAttribute("id", "myTable");
document.body.appendChild(x);
for (i = 0; i < height; i++) {
	var row = document.createElement("TR");
	row.setAttribute("id", "row" + i);
	document.getElementById("myTable").appendChild(row);
	for (b = 0; b < width; b++) {
		tablecount = tablecount + 1;
		console.log(tablecount);
		var z = document.createElement("TD");
		var t = document.createTextNode(i + " " + b);
		z.appendChild(t);
		z.setAttribute("id", "entry" + tablecount);
		z.setAttribute("value", "notbomb")
		document.getElementById("row" + i).appendChild(z);
	}
}

console.log(i);
console.log(b);
var bombs = Math.round(tablecount/6);
console.log("bombs " + bombs);
bomblocs = [];
console.log(tablecount);

for (bombset = 0; bombset < bombs; bombset++) {
	
	var xy = Math.floor((Math.random() * tablecount) + 1);
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
	document.getElementById(currententry).addEventListener("click", bomb);
	console.log("done");
	bomblocs.push(xy);
	for (var notbomb = 1; notbomb < (tablecount - bomblocs.length); notbomb++) {
		currententry = document.getElementById("entry" + notbomb).className;
		console.log("second part " + currententry);
		if (currententry != "bomb") {
			console.log("Not a bomb");
			document.getElementById("entry" + notbomb).className = "Number";
			document.getElementById("entry" + notbomb).addEventListener("click", normalClick(notbomb));
		}
		else {
			console.log("Is a bomb");
		}
		console.log("Finished 1 time");
	}
}

console.log("bombloc " + bomblocs)

//var x = document.getElementById("entry" + 25).valueOf();
//alert(x.id);


//const trhead = document.createElement('tr');
//thead.appendChild(trhead);
/*const tdhead1 = document.createElement('th');
         		trhead.appendChild(tdhead1);
         		const tdhead2 = document.createElement('th');
         		trhead.appendChild(tdhead2);
         		const tdhead3 = document.createElement('th');
         		trhead.appendChild(tdhead3);
         		const tdhead4 = document.createElement('th');
         		trhead.appendChild(tdhead4);

         		for(i = 0; i < 10; i++){
         			var add = i+1;
         			const tbody = document.createElement('tbody');
         			table.setAttribute('class', 'tbody');
         			table.appendChild(tbody);
         			const trbody = document.createElement('tr');
         			tbody.appendChild(trbody);
         			const tdbody1 = document.createElement('td');
         			trbody.appendChild(tdbody1);
         			const tdbody2 = document.createElement('td');
         			trbody.appendChild(tdbody2);
         			const tdbody3= document.createElement('td');
         			trbody.appendChild(tdbody3);
         			const tdbody4 = document.createElement('td');
         			trbody.appendChild(tdbody4);

         		}*/

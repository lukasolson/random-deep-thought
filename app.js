const url = "https://gist.githubusercontent.com/lukasolson/c5fb0d5f869a199cef45b56a3261d80d/raw/d0aa78b00fb85eab8a9c0d9004cc9bc9ab97981d/deep-thoughts.txt";
var request = new XMLHttpRequest();
request.open("GET", url, true);
request.onload = function () {
	const thoughts = request.responseText.split("\n");
	const thought = thoughts[Math.round(Math.random() * thoughts.length)];
	document.getElementById("deep-thought").innerHTML = thought;
};
request.send();

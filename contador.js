var intervalo;

function tempo(op) {
    if (op == 1) {
		document.getElementById('stop');
        document.getElementById('start');
        document.getElementById('reset');
	}
	var s = 1;
	var m = 0;
	var h = 0;
	intervalo = window.setInterval(function() {
		if (s == 60) { m++; s = 0; }
		if (m == 60) { h++; s = 0; m = 0; }
		if (h < 10) document.getElementById("hora").innerHTML = "0" + h + "h"; else document.getElementById("hora").innerHTML = h + "h";
		if (s < 10) document.getElementById("segundo").innerHTML = "0" + s + "s"; else document.getElementById("segundo").innerHTML = s + "s";
		if (m < 10) document.getElementById("minuto").innerHTML = "0" + m + "m"; else document.getElementById("minuto").innerHTML = m + "m";		
		s++;
	},1000);
}

function parar() {
	window.clearInterval(intervalo);
	document.getElementById('stop');
	document.getElementById('start');
}

function volta() {
    window.clearInterval(intervalo);
    document.getElementById('reset');
    document.getElementById("hora").innerHTML = "00h";
    document.getElementById("minuto").innerHTML = "00m";
    document.getElementById("segundo").innerHTML = "00s";
    
}

/*function limpa() {
	document.getElementById('reset').innerHTML = "";
}*/
//window.onload=tempo;
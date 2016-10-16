'use strict'

var kraft = document.getElementById('kraft');
var sbros = document.getElementById('sbros');
var a = document.getElementById("div1");
var el = a.getElementsByTagName("*");


sbros.addEventListener('click',function sbross(){
	location.reload();},false)
kraft.addEventListener('click',function kraft(){
	var el_length = a.childNodes.length;	
	switch(el_length){
		case 3:
		if(el[0].id.localeCompare("pony")!=-1 && el[1].id.localeCompare("glue")!=-1 && el[2].id.localeCompare("chip")!=-1) {
			lok.innerHTML = '<img src="img/FoS_T-60f.png">';
		}else if (el[0].id.localeCompare("microscope")!=-1 && el[1].id.localeCompare("chip")!=-1 && el[2].id.localeCompare("clock")!=-1) {
			lok.innerHTML = '<img src="img/appa.png">';
		}else if (el[0].id.localeCompare("car")!=-1 && el[1].id.localeCompare("microscope")!=-1 && el[2].id.localeCompare("chip")!=-1) {
			lok.innerHTML = '<img src="img/mushk.png">';
		}else alert('Error');
		break;
		case 2:
		if (el[0].id.localeCompare("glove")!=-1 && el[1].id.localeCompare("car")!=-1) {
			lok.innerHTML = '<img src="img/FoS.png">';
		} else if (el[0].id.localeCompare("car")!=-1 && el[1].id.localeCompare("tape")!=-1) {
			lok.innerHTML = '<img src="img/vin.png">';
		}else alert('Error');
		break;
		default:
			alert('Error');
			break;
	}
	   
},false)


'use strict'

var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var p3 = document.getElementById('p3');

var glue = document.getElementById('glue');
var glove = document.getElementById('glove');
var chip = document.getElementById('chip');
var pony = document.getElementById('pony');
var microscope = document.getElementById('microscope');
var car = document.getElementById('car');
var clock = document.getElementById('clock');
var tape = document.getElementById('tape');

window.onload = scriptAfterLoad;

function scriptAfterLoad(){
	if(glue.addEventListener){
		glue.addEventListener('click',clicLink1,false);
	}
	if(glove.addEventListener){
		glove.addEventListener('click',clicLink2,false);
	}
	if(chip.addEventListener){
		chip.addEventListener('click',clicLink3,false);
	}
	if(pony.addEventListener){
		pony.addEventListener('click',clicLink4,false);
	}
	if(microscope.addEventListener){
		microscope.addEventListener('click',clicLink5,false);
	}
	if(car.addEventListener){
		car.addEventListener('click',clicLink6,false);
	}
	if(clock.addEventListener){
		clock.addEventListener('click',clicLink7,false);
	}
	if(tape.addEventListener){
		tape.addEventListener('click',clicLink8,false);
	}
}
function clicLink1(event){
	p1.innerHTML = "Силовая броня: Робопони,клей,микросхема";
	p2.innerHTML ="";
	p3.innerHTML ="";
}
function clicLink2(event){
	p1.innerHTML = "Кожаная броня: Бейсбольная перчатка,машинка";
	p2.innerHTML ="";
	p3.innerHTML ="";
}
function clicLink3(event){
	p1.innerHTML = "Силовая броня: Робопони,клей,микросхема";
	p2.innerHTML ="Мушкет: Машинка,микроскоп,микросхема";
	p3.innerHTML ="Апофиоз: Микроскоп,микросхема,часы";
}
function clicLink4(event){
	p1.innerHTML = "Силовая броня: Робопони,клей,микросхема";
	p2.innerHTML ="";
	p3.innerHTML ="";
}
function clicLink5(event){
	p1.innerHTML = "Апофиоз: Микроскоп,микросхема,часы";
	p2.innerHTML ="Мушкет: Машинка,микроскоп,микросхема";
	p3.innerHTML ="";
}
function clicLink6(event){
	p1.innerHTML = "Кожаная броня: Бейсбольная перчатка,машинка";
	p2.innerHTML ="Винчестер: Машинка,изолента";
	p3.innerHTML ="Мушкет: Машинка,микроскоп,микросхема";
}
function clicLink7(event){
	p1.innerHTML = "Апофиоз: Микроскоп,микросхема,часы";
	p2.innerHTML ="";
	p3.innerHTML ="";
}
function clicLink8(event){
	p1.innerHTML = "Винчестер: Машинка,изолента";
	p2.innerHTML ="";
	p3.innerHTML ="";
}
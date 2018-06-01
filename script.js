(window.onload = function(){
	"use strict";

	var counter = 0;

	displayOkita();

	function displayOkita() {
		var create = document.createElement('div');
		create.id = "container";
		create.innerHTML=`
			<div class="main_img"></div>
		`;
		create.querySelector('.main_img').addEventListener('click', function(){
			var audio = new Audio('./Okitawin2.ogx');
			audio.play();
		});
		document.body.appendChild(create);
	}
}());
//<div class="counter">大勝利ー！: ${counter}</div>
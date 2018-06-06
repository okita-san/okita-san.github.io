(window.onload = function(){
	"use strict";

	var counter = 0;

	displayOkita();
	displayCalculator();

	function displayOkita() {
		var create = document.createElement('div');
		create.className = "container";
		create.innerHTML=`
			<div class="header">大勝利ー！</div>
			<div class="main_img"></div>
			<div class="links">
			<a href="https://twitter.com/prismatisms" class="twitter_button"></a>
			</div>
		`;
		create.querySelector('.main_img').addEventListener('click', function(){
			var audio = new Audio('./sound.mp3');
			audio.play();
		});
		document.body.appendChild(create);
	}

	function displayCalculator(){
		var calc = document.createElement('div');
		calc.className = "container"
		calc.innerHTML=`
			<form class="input">
			How many rolls are you willing to spend?
			<input type="text" id="roll_form">
			<input type="submit" class="button" value="Make Me Salty">
			</form>
		`;
		calc.querySelector('.input').addEventListener('submit', function(e) {
			e.preventDefault();
			var rolls = document.getElementById("roll_form").value;
			if (isNaN(rolls) || rolls <= 0 || rolls%1 != 0) {
				alert("Don't troll");
			}
			else {
				if (document.contains(document.getElementById("display"))) {
					document.getElementById("display").remove();
				}
				calculateProbability(rolls);
			}
		});
		document.body.appendChild(calc);
	}

	function calculateProbability(rolls) {
		var probability = (1-Math.pow(0.993, rolls))*100;
		probability = Math.round(probability);
		var costJP = getCheapest(rolls).toFixed(2);
		var costNA = yenToUSD(costJP).toFixed(2);
		var text = document.createElement('div');
		text.className = "text"
		text.id = "display"
		text.innerHTML=`
		Probability of rolling the rate-up SSR is ~${probability}%.
		This also costs ${costJP}¥ or $${costNA} using the cheapest options possible. <br>
		Calculated using rates and prices listed on the F/GO Wikipedia.
		`;
		console.log("x");
		document.body.appendChild(text);
	}

	function yenToUSD(yen){
		return yen*0.0091;
	}

	function getCheapest(rolls){
		if (rolls <= 0) {
			return 0;
		}
		else {
			if ((rolls/167) > 1) {
				console.log("lol", 167%rolls);
				return 9800 + getCheapest(rolls-167);
			}
			else if ((rolls/76) > 1) {
				return 4800 + getCheapest(rolls-76);
			}
			else if ((rolls/41) > 1) {
				return 2900 + getCheapest(rolls-41);
			}
			else if ((rolls/18) > 1) {
				return 1400 + getCheapest(rolls-18);
			}
			else if ((rolls/5) > 1) {
				return 480 + getCheapest(rolls-5);
			}
			else {
				return 120 + getCheapest(rolls-1);
			}
		}
	}

}());
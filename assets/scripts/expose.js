// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

	//update the big image of type of horn
	update_horn_img()

	//update small speaker image and vol control
	update_speaker_img_vol();
	

	//add confetti on "play sound" button when party horn is selected
	on_button_click();
	
}


function update_horn_img() {

	//vars
	var selection = document.getElementById("horn-select")
	var img_q = document.querySelector("img");
	

	//internal function on change
	selection.addEventListener("change", function() {
		
		var horn_val = selection.value;
		img_q.src = `assets/images/${horn_val}.svg`;
	});
}

  
function on_button_click() {

	//vars
	var jsConfetti = new JSConfetti();
	var button_q = document.querySelector("button");
	var selection = document.getElementById("horn-select");
	var audio_q = document.querySelector("audio");

	//internal function on click
	button_q.addEventListener("click", function() {
		
		//play sound for all cases
	  	if (selection.value != "select") {
		
			audio_q.src = `assets/audio/${selection.value}.mp3`;
			audio_q.play();
		}

		//additional check to add confetti
		if (selection.value == "party-horn") {
		  		jsConfetti.addConfetti();
		}
	  	
	});
}
  


function update_speaker_img_vol() {

	//vars
	var vol;
	var vol_select = document.getElementById("volume-controls");
	var vol_img = vol_select.querySelector("img");
	var vol_aud = document.querySelector("audio");

	//internal function
	vol_select.addEventListener("input", function() {
		var vol_elem = document.getElementById("volume").value;
  
		//choose volume level
		if (vol_elem == 0) {
		  	vol = "volume-level-0";
		} 
		else if ((vol_elem >= 1) && (vol_elem < 33)) {
			vol = "volume-level-1";
		} 
		else if ((vol_elem >= 3) && (vol_elem < 66)) {
			vol = "volume-level-2";
		} 
		else {
			vol = "volume-level-3";
		}

		//displays correct image for each level
		vol_img.src = `assets/icons/${vol}.svg`;

		//adjusts volume for volume value
		vol_aud.volume = vol_elem / 100;
	});
}

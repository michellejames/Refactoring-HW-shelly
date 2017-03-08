// console.log("test");
"use strict";

var size = Math.round ( Math.random () * 50 );

//create snow
var createSnow = function () {
	var snow = document.createElement( "div" );
	document.body.appendChild( snow );
	document.body.style.background = "black";

//style snow
	snow.style.width = size + "px";
	snow.style.height = size + "px";
	snow.style.position = "absolute";
	snow.style.left = Math.random() * ( window.innerWidth + size ) + "px";
	snow.style.top = ( 0 - size ) + "px";
	snow.style.borderRadius = "50%";
	snow.style.background = "white";

//variables to set snow up for movement
	var leftCount = 0;
	var rightCount = 0;
	var movementThreshold = Math.ceil ( Math.random () * 15 ) + 5;

//make snow move
	var letItSnow = setInterval ( function () {
		var left = parseInt( snow.style.left );
		var top = parseInt( snow.style.top );
		var newLeft;
		var newTop = top + 10;
		
		if ( leftCount === 0 || leftCount <= movementThreshold ) {
			newLeft = left - Math.random () * 10 + 1;

			if ( leftCount == movementThreshold ) {
				rightCount = 0;
			}
			leftCount++;

		} else if ( rightCount <= movementThreshold ) {
			newLeft = left + Math.random () * 10 + 1;

			if ( rightCount == movementThreshold ) {
				leftCount = 0;
			}
			rightCount++;
		}

//once snow is off the screen, remove snow
		if ( newLeft < ( 0 - size ) || newTop > window.innerHeight ) {
			snow.remove();
			window.clearInterval( letItSnow );
		}

//set the snow.style.left and snow.style.top to the modified values, adding “px” to the ends
		snow.style.left = newLeft + "px";
		snow.style.top = newTop + "px";

	}, ( Math.random() * 50 ) + 50 );
}

//set an Intervall to call createSnow ever 33 milliseconds
var creator = setInterval ( function () {
	var howMany = document.body.children.length;
	
	if ( howMany < 100 ) {
		  createSnow ();
	}
}, 33 );
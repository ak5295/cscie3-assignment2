
/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework Unit #2
 *
 *
 */


 /********************************************************************
  *
  * Second problem: Put An X
  *
  ********************************************************************/

var placeBtn = document.getElementById("placeMarkerButton");
placeBtn.onclick = function(){

 	// get a reference to the box
        var graphElement = document.getElementById("graph");

        // now get the width and height of the box - see the clientWidth and clientHeight documentation at
        //   https://www.w3schools.com/jsref/dom_obj_all.asp
        var width = graphElement.clientWidth;
        var height = graphElement.clientHeight;

        /*
         *   Now, here's where you do your magic. The xPosition and yPosition should not be set to zero.
         *
         *   Use the Math.random() function to get a number between
         *   0 and 1, then use some math to convert that to a number between 0 and the width. This is your x position.
         *
         *   Do the same thing to generate a number between 0 and the height: this is your y position.
         *   */

        var yPosition = 0; // should generate a value between 0 and the height
        var xPosition = 0;  //should generate a value between 0 and the width
        // generate random number for width and height
        xPosition = Math.random();
        console.log(xPosition);
        yPosition = Math.random();
        console.log(yPosition);

 	//now we'll get the HTML element where the X goes, fill in the X and set the position of the element.
 	var markerElement = document.getElementById("marker");
        markerElement.style.top = parseInt(xPosition)+'px';
        markerElement.style.left = parseInt(yPosition)+'px';
        markerElement.style.width = parseInt(xPosition)+'px';
        markerElement.style.height = parseInt(yPosition)+'px';

        for (var style in this.graphElement) {
               this.markerElement.style[style] = this.graphElement[style];
        }

 }

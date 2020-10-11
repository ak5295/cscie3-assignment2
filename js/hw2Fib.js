/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework #2
 *
 *
 */



 /********************************************************************
  *
  * Fourth problem: Sum of first 11 odd Fibonacci numbers
  *
  ********************************************************************/
// first we get the HTML for the button
var getFibSum = document.getElementById("sumFib");

//then we set the event handler for when the button is clicked
getFibSum.onclick = function(){
               document.getElementById("sumFibResult").innerHTML = fibonacciSum();
 }

 /*
  *  twelveEvenFibonacciSum - calulates the sum of the first 11 odd fibonacci numbers, with 0, 1 being the first two numbers of the sequence
  *
  *            @returns {integer} The sum of the first 11 odd Fibonacci numbers
  */

 function fibonacciSum(){
   /// WRITE YOUR CODE HERE
   let fibNMinus2 = 0;
   let fibNMinus1 = 1;
   let sum = 1;
   let cnt = 1;

   while(cnt < 11) {
     fib = fibNMinus1 + fibNMinus2;

     if(fib%2 == 1) {
       sum += fib;
       cnt++;
     }

     fibNMinus2 = fibNMinus1;
     fibNMinus1 = fib;
   }

   return sum;
 }

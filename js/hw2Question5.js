
var myTextareaElement = document.getElementById("myWordsToCount");
myTextareaElement.onkeyup = function(){
    // your code goes here
    var myText = myTextareaElement.value.trim();
    var myWordsArray = myText.split(' ');
    var words = myWordsArray.length;
    
    document.getElementById("wordcount").innerHTML = words;    
}
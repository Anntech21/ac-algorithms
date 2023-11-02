/**
Take 30 minutes to work on this assignment. Make sure to ask for help if you get stuck. If you need more than 30 minutes, we will have time on Friday. 

Read through the function and write comments to explain what is happening in the code.

 1. How would we change this to find the shortest word?
 2. How would you display the actual word in the console?
 */

//function findLongestWord(str) {
  //var words = str.split(' ');
  //var longestWordLength = 0;
  
  //for (var i = 0; i < words.length; i++) {
    //if (words[i].length > longestWordLength) {
      //longestWordLength = words[i].length;
    //}
  //}
  
  //return longestWordLength;
//}


//its a function call findLongestWord with parameter str.
//code block has a variable var called words with value str which has .spilt method and undifined value.
//This code also has a variable var with longestWordLength with value 0
//for loop;
//var i starting index 0;
//i < words length;
//i loops;
//if words i length > longestWordLength;
//longestWordLength = words i length
//return longestWordLength


//-----------

function findLongestWord(str) { 
  var words = str.split(' '); 
  if (words.length === 0) { 
      return { smallest: "", largest: "" }; 
  } 
    
  var smallest = words[0]; 
  var largest = words[0]; 
    
  for (var i = 1; i < words.length; i++) { 
      var word = words[i]; 
      if (word.length < smallest.length) { 
          smallest = word; 
      } 
      if (word.length > largest.length) { 
          largest = word; 
      } 
  } 
  return { smallest, largest }; 
} 

var inputStr = "actual word"; 
var result = findLongestWord(inputStr); 
console.log(result);

//{ smallest: 'word', largest: 'actual' }
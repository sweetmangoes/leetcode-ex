/* 
Pseudocode: 
1) they have to be capital letters
*/
var gcdOfStrings = function(str1, str2) {
  // let result = ""

  for (let i = 0; i < Math.max(str1.length, str2.length); i++){
    console.log(str1[i])
    // if(str1[i] == str2[i]){
    //   result += str1[i]
    // }
    // console.log(result)
  }
  
  // return result
};

gcdOfStrings("ABC","DEG") // "ABC"
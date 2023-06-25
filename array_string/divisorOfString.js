/* 
Pseudocode: 
1) they have to be capital letters

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"

*/
var gcdOfStrings = function(str1, str2) {
  let result = ''
  for (let i = 0; i < Math.max(str1.length, str2.length); i++){
    // console.log("str1: ", str1[i])
    // console.log("str2: ", str2[i])
    if(str1[i]==str2[i]){
      result += str1[i]
      if(!result[i] == str1[i]){
        
      }
    }
  }
  console.log(result)
  // console.log("A: ", result)
  // return result
};

// gcdOfStrings("ABC","AB") // "AB"
// gcdOfStrings("ABC","DEG") // ""
gcdOfStrings("ABABAB","ABAB") // "AB"
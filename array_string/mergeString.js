/* 
pseudocode:
1) loop though the element
2) push element a array
3)  

*/

var mergeAlternately = function(word1, word2) {
  let word = ''
  for (let i = 0; i < Math.max(word1.length, word2.length); i++){
    if( i < word1.length){ word += word1[i]};
    if( i < word2.length){ word += word2[i]};
  }
  return word
};

mergeAlternately("abc","123")//"a1b2c3" 
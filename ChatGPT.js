/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

s = "baba"
t = "badc"

//s = "bbbaaaba"
//t = "aaabbbba"

var isIsomorphic = function(s, t) {

  // Initialize a map to store the mappings between the characters in s and t
  const m = new Map();
  
  // Iterate through the characters in s
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    
    // If c is not in the map, check if the corresponding character in t has already been mapped
    if (!m.has(c)) {
      if (Array.from(m.values()).includes(t[i])) {
        // The character in t has already been mapped to a different character in s, so s and t are not isomorphic
        return false;
      } else {
        // Map c to the corresponding character in t
        m.set(c, t[i]);
      }
    } else {
      // If c is in the map, check if the corresponding character in t is the same as the character in t that c is mapped to
      if (m.get(c) !== t[i]) {
        // The corresponding character in t is not the same as the character in t that c is mapped to, so s and t are not isomorphic
        return false;
      }
    }
  }
  
  // If the loop completes, s and t are isomorphic
  return true;

};

let final = isIsomorphic(s, t);
console.log(final);


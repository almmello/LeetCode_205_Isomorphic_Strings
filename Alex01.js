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

    firstTest = isIsoOne(s, t);
    secondTest = isIsoOne(t, s);
    return firstTest && secondTest;

    
};

var isIsoOne = function(s, t) {
    let maps = new Map();
    let mapt = new Map();

    for (let i=0; i < s.length; i++) {
        maps.set(i, s[i]);
    }

    for (let i=0; i < t.length; i++) {
        mapt.set(i, t[i]);
    }


    let source = maps.get(0);
    let target = mapt.get(0);

    let mapn = new Map();
    mapn.set(source, target);

    for (let v=0; v < maps.size; v++) {
        source = maps.get(v);
        if (mapn.has(source)) {
            target = mapn.get(source);
        } else {
            target = mapt.get(v);
            mapn.set(source, target);
        }
        for (let x=v; x < mapt.size; x++) {
            if ( mapt.get(x) == target) {
                mapt.set(x, source + "#");
            }

        }
    
    }
    
    let isEqual = true;

    for (let z = 0; z < mapt.size; z++) {

        if (maps.get(z) + "#" != mapt.get(z)) {

            isEqual = false;
        }
    }
    
    return isEqual;
};

let final = isIsomorphic(s, t);
console.log(final);


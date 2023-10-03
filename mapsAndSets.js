// Quick Question 1
//what does this code return 

new Set([1,1,2,2,3,4]) 

//{1, 2, 3, 4}

// Quick Question 2
//what does this code return

const set = [...new Set("referee")].join("")

//'ref'

// Quick Question 3
//what does this code return

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

//{[1, 2, 3] => true}
//{[1, 2, 3] => false}

//hasDuplicate

const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

//vowelCount
function isVowel(char){
    if('aeiou'.includes(char)){
        return true;
    }
}

function vowelCount(str) {
    const vowelMap = new Map();
    for(let char of str){
        if(isVowel(char) === true){
            vowelMap.set(char, + 1);
        }
    }
    return vowelMap;
}
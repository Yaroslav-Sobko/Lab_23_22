let insert = (str1, str2, pos = 0) => (str2 === undefined) ? str1 : str1.slice(0, pos) + str2 + str1.slice(pos);
let s1 = 'Hello';
let s2 = ' World ';
console.log(insert(s1, s2, 7));
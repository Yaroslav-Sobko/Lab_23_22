function f(inputarr) {
    let arrcopy = [];
    for (let i = 0; i < inputarr.length; i++) {
        arrcopy[i] = inputarr.filter(item => item === inputarr[i]).length;
    }
    let ind = arrcopy.indexOf(Math.max(...arrcopy));
    return inputarr[ind];
}

let arr = [1,2,3,4,4,4,5,4,1,5,4,5,5,5,5,1,1,1,1,1,1,1,1];

console.log(f(arr));
// function binarySearch (arr, target) {
//     let l = 0;
//     let r = arr.length - 1;

//     while(l <= r) {
//         let mid = Math.floor(l + (r-l)/2);
//         if(arr[mid] == target) {
//             return true; 
//         }
//         else if (arr[mid] < target) {
//             l = mid + 1;
//         }
//         else {
//             r = mid - 1;
//         }
//     }

//     return false;
// } 

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let ans = binarySearch(arr, 5);

// console.log(ans);

// let result = (a, b) => {
//     console.log(a * b);
// }

// let str = "AkshatPandey";

// function noOfVowels(str) {
//     newStr = str.toLowerCase();
//     let count = 0;
//     for(let char of newStr){
//         if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
//             count++;
//         } 
//     }
//     return count;
// }

// let ans = noOfVowels(str);
// console.log(ans);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr.forEach((val) => {
//     console.log(val * val);
// })

//reduce method

let n = prompt("Enter the no. of elements");
let arr = [];
for(let i=0; i<n; ++i) {
    let x = prompt(`Enter index ${i + 1} -`);
    arr[i] = parseInt(x);
}

console.log(arr);

const sum = arr.reduce((res, curr) => {
    return res + curr;
})

const prod = arr.reduce((res, curr) => {
    return res * curr;
})

console.log("Sum of arr =", sum);
console.log("Prod of arr =", prod);
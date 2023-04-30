let str = "NIRAJ";
let newString = "";
for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
}
console.log('Using Loop - ' + newString);


const arrayStrings = str.split("");
const reverseArray = arrayStrings.reverse();
const joinArray = reverseArray.join("");
console.log('Using Array - ' + joinArray);
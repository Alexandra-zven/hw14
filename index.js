function isPalindrome(str) {
    let temp = str.toUpperCase().split("").reverse().join("");
    if (str.toUpperCase() == temp) {
        console.log("true")
    } else {
        console.log("false");
    }
}

isPalindrome("ab ba");

function reverseString(str) {
    let reverse = str.split("").reverse().join("");
    console.log(reverse);
    return reverse;
}

reverseString("Hello world");

function countChar(str, c) {
    let count = 0;
    for (el of str) {
        if (el === c) {
            count++;
        }
    }
    console.log(count);
}

countChar("Hello world", "l");
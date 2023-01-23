// complete the given function
function isPalindrome(str) {
    // convert the string to lowercase
    str = str.toLowerCase();
    // remove non-alphanumeric characters
    str = str.replace(/[^a-z0-9]/gi, '');
    // check if the string is a palindrome
    return str === str.split('').reverse().join('');
}

 
}
module.exports = palindrome

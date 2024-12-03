// const passwordBox = document.getElementById("password")
// const length = 12;

// const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// const lowerCase = "abcdefghijklmnopqrstuvwxyz"
// const number = "0123456789"
// const symbol = "@#$%^&*()<>?/=-"


// const allChars  = upperCase + lowerCase + number + symbol;
// function createPassword(){
//     let password = "";
//     password += upperCase[Math.floor(Math.random() * upperCase.length)]
//     password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
//     password += number[Math.floor(Math.random() * number.length)]
//     password += symbol[Math.floor(Math.random() * symbol.length)]

//     while(length > password.length){
//         password += allChars[Math.floor(Math.random() * allChars.length)];

//     }

//     passwordBox.value = password;


//     function copyPassword(){
//         passwordBox.select()
//         document.execCommand("copy");

//     }
    
// }


const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()<>?/=-";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";
    
    // Ensure the password contains at least one character from each group
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    
    // Fill the remaining characters randomly
    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    // Shuffle the password for randomness
    password = password.split('').sort(() => 0.5 - Math.random()).join('');
    
    // Display the generated password in the input box
    passwordBox.value = password;
}

function copyPassword() {
    // Copy the password to the clipboard
    passwordBox.select();
    document.execCommand("copy");
    // alert("Password copied to clipboard!");
}


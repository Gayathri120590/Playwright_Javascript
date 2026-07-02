
// Function declaration
function userProfile(name){
    console.log(`Hello, ${name}!`);
    
}
userProfile("Gayathri")

// Arrow Function  

let double=(number)=>number*2
console.log(double(4));

// Anonymous Function 

setTimeout(function () {
console.log("This message is delayed by 2 seconds");}, 2000);

// Callback Function  

function getUserData(callback) {
    setTimeout(function () {
    callback();
    }, 3000);
}

getUserData(function () {
    console.log("Call Back Function");
});
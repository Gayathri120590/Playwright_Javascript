const browserName="Chrome"
function getBrowserName(){
    if(browserName=="Chrome"){
        var browserName=Firefox
    }
    console.log("Browsername inside function is ", browserName);
    
}
getBrowserName()
console.log("Global browser:", browserName);
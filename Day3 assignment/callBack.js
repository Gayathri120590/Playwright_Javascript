let browser = "Chrome"; //global variable
function checkBrowserVersion(callback){
    setTimeout(()=>{
        callback(browser)},2000)
}
function browserName(version){
    console.log("Browser version is ",version)
}
checkBrowserVersion(browserName)

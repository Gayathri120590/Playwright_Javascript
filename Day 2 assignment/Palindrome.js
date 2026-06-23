function palindrome(str){

let strarray=str.split("")
let len=strarray.length
let newstr=""
for(i=len-1;i>=0;i--){
    newstr=newstr+strarray[i]
    console.log(newstr)

}
if(str===newstr){
    console.log(`${str} is palindrome and the reversed string is ${newstr}`)
}else{
    console.log(`${str} is not a palindrome and the reversed string is ${newstr}`)
}
}  
palindrome("lotus")
palindrome("racecar")
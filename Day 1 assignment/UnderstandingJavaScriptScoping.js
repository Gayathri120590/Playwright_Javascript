let genderType = "female"
function printGender ()
{
    let color='brown'
    if (genderType.startsWith("female")){
        var age=30
        let color="pink"
        console.log("color inside if loop is ",color);
        
    }
    console.log("Age value in function is ",age);
    console.log("Color in function and outside if block is ",color);
    
    
}

printGender()
console.log("Gender type globally is",genderType);
genderType = "male";
printGender()
console.log("After changing the genderType to 'male' is ",genderType);

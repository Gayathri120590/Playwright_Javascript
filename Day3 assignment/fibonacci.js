function fibonacci(n){
    
    let num1=0
    let num2=1
    let next=""
    for (let i = 2; i <= n; i++) {
    next = num1 + num2;
    num1 = num2;
    num2 = next;
    }
    console.log(`Fibonacci is ${num2}`)
    return num2;
    
}
fibonacci(3)

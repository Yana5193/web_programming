//задание 1.1
function gcd(a,b){
    while(b!=0){
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
function prime_number(a,b){
    return gcd(a,b)==1;
}
console.log(prime_number(13,27))
console.log(prime_number(6,36))

//задание 1.2
function isPrime(n){
    let count=0;
    for(let i=1;i<=n;i++){
        if(n%i==0){
            count++
        }
    }
    return count==2;
}
console.log(isPrime(2));
console.log(isPrime(36)); 

//задание 1.5
function getDivisors(n) {
    let divisors = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}
console.log(getDivisors(64)); 

//задание 1.9
function isFibonacci(n) {
    if (n < 0) {
        return false;
    }
    let a = 0;
    let b = 1;
    while (a < n) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return a === n;
}
console.log(isFibonacci(89)); 
console.log(isFibonacci(13)); 
console.log(isFibonacci(10)); 

//задание 1.10
function twoFactorial(n) {
    if (n < 0) {
        return null;
    }
    let result = 1;
    for (let i = n; i > 0; i -= 2) {
        result = result * i;
    }
    return result;
}
console.log(twoFactorial(3)); 
console.log(twoFactorial(4));
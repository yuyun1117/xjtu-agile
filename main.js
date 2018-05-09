const fibonacci = require('./lib/fibonacci')
for(var i=1; i<20 ; i++)
{
    console.log(fibonacci(i));
}


console.log("hello world!")

function isLeapYearn(year){
    //闰年：要么整百年份能够被400整除（能够被400整除，肯定能被100整除），要么非整百年份能被4整除（不能被100整除，且能被4整除）

    if(year % 100 != 0 && year % 4 == 0 || year % 400 == 0){

        return "是闰年";

    }else{

        return "不是闰年";

    }
}
console.log("2000年"+isLeapYearn(2000));
console.log("1980年"+isLeapYearn(1980));
console.log("2008年"+isLeapYearn(2008));
console.log("2009年"+isLeapYearn(2009));


//switch
// var num1=5
// var num2=4
// var cher = "+"
// switch(cher){
//     case "+":
//         console.log(num1 + num2)
//         break;
//     case "-":
//         console.log(num1 - num2)
//         break;
//     case "*":
//         console.log(num1 * num2)
//         break;
//     case "/":  
//         console.log(num1 / num2)
//         break;
//     case "%":  
//         console.log(num1 % num2)
//         break;
//     default:
//         // console.log("somthing error")
// }


//while loop
// var x = 1
// while(x <=30)
// {
//     console.log(x)
//     x++
// }


//while loop
// var num = [1,2,3,4,5,6,7,8,9,10]
// var x = 0
// while(x < num.length)
// {
//     console.log(num[x])
//     x++
// }


//for loop
// for(var x=1 ; x<=20 ; x++)
// {
//     console.log(x)
// }


//Array with loops
// var namee = ["yumna","israa","rayan","said","ali","duaa","salim"]
// for(var i=0 ; i<namee.length ; i++)
// {
//     console.log(namee[i])
// }

//Functions
// var x = 5
// var y = 8
// function Sum()
// {
//     console.log(x + y)
// }
// Sum();


// var x = 50
// var y = 80
// function geTotal()
// {
//     var total = x+y
//     return total
// }
// console.log(geTotal());


// function getSum(num1 , num2)
// {
//     return (num1 + num2)
// }
// console.log(50,90);


function getSum( num1, num2 , char )
{
    switch(char){
            case "+":
                return num1 + num2;
                break;
            case "-":
                return num1 - num2
                 break;
            case "*":
                return num1 * num2
                 break;
            case "/":  
                 return num1 / num2
                break;
            case "%":  
                 return num1 % num2
               break;
            default:
                 return "somthing error"
         }
         
    
}
console.log(getSum(28 , 99 , "-"));
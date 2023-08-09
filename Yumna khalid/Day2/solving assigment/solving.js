//Q1
// var numbers
// function YesOrNo(numbers){
//     if(numbers % 3 === 0 && numbers % 4 === 0)
//     {
//          console.log("Yes")
//     }
//     else{
//         console.log("No")
//     }
//      console.log (YesOrNo(12))
// }


// //Q2
// function getMax(x,y)
// {
//     if(x>y){
//         return "X is greater" + x
//     }
//     else if(x<y){
//         return "Y is greater" + Y
//     }
//     else{
//         return "Y and X are equal"
//     }
       //console.log(getMax(4,8))

// }

//Q4
// function posNeg(a)
// {
//     if(a>0){
//         console.log("a is positive")  
//     }
//     else if(a<0){
//         console.log ("a is negetive")
//     }
//     else{
//         console.log ("a is 0")
//     }
    
// }
// console.log(posNeg(4))

//Q5
// function posNegNum(a,b,c)
// {
//     if(a>b && a>c && b>c){
//         console.log(a + " is Max " + c +"  is min")  
//     }
//     else if(b>a && b>c && a>c){
//         console.log (b+ " is Max " + c + " is min")
//     }
//     else if(c>a && c>b && a>c){
//         console.log (c + " C is Max " + b + " is min")
//     }
    
//     else {
//         console.log (c+ " is Max "+ a +" is min")
//     }
    
// }
// console.log(posNegNum(100,66,4))

//Q6
// function evenOdd(a)
//  {
//     if(a % 2 === 0 ){
//          console.log(a+ "  is even")  
//      }
//      else{
//          console.log (a+ " is Odd")
//     }
    
//  }
//  console.log(evenOdd(5))


//Q8
// function vowel(x){
//     switch(x[0]){
//         case "a":
//             console.log("Vowel")
//             break;
//         case "e":
//             console.log("Vowel")
//             break;
//         case "u":
//             console.log("Vowel")
//             break;
//         case "o":
//             console.log("Vowel")
//             break;
//         case "i":
//             console.log("Vowel")
//             break;
//         default:
//             console.log("constant")
//     }
// }
// console.log(vowel("ahmed"))


//Q9
// function count(z){
//     for(var i=1; i<=z ; i++){
//         console.log(i)
//     }

// }
// console.log(count(30))


//Q10
// function mul(num){
//     for(var i =1; i<=12; i++ ){
//         console.log(num * i )
//     }
// }
// console.log(mul(12))


//Q11
function even(num){
         for(var i =1; i<=num; i++ ){
            if(i % 2 === 0){
                console.log(i)
            } 
         }
     }
     console.log(even(80))
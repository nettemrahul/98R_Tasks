//Task 1
var str = "Nettem Rahul Naidu";
console.log(str); 
 
 console.log("No of Characters in a string - ",str.length);
var  a = str.split(" ")
 console.log(a,"No of words - ",a.length);






 console.log("\n");
 // Task2

 var str1 = "Nettem Rahul Naidu"
 var array = [1,2,3,4,5,6,7,8,9,0];

 console.log(str1);
 a = str1.split("")
 console.log(a);
 console.log("Coverting array into string");
 console.log(array.toString());


var str2 = array.join('-');
console.log(str2);

console.log("\n");

//Task3

var array = '8978909979'
console.log(array.split(""));

for (var i =0; i<array.length; i++ ) 
{
    var add = (Number(array[i])+ 1); 
    console.log(add);

}







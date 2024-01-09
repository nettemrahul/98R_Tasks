//Task 1
var str = ` Nettem Rahul Naidu
Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
 Ullam fugiat, molestias, perferendis
 voluptates nobis officiis excepturi facere consequuntur 
 voluptatem molestiae reiciendis, magnam voluptas quam? 
 Ducimus earum sapiente vero sint numquam`; 
console.log(str); 

var charcount = str.split(" ").length
 console.log("Charcters count",charcount);

 var wordscount = str.split("").length
 console.log("wordscount ", wordscount);

 var linescount = str.split("\n").length
 console.log("Lines Count ",linescount);






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

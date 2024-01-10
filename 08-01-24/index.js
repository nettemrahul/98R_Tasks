//task2
let arr=[1,2,4,5,6,7,8,9];
let even=[];
for(let evens of arr)
{
    if(evens %2===0)
    {
        even.push(evens);
    }

}
console.log(even);

let arr1=[1,3,5,2,6,7,9];
let odd=[];
for(let odds of arr1)
{
    if(odds %2 != 0)
    {
        odd.push(odds);
    }
}
console.log(odd);
//
var array=[1,5,6,8,9,8];

for(let values of array)//if give in indexs
{
    if(values %2===0)
    
       console.log(values +" even")
    
    else
    
        console.log(values +" odd")
    
}

//  using for in 
var array=[1,2,3,4,5,6,7,8,9];

for(let index in array)
{
    if(array[index] %2===0)
    
       console.log(array[index] +" even")
    
    else
    
        console.log(array[index] +" odd")
    
}

   

// Print reverse of array  number

var revarray=[1,4,3,6,2];
console.log(revarray);
 var reversedarr=[];
 for( i=revarray.length-1;i>=0;i--)
 {
    reversedarr.push(revarray[i]);
 }
 console.log(reversedarr);
 //using predefined method
var revarr=[1,4,3,6,2];
 revarr.reverse();
 console.log(revarr);
console.log(revarr.reverse());

//  task 4
console.log("asending and decending order of numbers");
var array=[9,3,2,5,7,9,5,1,0];
console.log(array);

for(i=0;i<array.length;i++)
{
    for(j=0;j<array.length;j++)
    {
        if(array[j]>array[j+1])
        {
            var a =array[j];
            array[j]=array[j+1];
            array[j+1]=a;
        }
       
    }

}
console.log("Asending order:",array);
for(i=0;i<array.length;i++)
{
    for(j=0;j<array.length;j++)
    {
        if(array[j]<array[j+1])
        {
            var b=array[j];
            array[j]=array[j+1];
            array[j+1]=b;
        }
       
    }

}
console.log("descending order:",array);

//strings
var str=["Nettem","Dinesh","Naidu","charan","Rahul"];
//Ascending
str.sort();
console.log(str);
//Descending
str.sort().reverse();
console.log(str)

// task 5

  function IsPalindrome(Str) {
    var numStr=Str.toString();
    var revStr=numStr.split("").reverse().join("");
    if(Str==revStr)
        console.log(Str+" is Palindrome")
    else
        console.log(Str+" Is not a Palindrome")
    
    
  }
  IsPalindrome("mom");
//Task1
for (var i =1; i<=4; i++) {
    var line = "";
    for (var j = 1; j <= i; j++) {
        line +=j;
    }
    console.log(line);

}

//Task2

for (var i =6; i>=1; i--) {
    var line = "";
    for (var j = 1; j <= i ; j++) {
        line = line + j;
    }
    console.log(line);
}

//prime numbers 1 to 100
for(i=1;i<=100;i++){
    for(j=2;j<i;j++){
        if (i%j==0) {
            break;
        }
    }
     if(i==j){
        console.log(i);
     }
}

//Fibonacci Series
console.log("Fibonacci series");
var n1 = 0, n2 = 1, next_sum;
console.log(n1);
console.log(n2);

for(i =1; i <=10; i++) {
    next_sum = n1+ n2;
    n1 = n2;
    n2 = next_sum;
    console.log(next_sum);
}

//Task 4
var employee={
    id:123,
    name:"Rahul",
    designation: "Engineer",
    salary:"20k",
    
};
console.log(employee);
employee.role = employee.designation;
delete employee.designation;
console.log(employee);



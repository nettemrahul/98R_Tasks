//Task 1 
    let array_1 = [22,13,34,5653,2312];
    console.log(array_1)
    let largestNum = [];
    for (let i = 0; i < array_1.length; i++) {
        if (array_1[i] > largestNum) {
            largestNum = array_1[i]
        }
    }
    console.log("largest of element in an array is: " + largestNum)

    //3rd Largest Number
    let arr = [20,30,40,200,45,33];
    console.log(arr)
    let first = []
    let second = []
   let third = []
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > first) {
            third = second;
            second = first;
            first = arr[i];
        } else if (arr[i] > second) {
            third = second;
            second = arr[i];

        } else if (arr[i] > third) {
            third = arr[i]
        }
    }
    console.log("Third Largest element in Array : " + third)

    //Task2 
    let array = [1,1,4,2,3,2,1,5,2,2,5];
    console.log(array);
    let array1 = [];
    for (i = 0; i < array.length; i++) {
        if (array1.indexOf(array[i]) === -1) {
            array1.push(array[i])
        }
    }
    console.log("Array without duplicates " + array1)

    //Task 3 
    console.log("Leap Years between 2000 to 2040")
    function findLeapYear(stringYear, lastYear) {
        for (i = stringYear; i <= lastYear; i++) {
            if (i % 4 == 0 && i % 4 != 100 || i % 400 == 0) {
                console.log(i + " is Leap Year")
            }
        }
    }
    findLeapYear(2000, 2040)
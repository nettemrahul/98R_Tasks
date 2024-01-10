// Person Class
class Person {
    constructor(name,age,gender,height){
        this.name = name;
        this.age= age;
        this.gender = gender;
        this.height = height;
        console.log(this);
    }
}
const person = new Person("Rahul",22,"M","6ft")
const person1 = new Person("Pavani",25,"F","5.8ft")
const person2 = new Person("Tharun",23,"M","6ft")
const person3= new  Person("Charan",22,"M","5.11ft")


// Car class
class Car {
    constructor(company,car_type,wheels,price){
        this.company = company;
        this.car_type = car_type;
        this.wheels = wheels;
        this.price = price;
        console.log(this);


    }
}
const car = new Car("Ford","fuel",4,1000000)
const car1 = new Car("Mahindra","fuel",4,1500000)
const car2= new Car("MG","EV",4,2000000)
const car3= new Car("Kia","EV",4,2500000)



//Remote class
class remote {
    constructor(brand,color,buttons,price){
        this.brand = brand;
        this.color = color;
        this.buttons = buttons;
        this.price = price;
        console.log(this);

    }
}

const remote1 = new remote("Airtel","Red",50,250)
const remote2 = new remote("Dish","orange",49,200)
const remote3 = new remote("SunDirect","green",35,100)
const remote4 = new remote("TataSky","violet",45,150)

//computer class

class Computer {
        constructor(brand,Processor,Ram,Rom,price){
            this.brand=brand;
            this.Processor=Processor;
            this.Ram=Ram;
            this.Rom = Rom;
            this.price =price;
            console.log(this);
    }
}

const computer1 = new Computer("Asus", "i7", "8gb","512gb", 50000);
const computer2 = new Computer("hp", "i5", "8gb","1tb", 60000);
const computer3 = new Computer("lenovo", "i7","16gb","1tb", 60000);
const computer4 = new Computer("Dell0", "i9","16gb","2tb", 90000);

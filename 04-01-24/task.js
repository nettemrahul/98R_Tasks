//Phone number
var str = `8978909979`;
var pattern = /\d{10}/g;
var result = str.match(pattern);
console.log(result);

//Ip address

var ipaddress = `192.168.216.234`;
var pattern = /\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}/
var result = ipaddress.match(pattern);
console.log(result);

//password

var password = `RahulNaidu@5484` 
var pattern =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,16}$/;
var result = password.match(pattern);
var test = pattern.test(password)
console.log(result);
console.log(test);

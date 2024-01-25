fetch("https://jsonplaceholder.typicode.com/users")
.then((resposne)=> resposne.json())
.then((data) => console.log(data));
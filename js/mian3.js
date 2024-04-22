fetch('https://jsonplaceholder.typicode.com/posts/', {
  method: 'GET',
  body: JSON.stringify({
    // name:"Sandeep",
    title: 'student',
    body: 'Sandeep',
    userId: 123,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));




 


// let sandeep = fetch("https://jsonplaceholder.typicode.com/users");
// sandeep.then((response)=>{
//     console.log(response.status);
//     console.log(response.ok);
    
// return response.json()
// }).then((data)=>{
//     console.log(data);
    
//     for(let x  in data)
//  document.writeln(`${data[x].name} - id =  ${data[x].id} - phoneNumber =  ${data[x].phone}'<br>'`);
    
    
// }).catch((err)=>{
//     console.log(err);
    
// }) 


// let a = {
//     name:"Bhumika",
//     age:22,

    
// }


// document.writeln(a.name + a.age);


// File----------
// let sandeep = fetch("/js/promise.text");
// sandeep.then((response)=>{
//     console.log(response.status);
    
// return response.text();
// }).then((data)=>{
//     console.log(data);
    
// }).catch((err)=>{
//     console.log(err);
    
// }) 
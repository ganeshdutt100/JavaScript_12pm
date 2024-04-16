

// promise.all----------------------
// let promise = Promise.all([
//     new Promise((resolve)=>{setTimeout(resolve(10),3000)}),
//     new Promise((reject)=>{setTimeout(reject("new Error"),2000)}),
//     new Promise((resolve)=>{setTimeout(resolve("45"),1000)}),
   
// ])
// promise.then(alert)


// Promise.race----------------

// let promse = Promise.race(itrable)
// let promise = Promise.race([
//     new Promise((resolve)=>{setTimeout(resolve("45"),5000)}),
//     new Promise((reject)=>{setTimeout(reject("new Error"),2000)}),
//     new Promise((resolve)=>{setTimeout(resolve(10),3000)}),

  
   
// ])
// promise.then((v)=>{
//       console.log(v);
      
// })



// Promise.any

// let promise = Promise.any([itrable])


// let promise = Promise.any([

//     new Promise((resolve, reject)=>{setTimeout(reject(new Error("its an Error! .. 1")),1000)}),


//     new Promise((resolve, reject)=>{setTimeout(reject(new Error("its an again Error!.. 2")),1000)}),


  

// ])
// promise.catch(x =>{
//     console.log(x.errors[0]);
//     console.log(x.errors[1]);
    
// })


// let promise = Promise.any([

//     new Promise((resolve, reject)=>{setTimeout(reject(new Error("its an Error!")),1000)}),


//     new Promise((resolve, reject)=>{setTimeout(resolve(2),1000)}),
//     new Promise((resolve, reject)=>{setTimeout(resolve(1),1000)}),

// ])
// promise.then((v)=>{
//       console.log(v);
      
// })
let sandeep = fetch("/js/promise.text");
sandeep.then((response)=>{
    console.log(response.status);
    
return response.text();
}).then((data)=>{
    console.log(data);
    
}).catch((err)=>{
    console.log(err);
    
})

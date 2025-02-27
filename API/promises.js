const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Task is complete");  
        resolve() ;
    }, 1000);
})

promise1.then( () => {
    console.log("Promise Consume");
    
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Task 2");
        resolve();
    }, 1000);
}).then(() => {
    console.log("Async2 Resolved");
})

const promise3 = new Promise((resolve, reject) => {
    
})
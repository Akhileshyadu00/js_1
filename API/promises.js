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
    setTimeout(() => {

        resolve({
            userName: "Chai",
            email: "chai@gmail.com"
        });
        
    }, 2000);
})

promise3.then((user) => {
    console.log(user);
    
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        //let error = true;
        let error = false;
        if(!error) {
            resolve({
                userName: "Akhilesh",
                password: "abc@123"
            })
        }else {
            reject("Error: Spmeting went wrong");
        }
    }, 2000);
})

promise4
.then((user) => {
    console.log(user);
    return user.userName;
    
})
.then((userName) => {       //chaining
    console.log(userName);
    
})
.catch((err) => {
    console.log(err);
    
})
.finally(() => console.log("Finally, relove or rejected"));


const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        //let error = false;
        if(!error) {
            resolve({
                userName: "Javascript",
                password: "abc@123"
            })
        }else {
            reject("Error: JS went wrong");
        }
    }, 2000);
})

async function consume5() {

    try {
        const response = await promise5;
        console.log(response);
    } catch (error) {
        console.log(error);   
    }
}
consume5()


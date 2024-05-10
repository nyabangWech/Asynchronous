function message(introduce,name){
 console.log(`${introduce}, my name is ${name}` );
 
 

}
setTimeout(message,3000,"hello there","i am learning");

//an array of IDs and afunction  getUseData(id) that  returns a promise user data
//when given a user ID.

function getUseData(userId,callback){
setTimeout(() => {
    const user={id:userId,name:"Alice"};
    callback(user) ;           
}, 1000); 
}   
function getuserData(userId){
    return new Promise((resolve, reject) => {
        getUseData(userId,(user)=>{
            if(user){
                resolve(user);
            }
        })
    })
}

// an asynchronous function performTask() that returns a Promise. The Promise resolves if the task is successful and rejects if
//there's an error. Write a function that calls performTask() and logs a custom success message if the task is successful, and a custom
// error message if there's an error.
const result = true;
const ourPromise = new Promise((resolve, reject)=>{
    if(result){
        resolve ("learn and master js");
    }
    else{
       reject("Task not successful")
    }
})
ourPromise.then((response)=>{
    console.log({response});
    console.log("Task successful");
})
.catch((error)=>{
    console.log({error});
    console.log("Task is not successful");
})
console.log({ourPromise});
async function performTask(){
    try{
        console.log("Task successful");
        await ourPromise;
    }
    catch{
        console.log("Task has not been successful");
    }
}
performTask();

// Write a function unstableTask that:
// 1.Accepts a taskName and failureProbability (a number between 0 and 1).
// 2. Returns a Promise that:
// Resolves immediately with a success message if a randomly generated number is greater than failureProbability.
// Rejects immediately with a failure message if a randomly generated number is less than or equal to failureProbability.
// Write another function executeWithRetry that:
// Accepts a taskName, retries, and failureProbability.
// Uses a retry mechanism to attempt the unstableTask up to retries times.
// Logs whether the task succeeded or failed after all attempts.
async function executeWithRetry(taskName, retries, failureProbability) {
    let attempt = 0;
    while (attempt < retries) {
        try {
            await unstableTask(taskName, failureProbability);
            console.log(`${taskName} succeeded after ${attempt + 1} attempts.`);
            return;
        } catch (error) {
            console.error(`${taskName} failed on attempt ${attempt + 1}.`);
            attempt++;
        }
    }
    console.error(`${taskName} failed after ${retries} attempts.`);
}
executeWithRetry("SampleTask", 3, 0.5);











        
    

    
 
    
 
    
 
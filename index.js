function message(introduce,name){
 console.log(`${introduce}, my name is ${name}` );
 
 

}
setTimeout(message,3000,"hello there","i am learning");



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











        
    

    
 
    
 
    
 
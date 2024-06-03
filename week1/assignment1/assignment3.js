const startTime=Date.now();
setTimeout(innerFunction,2000)
console.log("Outer function called at",new Date(startTime).toLocaleTimeString())
function innerFunction(){
    const endTime=Date.now();
    console.log("Inner function called at",new Date(endTime).toLocaleTimeString())
    console.log(endTime);
    console.log("Time taken:",(endTime-startTime)/1000,"seconds")

    console.log("I am a function")
}
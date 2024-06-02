// function displaySomethin(data){
//     console.log(data);
// }
// // setInterval(displaySomethin, 1000, 'Hello World');
// setTimeout(displaySomethin, 30*1000, 'Hello World');
let counter=30;
function countdown(){
    console.log(counter);
    console.log('Hello World');
    counter--;
    if(counter>=0){
        setTimeout(countdown, 1000);
    }
}
countdown();
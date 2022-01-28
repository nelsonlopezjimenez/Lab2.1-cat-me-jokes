// Asynchronous JavaScript
// developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous
// 

let start = Date.now();
let d = new Date();

function vremya() {
    let d = new Date();
    console.log(d.getSeconds());
}
setInterval(vremya, 1000);

async function displayDayAsync(value, timeout, i) {
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve(value) 
        }, timeout);
    });
    displayDaySync(await myPromise, i);
}
displayDayAsync("I hate Monday", 2000, 6);

function displayDaySync(value, i) {
    console.log(value);
    let current = Date.now();
    console.log(current - start);
    //p[i].innerHTML = value;
}


displayDayAsync("I Love Thursday", 5000, 9);
displayDayAsync("It is Friday", 3000, 7);

displayDaySync("It is Monday", 1)
displayDaySync("It is Tuesday", 2)
displayDaySync("It is Wednesday", 3)

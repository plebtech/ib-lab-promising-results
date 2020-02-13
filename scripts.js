// promise chain.
// slowMath.add(1, 1) // add together 6 and 2 (then 1 and 1).
// .then((v) => {
//     say(v);
//     return slowMath.multiply(v, 2); // multiply by 2.
// }).then((v) => {
//     say(v);
//     return slowMath.divide(v, 4); // divide by 4.
// }).then((v) => {
//     say(v);
//     return slowMath.subtract(v, 3); // subtract 3.
// }).then((v) => {
//     say(v);
//     return slowMath.add(v, 98); // add 98.
// }).then((v) => {
//     say(v);
//     return slowMath.remainder(v, 2); // modulo 2.
// }).then((v) => {
//     say(v);
//     return slowMath.multiply(v, 50); // multiply by 50.
// }).then((v) => {
//     say(v);
//     return slowMath.remainder(v, 40); // modulo 40.
// }).then((v) => {
//     say(v);
//     return slowMath.add(v, 32); // add 32.
// }).then((v) => {
//     console.log("The final result is: " + v);
// }).catch((err) => {
//     console.log(new Error('Something went terribly wrong!'));
// });
// function say(v) {
//     console.log(v);
// }

// async/await demonstration.
// define an async function, comprised of a try/catch block; all awaits contained in the try and executed sequentially.
// even though the try executes 'synchronously' it is still asynchronous because each waits on the previous one.
// also results in greater economy of code: one catch for all await promises.
let asyncDemo = async () => {
    try {
        let value = await slowMath.add(6, 2);
        say(value);
        value = await slowMath.multiply(value, 2);
        say(value);
        value = await slowMath.divide(value, 4);
        say(value);
        value = await slowMath.subtract(value, 3);
        say(value);
        value = await slowMath.add(value, 98);
        say(value);
        value = await slowMath.remainder(value, 2);
        say(value);
        value = await slowMath.multiply(value, 50);
        say(value);
        value = await slowMath.remainder(value, 40);
        say(value);
        value = await slowMath.add(value, 32);
        say(`The final result is: ${value}`);
    }
    catch {
        say(new Error('Something went terribly wrong!'));
    }
}
function say(v) {
    let div = document.createElement('div');
    div.innerText = v;
    document.body.appendChild(div);
}
asyncDemo();

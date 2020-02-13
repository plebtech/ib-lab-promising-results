slowMath.add(1, 1) // add together 6 and 2 (then 1 and 1).
.then((v) => {
    say(v);
    return slowMath.multiply(v, 2); // multiply by 2.
}).then((v) => {
    say(v);
    return slowMath.divide(v, 4); // divide by 4.
}).then((v) => {
    say(v);
    return slowMath.subtract(v, 3); // subtract 3.
}).then((v) => {
    say(v);
    return slowMath.add(v, 98); // add 98.
}).then((v) => {
    say(v);
    return slowMath.remainder(v, 2); // modulo 2.
}).then((v) => {
    say(v);
    return slowMath.multiply(v, 50); // multiply by 50.
}).then((v) => {
    say(v);
    return slowMath.remainder(v, 40); // modulo 40.
}).then((v) => {
    say(v);
    return slowMath.add(v, 32); // add 32.
}).then((v) => {
    console.log("The final result is: " + v);
}).catch((err) => {
    console.log(new Error('Something went wrong!'));
});
function say(v) {
    console.log(v);
}
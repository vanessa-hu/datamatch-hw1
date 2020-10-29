// In a Javascript file, implement a function FooBar that does the following:
// - Takes in input integer i
// - Loops through all the integers from 1 to i
// - If the current number is divisible by 3, print "Foo" to the console
// - If the current number is divisible by 5, print "Bar" to the console
// - If the current number is divisible by 3 AND 5, print "FooBar" to the console
// - Otherwise, print the current number

// Run this function on input 20.

function fooBar(i) {
    for (let ind = 1; ind < i + 1; ind++) {
        const div3 = (ind % 3 === 0);
        const div5 = (ind % 5 === 0);
        const div3or5 = (div3 ? "Foo" : "") + (div5 ? "Bar" : "");
        if (div3or5) console.log(div3or5);
        else console.log(ind);
    }
}

fooBar(20);
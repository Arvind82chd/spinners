const slashes = ['|', '/', '-', '\\', '|', '|', '/', '-', '\\', '|'];
let count = 0;
const spinner2 = function() {
    for (let slash of slashes) {
        count += 1;
        setTimeout(() => process.stdout.write(`\r${slash}   `), (100 + (100 * count)));
    }
}
spinner2();

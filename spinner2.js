let spinnerPoints = ['\r|   ','\r/   ','\r-   ','\r\\   \n']
let delay = 0;

for( const p of spinnerPoints) {
    setTimeout(() => {
        process.stdout.write(p)
    }, delay);
    delay += 200;
}
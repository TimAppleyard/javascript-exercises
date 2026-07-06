const fibonacci = function(steps) {
    steps = Number(steps)
    if(steps < 0){
        return "OOPS"
    } else if(steps == 0){
        return 0;
    } else if(steps == 1 || steps == 2){
        return 1;
    } else{
        let prev = 1;
        let prevprev = 1;
        let fibo = 0;
        for(let i = 2; i < steps; i++){
            fibo = prev + prevprev;
            prevprev = prev;
            prev = fibo;
        }
        return fibo;
    }
};

// Do not edit below this line
module.exports = fibonacci;

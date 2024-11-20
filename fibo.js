function fibo(num){
    for (let i = 1; i <= num; i++){
        let fibm2 = 0;
        let fib = 1;
        if ( i == 1){
            console.log(0)
            console.log(1)

        }else{

        }
    }
}

function fiboRec(num){
    if (num == 0){
        console.log(num)
        return num;
    }else{
        let fibs = num + fibsRec(num-1);
        console.log(fibs)
        return fibs
    }
}

fiboRec(8)
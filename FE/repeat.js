function repeat(fn,time,delay){
    let i=0;
    let consoleTime
    return function (...args){
       
        consoleTime=setInterval(function(){
           fn(args)
           i++
           if(i>=time) clearInterval(consoleTime)
        },delay)
    }
}
const repeatFunc =repeat(console.log,4,3000)
repeatFunc("hello",123)

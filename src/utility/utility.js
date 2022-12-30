export function debounce(fn,delay){
    let timer = null;
    return function(){
        if(timer){
            //清除timer，重新计时
            clearTimeout(timer);
        }
        timer = setTimeout(()=>{
            // console.log("this:",this);
            fn.apply(this,arguments);
            timer = null;
        },delay);
    } 
}
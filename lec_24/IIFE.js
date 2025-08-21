// Immediately invoked function

(function chai(){
    //named IIFE
    console.log(`DB Connected`);
})();


 ((name)=>{             //parameter passed here
    //Arrow fun IIFE
    console.log(`DB Connected two ${name}`);
})("sammy")//arg passed here



